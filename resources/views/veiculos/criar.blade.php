@extends('layouts.principal')

@section('titulo', 'Adicionar veículo')

@section('conteudo')
    <div class="d-none alert alert-success" role="alert">
        Veículo criado com sucesso!
    </div>
    <div class="d-none alert alert-danger" role="alert">
        Não foi possível criar veículo.
    </div>
    <form>
        <div class="row">
            <label for="veiculo">Veículo</label>
            <input id="veiculo" class="form-control" required>
        </div>
        <div class="row">
            <label for="marca">Marca</label>
            <input id="marca" class="form-control" required>
        </div>
        <div class="row">
            <label for="ano">Ano</label>
            <input type=number id="ano" class="form-control" required>
        </div>
        <div class="row">
            <label for="descricao">Descrição</label>
            <textarea id="descricao" class="form-control" rows=3 required></textarea>
        </div>
        <div class="row form-check form-check-inline my-2">
            <input type=checkbox id="vendido" class="form-check-input">
            <label for="vendido" class="form-check-label">Vendido</label>
        </div>
        <div class="row d-flex justify-content-end">
            <button type=submit class="btn btn-primary">Salvar</button>
        </div>
    </form>
@endsection

@section('scripts')
    <script src="{{URL::asset('js/criar.js')}}"></script>
@endsection
