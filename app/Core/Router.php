<?php
namespace App\Core;

class Router {
    protected $routes = [];

    /**
     * Add a route with a specific controller action.
     * Supports placeholders like {slug}.
     */
    public function add($route, $handler) {
        // Convert route to regex
        // Escape special chars but preserve placeholder patterns
        $routePattern = preg_quote($route, '#');
        // Replace \{placeholder\} with (?P<placeholder>[a-zA-Z0-9-]+)
        $routePattern = preg_replace('/\\\{([a-zA-Z0-9_]+)\\\}/', '(?P<\1>[a-zA-Z0-9-]+)', $routePattern);
        $routePattern = '#^' . $routePattern . '$#sD';
        $this->routes[$routePattern] = $handler;
    }

    /**
     * Dispatch the request to the matching controller and method.
     */
    public function dispatch($url) {
        foreach ($this->routes as $routePattern => $handler) {
            if (preg_match($routePattern, $url, $matches)) {
                $params = [];
                foreach ($matches as $key => $value) {
                    if (is_string($key)) {
                        $params[$key] = $value;
                    }
                }

                $controllerName = $handler[0];
                $methodName = $handler[1];

                if (class_exists($controllerName)) {
                    $controller = new $controllerName();
                    if (method_exists($controller, $methodName)) {
                        call_user_func_array([$controller, $methodName], [$params]);
                        return;
                    }
                }
            }
        }

        // Default 404 handler
        $this->show404();
    }

    protected function show404() {
        header("HTTP/1.0 404 Not Found");
        $controller = new \App\Controllers\PageController();
        $controller->notFound();
    }
}
