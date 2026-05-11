<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'product_name',
        'category',
        'description',
        'price',
        'stock',
        'image_url',
        'payment_method'
    ];

    protected $casts = [
        'payment_method' => 'array'
    ];
}
