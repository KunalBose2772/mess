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
            'title' => "Best Tiffin Service in Ranchi & Mess in Ranchi | Student's Mess",
            'metaDesc' => "Searching for top tiffin services near me or best mess in Ranchi? Student's Mess provides daily rotating mess menu, hygienic lunch box service, and nutritious lunch box meals near me across Ranchi.",
            'metaKeywords' => "tiffin services near me, mess menu, mess in ranchi, tiffin service in ranchi, lunch box meals near me, lunch box service, lunch service, lunch box ranchi, lunchbox ranchi, best tiffin service ranchi, ranchi mess service, mess khana",
            'services' => $services,
            'areas' => $areas,
            'menu' => $menu,
            'pageClass' => 'home-page'
        ]);
    }
}
