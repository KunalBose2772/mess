<?php
namespace App\Controllers;

use App\Core\Controller;
use App\Support\ContentLoader;

class HomeController extends Controller {
    /**
     * Display the website home page with dynamic teaser data.
     */
    public function index() {
        $services = ContentLoader::loadJson(__DIR__ . '/../../app/Data/services.json');
        $areas = ContentLoader::loadJson(__DIR__ . '/../../app/Data/areas.json');
        $menu = ContentLoader::loadJson(__DIR__ . '/../../app/Data/menu.json');

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
