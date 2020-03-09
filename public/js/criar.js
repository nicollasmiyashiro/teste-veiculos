document.addEventListener('DOMContentLoaded', function(){
    var form = document.querySelector("form");
    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        var formData = new FormData();
        for(var i = 0; i < form.elements.length; i++){
            if(form.elements[i].type != 'submit')
                formData.append(form.elements[i].id, form.elements[i].type == "checkbox" ? form.elements[i].checked == true ? 1 : 0 : form.elements[i].value);
        }
        var ajax = new XMLHttpRequest();
        ajax.onload = function(){
            if(this.status == 200){
                var alerta = document.querySelector('.alert-success');
                alerta.classList.remove("d-none");
                form.reset();
            }else{
                var alerta = document.querySelector('.alert-danger');
                alerta.classList.remove("d-none");
            }

            setTimeout(function(){
                alerta.classList.add("d-none");
            }, 5000);
        }
        ajax.open('post', '/api/veiculos');
        ajax.send(formData);
    });
});
