<?php
namespace App\Core;

class Router {
    protected array $routes = [];

    /**
     * Add a route with a specific controller action.
     * Supports placeholders like {slug}.
     */
    public function add($route, $handler): void {
        $routePattern = preg_quote($route, '#');
        $routePattern = preg_replace('/\\\{([a-zA-Z0-9_]+)\\\}/', '(?P<\1>[a-zA-Z0-9-]+)', $routePattern);
        $this->routes['#^' . $routePattern . '$#sD'] = $handler;
    }

    /**
     * Dispatch the request to the matching controller and method.
     */
    public function dispatch($url): void {
        foreach ($this->routes as $routePattern => $handler) {
            if (!preg_match($routePattern, $url, $matches)) {
                continue;
            }

            $params = [];
            foreach ($matches as $key => $value) {
                if (is_string($key)) {
                    $params[$key] = $value;
                }
            }

            [$controllerName, $methodName] = $handler;
            if (!class_exists($controllerName) || !method_exists($controllerName, $methodName)) {
                continue;
            }

            $controller = new $controllerName();
            call_user_func_array([$controller, $methodName], [$params]);
            return;
        }

        $this->show404();
    }

    protected function show404(): void {
        header('HTTP/1.0 404 Not Found');
        $controller = new \App\Controllers\PageController();
        $controller->notFound();
    }
}
