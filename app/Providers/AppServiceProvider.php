<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Fix pour les anciennes versions de MySQL ou les erreurs de clé trop longue
        Schema::defaultStringLength(191);

        // Partager les informations de l'utilisateur avec Inertia
        Inertia::share([
            'auth' => function () {
                return [
                    'user' => Auth::user(), // Récupère l'utilisateur connecté
                ];
            },
        ]);
    }
}

