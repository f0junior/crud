<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    public $timestamps = false;
    protected $fillable = ['name', 'cpf', 'birthDate', 'phone', 'email', 'password'];

    public function addresses()
    {
        return $this->hasMany(Address::class);
    }
}