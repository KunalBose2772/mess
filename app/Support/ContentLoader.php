<?php
namespace App\Support;

class ContentLoader
{
    private static array $cache = [];

    public static function loadJson(string $path, array $default = []): array
    {
        $realPath = realpath($path) ?: $path;
        $cacheKey = md5($realPath);

        if (isset(self::$cache[$cacheKey])) {
            return self::$cache[$cacheKey];
        }

        if (!is_file($realPath)) {
            return $default;
        }

        $contents = @file_get_contents($realPath);
        if ($contents === false) {
            return $default;
        }

        $data = json_decode($contents, true);
        if (!is_array($data)) {
            return $default;
        }

        self::$cache[$cacheKey] = $data;
        return self::$cache[$cacheKey];
    }

    public static function clearCache(): void
    {
        self::$cache = [];
    }
}
