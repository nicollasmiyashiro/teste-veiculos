<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/veiculo/{id}', function(int $id){
    $veiculo = \App\Veiculos::find($id);
    return view('veiculos.exibir', compact('veiculo', 'id'));
});

Route::get('/novo-veiculo', function(){
    return view('veiculos.criar');
});
