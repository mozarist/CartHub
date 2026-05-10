<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class SellerUserSeeder extends Seeder
{
    public function run(): void
    {
        app(PermissionRegistrar::class)->forgetCachedPermissions();

        Role::findOrCreate('seller', 'web');

        $seller = User::firstOrCreate(
            ['email' => 'seller@example.com'],
            [
                'name' => 'Seller',
                'password' => 'password',
                'email_verified_at' => now(),
            ],
        );

        $seller->assignRole('seller');
    }
}
