var valores = null;

function editarCampos(){
    var divBotoes = document.querySelectorAll(".botoes-edicao");
    var lista = document.querySelectorAll('.editar');
    valores = lista.children;
    for(var i = 0; i < divBotoes.length; i++){
        for(var j = 0; j < divBotoes[i].children.length; j++){
            var div = divBotoes[i].children[j];
            if(div.classList.contains('d-flex')){
                div.className = '';
                div.classList.add('d-none');
            }else{
                div.className = '';
                div.classList.add("d-flex");
                div.classList.add("justify-content-between");
                div.classList.add("w-100");
            }
        }
    }
    for(var i = 0; i < lista.length; i++){
        var texto = lista[i].querySelector(".texto");
        var input = lista[i].querySelector(".input");
        texto.classList.add("d-none");
        input.classList.remove("d-none");
    }
}

function salvar(id){
    var xhr = new XMLHttpRequest();
    var json = {};
    var inputs = document.querySelectorAll(".input");
    var textos = document.querySelectorAll('.texto');
    for(var i = 0; i < inputs.length; i++){
        json[inputs[i].children[0].id] = inputs[i].children[0].type == "checkbox" ? inputs[i].children[0].checked == true ? 1 : 0 : inputs[i].children[0].value;
    }

    xhr.onload = function(){
        var alerta = document.querySelector('.alert');
        var nomeDoVeiculoAtual = document.querySelectorAll(".input > input")[0].value;
        var breadcrumb = document.querySelector(".breadcrumb-item[aria-current=page]");
        var title = document.querySelector('title');
        var h1 = document.querySelector('h1');
        alerta.classList.remove("d-none");

        if(this.status == 200){
            alerta.classList.add("alert-success");
            alerta.innerText = 'Veículo editado com sucesso!';

            for(var i = 0; i < textos.length; i++){
                textos[i].innerText = inputs[i].children[0].type == "checkbox" ? inputs[i].children[0].checked ? "Sim" : "Não" : inputs[i].children[0].value;
                inputs[i].classList.add('d-none');
                textos[i].classList.remove('d-none');
            }

            var divBotoes = document.querySelectorAll(".botoes-edicao");
            for(var i = 0; i < divBotoes.length; i++){
                for(var j = 0; j < divBotoes[i].children.length; j++){
                    var div = divBotoes[i].children[j];
                    if(div.classList.contains('d-flex')){
                        div.className = '';
                        div.classList.add('d-none');
                    }else{
                        div.className = '';
                        div.classList.add("d-flex");
                        div.classList.add("justify-content-between");
                        div.classList.add("w-100");
                    }
                }
            }

            breadcrumb.innerText = nomeDoVeiculoAtual;
            title.innerText = "Veículo: " + nomeDoVeiculoAtual;
            h1.innerText = "Veículo: " + nomeDoVeiculoAtual;

        }else if(this.status >= 400){
            alerta.classList.add("alert-danger");
            alerta.innerText = 'Erro ao editar o veículo!';

        }
        setTimeout(function(){
            alerta.classList.add('d-none');
        }, 5000);
    }
    xhr.open('put', '/api/veiculos/' + id);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(json));

}

function cancelar(){
    var divBotoes = document.querySelectorAll(".botoes-edicao");
    var lista = document.querySelectorAll('.editar');
    for(var i = 0; i < divBotoes.length; i++){
        for(var j = 0; j < divBotoes[i].children.length; j++){
            var div = divBotoes[i].children[j];
            if(div.classList.contains('d-flex')){
                div.className = '';
                div.classList.add('d-none');
            }else{
                div.className = '';
                div.classList.add("d-flex");
                div.classList.add("justify-content-between");
                div.classList.add("w-100");
            }
        }
    }
    for(var i = 0; i < lista.length; i++){
        var texto = lista[i].querySelector(".texto");
        var input = lista[i].querySelector(".input");
        texto.classList.remove("d-none");
        input.classList.add("d-none");
    }
}

function excluir(id){
    var xhr = new XMLHttpRequest();
    xhr.onload = function (){
        var alerta = document.querySelector('.alert');
        alerta.classList.remove("d-none");

        if(this.status == 200){
            alerta.classList.add("alert-success");
            alerta.innerText = 'Veículo excluído com sucesso!';
        }else if(this.status >= 400){
            alerta.classList.add("alert-danger");
            alerta.innerText = 'Erro ao excluir o veículo!';
        }
        setTimeout(function(){
            window.location.href = window.location.origin;
        }, 5000);
    }
    xhr.open('delete', '/api/veiculos/' + id);
    xhr.send();
}
