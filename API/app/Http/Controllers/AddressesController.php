<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Address;

class AddressController
{
    public function index()
    {
        return Address::all();
    }

    public function store(Request $request)
    {
        return response()->json(Address::create($request->all()), 201);
    }

    public function show(int $id)
    {
        $address = Address::find($id);
        if (is_null($address)) {
            return response()->json("", 204);
        }
    }
}
