<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class ClientsController
{
    public function index()
    {
        return Client::all();
    }

    public function store(Request $request)
    {
        return response()
        ->json(Client::create($request->all()), 201);
    }

    public function show(int $id)
    {
        $client = Client::find($id);
        if(is_null($client)) {
            return response()->json('', 204);
        }
        
        return response()->json($client, 200);
    }

    public function update(Request $request, int $id)
    {
        $client = Client::find($id);
        if(is_null($client)) {
            return response()->json([
                'error' => 'Not found'
            ], 404);
        }

        $client->fill($request->all());
        $client->save();

        return response()->json($client, 200);
    }

    public function destroy(int $id)
    {
        $qtdResourcesRemove = Client::destroy($id);
        if($qtdResourcesRemove === 0) {
            return response()->json([
                'error' => 'Not found'
            ], 404);
        }

        return response()->json('', 204);
    }
}