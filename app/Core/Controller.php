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

    protected function canonicalUrl(): string
    {
        $isHttps = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
            || (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https')
            || (!empty($_SERVER['SERVER_PORT']) && (int)$_SERVER['SERVER_PORT'] === 443)
            || (!empty($_SERVER['REQUEST_SCHEME']) && strtolower($_SERVER['REQUEST_SCHEME']) === 'https');

        $scheme = $isHttps ? 'https' : 'http';
        $host = $_SERVER['HTTP_HOST'] ?? 'studentsmessranchi.in';
        $uri = $_SERVER['REQUEST_URI'] ?? '/';
        $path = explode('?', $uri)[0];

        return $scheme . '://' . $host . $path;
    }

    /**
     * Render a view and wrap it in the global layout template.
     */
    protected function render(string $viewPath, array $data = []): void {
        $data['baseUrl'] = $this->baseUrl();
        $data['canonicalUrl'] = $data['canonicalUrl'] ?? $this->canonicalUrl();

        $isHttps = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off')
            || (!empty($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https')
            || (!empty($_SERVER['SERVER_PORT']) && (int)$_SERVER['SERVER_PORT'] === 443)
            || (!empty($_SERVER['REQUEST_SCHEME']) && strtolower($_SERVER['REQUEST_SCHEME']) === 'https');
        $scheme = $isHttps ? 'https' : 'http';
        $host = $_SERVER['HTTP_HOST'] ?? 'studentsmessranchi.in';
        $basePrefix = rtrim($data['baseUrl'], '/');
        $data['fullLogoUrl'] = $data['fullLogoUrl'] ?? ($scheme . '://' . $host . $basePrefix . '/assets/images/logo.png');

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
    protected function redirect(string $path): void {
        header('Location: ' . $this->baseUrl() . ltrim($path, '/'));
        exit;
    }
}
