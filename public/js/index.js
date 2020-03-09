// Source: https://github.com/jserz/js_piece/blob/master/DOM/ParentNode/append()/append().md
(function (arr) {
    arr.forEach(function (item) {
        if (item.hasOwnProperty('append')) {
        return;
        }
        Object.defineProperty(item, 'append', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
            var argArr = Array.prototype.slice.call(arguments),
            docFrag = document.createDocumentFragment();

            argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
            });

            this.appendChild(docFrag);
        }
        });
    });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

document.addEventListener("DOMContentLoaded", function(){
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onload = listarVeiculos;
    xmlHttpRequest.open("get", document.location.origin + "/api/veiculos", true);
    xmlHttpRequest.send();
});

function listarVeiculos(){
    if(this.status == 200){
        var veiculos = JSON.parse(this.response);
        document.getElementById("quantidadeVeiculos").innerText = veiculos.length;
        var lista = document.querySelector(".list-group");
        lista.innerHTML = "";
        if(veiculos.length == 0){
            var button = document.createElement("button");
            button.type = "button";
            button.className.add("list-group-item");
            button.className.add("list-group-item-action");
            button.innerHTML = "Não existe veículo cadastrado.";
            lista.append(button);
            return;
        }
        for(var i = 0; i < veiculos.length; i++){
            var button = document.createElement("a");
            button.href = "/veiculo/" + veiculos[i].id;
            button.title = veiculos[i].veiculo;
            button.classList.add("list-group-item");
            button.classList.add("list-group-item-action");
            button.classList.add("text-primary");
            button.innerHTML = veiculos[i].veiculo;
            lista.append(button);
        }
    }
}
