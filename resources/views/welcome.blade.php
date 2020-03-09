@extends('layouts.principal')

@section('titulo', 'Veículos')

@section('subtitulo')
    <p class="lead">Mostrando <span id="quantidadeVeiculos"></span> veículos.</p>
@endsection

@section('breadcrumb')
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Veículos</li>
@endsection

@section('conteudo')
    <a href="/novo-veiculo" class="btn btn-secondary mb-4">Adicionar</a>
    <div class="list-group">
    </div>
@endsection

@section('scripts')
    <script src="{{URL::asset('js/index.js')}}"></script>
@endsection
