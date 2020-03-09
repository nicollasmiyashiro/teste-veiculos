@extends('layouts.principal')

@section('titulo', "Veículo: " . $veiculo->veiculo)

@section('breadcrumb')
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active"><a href="/">Veículos</a></li>
    <li class="breadcrumb-item active" aria-current="page">{{$veiculo->veiculo}}</li>
@endsection

@section('conteudo')
    <div class="d-none alert" role="alert">

    </div>
    <div class="botoes-edicao d-flex w-100">
        <div class="d-flex justify-content-between w-100">
            <button class='btn btn-danger' onclick='excluir({{$veiculo->id}})'>Excluir</button>
            <button class='btn btn-primary' onclick='editarCampos()'>Editar</button>
        </div>
    </div>
    <div class='container-fluid my-3'>
        <div class="row">
            <div class="col-2 border-top border-right border-left border-secondary p-3">Veículo</div>
            <div class="col border-top border-right border-secondary p-3 editar"><span class="texto">{{$veiculo->veiculo}}</span><span class="input d-none"><input id="veiculo" class="form-control" value="{{$veiculo->veiculo}}"></span></div>
        </div>
        <div class="row">
            <div class="col-2 border-top border-right border-left border-secondary p-3">Marca</div>
            <div class="col border-top border-right border-secondary p-3 editar"><span class="texto">{{$veiculo->marca}}</span><span class="input d-none"><input id="marca" class="form-control" value="{{$veiculo->marca}}"></span></div>
        </div>
        <div class="row">
            <div class="col-2 border-top border-right border-left border-secondary p-3">Ano</div>
            <div class="col border-top border-right border-secondary p-3 editar"><span class="texto">{{$veiculo->ano}}</span><span class="input d-none"><input type=number id="ano" class="form-control" value="{{$veiculo->ano}}"></span></div>
        </div>
        <div class="row">
            <div class="col-2 border-top border-right border-left border-secondary p-3">Descrição</div>
            <div class="col border-top border-right border-secondary p-3 editar"><span class="texto">{{$veiculo->descricao}}</span><span class="input d-none"><textarea id="descricao" class="form-control" rows=3>{{$veiculo->descricao}}</textarea></span></div>
        </div>
        <div class="row">
            <div class="col-2 border border-secondary p-3">Vendido</div>
            <div class="col border border-left-0 border-secondary p-3 editar"><span class="texto">{{$veiculo->vendido?"Sim":"Não"}}</span><span class="input d-none"><input type=checkbox id="vendido" {{$veiculo->vendido?'checked':''}}></span></div>
        </div>
    </div>
    <div class="botoes-edicao d-flex w-100">
        <div class="d-none">
            <button class='btn btn-danger' onclick='cancelar()'>Cancelar</button>
            <button class='btn btn-success' onclick='salvar({{$id}})'>Salvar</button>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="{{URL::asset('js/exibir.js')}}"></script>
@endsection
