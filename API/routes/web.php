<?php

/** @var \Laravel\Lumen\Routing\Router $router */
$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix'=> 'api'], function () use ($router) {
    $router->group(['prefix'=> 'clients'], function () use ($router) {
        $router->get('/', 'ClientsController@index');
        $router->post('/', 'ClientsController@store');
        $router->get('{id}', 'ClientsController@show');
        $router->put('{id}', 'ClientsController@update');
        $router->delete('{id}', 'ClientsController@destroy');
    });
    $router->group(['prefix'=> 'addresses'], function () use ($router) {
        $router->get('/', 'AddressesController@index');
        $router->post('/', 'AddressesController@store');
        $router->get('{id}', 'AddressesController@show');
        $router->put('{id}', 'AddressesController@update');
        $router->delete('{id}', 'AddressesController@destroy');
    });
});