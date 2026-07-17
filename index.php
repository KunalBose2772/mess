<?php
/**
 * Student's Mess - Premium Website MVC Entry Point
 * Serving Ranchi Since 1999
 */

// Error reporting for development (can be disabled in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Start session for CSRF or general state management
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// 1. PSR-4 Autoloader
spl_autoload_register(function ($class) {
    $prefix = 'App\\';
    $base_dir = __DIR__ . '/app/';

    $len = strlen($prefix);
    if (strncmp($prefix, $class, $len) !== 0) {
        return;
    }

    $relative_class = substr($class, $len);
    $file = $base_dir . str_replace('\\', '/', $relative_class) . '.php';

    if (file_exists($file)) {
        require $file;
    }
});

// 2. Initialize Router
$router = new App\Core\Router();

// Define Homepage Route
$router->add('', [App\Controllers\HomeController::class, 'index']);

// Core Page Routes
$router->add('about-us', [App\Controllers\PageController::class, 'about']);
$router->add('monthly-meal-plans', [App\Controllers\PageController::class, 'plans']);
$router->add('bulk-orders', [App\Controllers\PageController::class, 'bulk']);
$router->add('takeaway', [App\Controllers\PageController::class, 'takeaway']);
$router->add('todays-menu', [App\Controllers\PageController::class, 'menu']);
$router->add('gallery', [App\Controllers\PageController::class, 'gallery']);
$router->add('reviews', [App\Controllers\PageController::class, 'reviews']);
$router->add('contact', [App\Controllers\PageController::class, 'contact']);
$router->add('thank-you', [App\Controllers\PageController::class, 'thankYou']);
$router->add('privacy-policy', [App\Controllers\PageController::class, 'privacy']);
$router->add('terms-of-service', [App\Controllers\PageController::class, 'terms']);
$router->add('page/{slug}', [App\Controllers\PageController::class, 'contentPage']);

// Dynamic Service & Area Spokes
$router->add('services/{slug}', [App\Controllers\PageController::class, 'service']);
$router->add('areas/{slug}', [App\Controllers\PageController::class, 'area']);

// Blog Hub
$router->add('blog', [App\Controllers\PageController::class, 'blog']);
$router->add('blog/{slug}', [App\Controllers\PageController::class, 'blogPost']);

// Form Submissions
$router->add('submit-quote', [App\Controllers\FormController::class, 'submitQuote']);
$router->add('submit-contact', [App\Controllers\FormController::class, 'submitContact']);

// 3. Resolve and Dispatch URL
$requestUri = $_SERVER['REQUEST_URI'];
// Detect if running in subdirectory (like /mess/) and strip base path
$scriptName = $_SERVER['SCRIPT_NAME'];
$basePath = implode('/', array_slice(explode('/', $scriptName), 0, -1)) . '/';

$url = substr($requestUri, strlen($basePath));
$url = trim(explode('?', $url)[0], '/');

$router->dispatch($url);
