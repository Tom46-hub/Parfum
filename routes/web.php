<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\UserController;

// Page d'accueil
Route::get('/', function () {
    return Inertia::render('Home');
});

// Pages publiques
Route::get('/preferences', fn () => Inertia::render('preferences'));
Route::get('/legal', fn () => Inertia::render('legal'));
Route::get('/offers', fn () => Inertia::render('offers'));
Route::get('/parfums', fn () => Inertia::render('parfums'));
Route::get('/product', fn () => Inertia::render('product'));
Route::get('/newproduct', fn () => Inertia::render('newproduct'));
Route::get('/cart', fn () => Inertia::render('cart'));
Route::get('/profil', fn () => Inertia::render('profil'));


// Auth - Inertia pages (affichage formulaires)
Route::get('/login', [LoginController::class, 'show'])->name('login');
Route::get('/register', [RegisterController::class, 'show'])->name('register');

// Auth - Traitement backend
Route::post('/login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth');
Route::post('/register', [RegisterController::class, 'register']);

// Pages protégées (auth requise)
Route::middleware('auth')->group(function () {
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/users/{user}', [UserController::class, 'show'])->name('users.show');
    Route::get('/users/{user}/edit', [UserController::class, 'edit'])->name('users.edit');
    Route::put('/users/{user}', [UserController::class, 'update'])->name('users.update');
    Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');
        Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy');
        Route::middleware('auth')->get('/profil', [ProfileController::class, 'show'])->name('profile');

});

// Page 404 par défaut
Route::fallback(fn () => Inertia::render('Page404'));
