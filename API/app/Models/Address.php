<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    public $timestamps = false;
    protected $fillable = ['zipCode', 'street', 'city', 'state', 'number', 'complement'];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}