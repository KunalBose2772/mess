<?php
namespace App\Core;

class Controller {
    protected function baseUrl(): string
    {
        $scriptName = $_SERVER['SCRIPT_NAME'] ?? '/index.php';
        $baseUrl = implode('/', array_slice(explode('/', $scriptName), 0, -1));

        if ($baseUrl === '' || $baseUrl === '/') {
            return '/';
        }

        return rtrim($baseUrl, '/') . '/';
    }

    /**
     * Render a view and wrap it in the global layout template.
     */
    protected function render($viewPath, $data = []) {
        $data['baseUrl'] = $this->baseUrl();

        extract($data);

        $viewFile = __DIR__ . '/../../app/Views/' . $viewPath . '.php';

        if (!file_exists($viewFile)) {
            throw new \RuntimeException('View file not found: ' . $viewPath);
        }

        ob_start();
        require $viewFile;
        $content = ob_get_clean();

        $layoutFile = __DIR__ . '/../../app/Views/layout/main.php';
        if (file_exists($layoutFile)) {
            require $layoutFile;
        } else {
            echo $content;
        }
    }

    /**
     * Helper to redirect to a path relative to the app base url.
     */
    protected function redirect($path) {
        header('Location: ' . $this->baseUrl() . ltrim($path, '/'));
        exit;
    }
}
