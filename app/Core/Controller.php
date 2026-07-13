<?php
namespace App\Core;

class Controller {
    /**
     * Render a view and wrap it in the global layout template.
     */
    protected function render($viewPath, $data = []) {
        // Resolve dynamic base URL for static assets and link paths
        $scriptName = $_SERVER['SCRIPT_NAME'];
        $baseUrl = implode('/', array_slice(explode('/', $scriptName), 0, -1));
        if ($baseUrl === '' || $baseUrl === '/') {
            $baseUrl = '/';
        } else {
            $baseUrl = rtrim($baseUrl, '/') . '/';
        }

        // Add base URL to data so it's always accessible in views
        $data['baseUrl'] = $baseUrl;

        // Extract data variables so they are accessible inside the view file scope
        extract($data);

        $viewFile = __DIR__ . '/../../app/Views/' . $viewPath . '.php';

        if (file_exists($viewFile)) {
            // Buffer the view's specific output
            ob_start();
            require $viewFile;
            $content = ob_get_clean();

            // Load the main wrapper layout
            $layoutFile = __DIR__ . '/../../app/Views/layout/main.php';
            if (file_exists($layoutFile)) {
                require $layoutFile;
            } else {
                echo $content; // Fallback if no layout exists
            }
        } else {
            die("View file not found: " . $viewPath);
        }
    }

    /**
     * Helper to redirect to a path relative to the app base url.
     */
    protected function redirect($path) {
        $scriptName = $_SERVER['SCRIPT_NAME'];
        $baseUrl = implode('/', array_slice(explode('/', $scriptName), 0, -1));
        if ($baseUrl === '' || $baseUrl === '/') {
            $baseUrl = '/';
        } else {
            $baseUrl = rtrim($baseUrl, '/') . '/';
        }
        header("Location: " . $baseUrl . ltrim($path, '/'));
        exit;
    }
}
