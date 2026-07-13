<?php
namespace App\Controllers;

use App\Core\Controller;

class HomeController extends Controller {
    /**
     * Display the website home page with dynamic teaser data.
     */
    public function index() {
        // Load JSON data files to feed teaser sections
        $servicesFile = __DIR__ . '/../../app/Data/services.json';
        $areasFile = __DIR__ . '/../../app/Data/areas.json';
        $menuFile = __DIR__ . '/../../app/Data/menu.json';

        $services = file_exists($servicesFile) ? json_decode(file_get_contents($servicesFile), true) : [];
        $areas = file_exists($areasFile) ? json_decode(file_get_contents($areasFile), true) : [];
        $menu = file_exists($menuFile) ? json_decode(file_get_contents($menuFile), true) : [];

        // Render homepage view
        $this->render('home/index', [
            'title' => "Home Style Meals in Ranchi Since 1999 | Student's Mess",
            'metaDesc' => "Family-run since 1999, Student's Mess serves fresh home style veg & non-veg meals, monthly tiffin plans, bulk orders & takeaway across Ranchi. Order today.",
            'services' => $services,
            'areas' => $areas,
            'menu' => $menu,
            'pageClass' => 'home-page'
        ]);
    }
}
