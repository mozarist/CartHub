<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Transactions extends Model
{
    protected $fillable = [
        'user_id',
        'product_id',
        'quantity',
        'total_price',
        'payment_method',
        'status'
    ];

    protected $casts = [
        'payment_method' => 'array'
    ];
}
