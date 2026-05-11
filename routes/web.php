<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use Laravel\Fortify\Features;

Route::inertia('/', 'welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->middleware('role:seller')->name('dashboard');

    // Seller product catalog (controller -> inertia)
    Route::get('dashboard/products', [ProductController::class, 'index'])
        ->middleware('role:seller')
        ->name('dashboard.products.index');
});

require __DIR__.'/settings.php';
