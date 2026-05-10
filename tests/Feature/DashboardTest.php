<?php

use App\Models\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

test('guests are redirected to the login page', function () {
    $response = $this->get(route('dashboard'));
    $response->assertRedirect(route('login'));
});

test('authenticated users can visit the dashboard', function () {
    app(PermissionRegistrar::class)->forgetCachedPermissions();
    Role::findOrCreate('seller', 'web');

    $user = User::factory()->create();
    $user->assignRole('seller');
    $this->actingAs($user);

    $response = $this->get(route('dashboard'));
    $response->assertOk();
});

test('customers can not visit the dashboard', function () {
    app(PermissionRegistrar::class)->forgetCachedPermissions();
    Role::findOrCreate('customer', 'web');

    $user = User::factory()->create();
    $user->assignRole('customer');
    $this->actingAs($user);

    $response = $this->get(route('dashboard'));
    $response->assertForbidden();
});
