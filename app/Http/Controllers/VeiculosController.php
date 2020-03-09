<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Veiculos;

class VeiculosController{
    public function index(Request $request){
        return response()->json(Veiculos::get(), 200);
    }

    public function show(int $veiculo, Request $request){
        return response()->json(Veiculos::find($veiculo), 200);
    }

    public function store(Request $request){
        //return response('teste', 200);
        if($request->has(['veiculo', 'marca', 'ano', 'descricao', 'vendido']) && sizeof($request->all()) == 5){
            try{
                DB::beginTransaction();
                $request->vendido = boolval(intval($request->vendido));
                $veiculo = Veiculos::create($request->all());
                DB::Commit();
                return response()->json($veiculo, 200);
            }catch(\Exception $e){
                DB::rollback();
                return response($e, 500);
            }
        }

        return response()->json(json_decode('{"message": "Atributos inválidos"}'), 400);
    }

    public function update(int $veiculo, Request $request){
        try{
            DB::beginTransaction();
            $veiculo = Veiculos::find($veiculo);
            if($request->filled('veiculo')) $veiculo->veiculo = $request->veiculo;
            if($request->filled('marca')) $veiculo->marca = $request->marca;
            if($request->filled('ano')) $veiculo->ano = $request->ano;
            if($request->filled('descricao')) $veiculo->descricao = $request->descricao;
            if($request->filled('vendido')) $veiculo->vendido = boolval(intval($request->vendido));
            $veiculo->save();
            DB::commit();
            return response()->json($veiculo, 200);
        }catch(\Exception $e){
            DB::rollback();
            return response($e, 500);
        }
    }

    public function destroy(int $veiculo, Request $request){
        try{
            DB::beginTransaction();
            $veiculo = Veiculos::destroy($veiculo);
            DB::commit();
            return response()->json($veiculo, 200);
        }catch(\Exception $e){
            DB::rollback();
            return response($e, 500);
        }
    }
}
