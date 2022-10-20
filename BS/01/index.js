var sTipoEvento = 'I';

$(function () {
    var seq = 0;

    ListarContatos();

    $("#btnSalvar").click(function () {
        AddUpdate();

        ListarContatos();

        $("input").val('');

        $("#txtNome").focus();
    })

    function AddUpdate(e) {
        var campoNome = $('#txtNome').val();
        var campoIdade = $('#txtIdade').val();
        var campoTelefone = $('#txtTelefone').val();

        var contato = {
            nome: campoNome,
            idade: campoIdade,
            telefone: campoTelefone,
            id: seq = seq + 1
        }

        try {
    
            var listacontatos = []
            var contatosLocalStorage = localStorage.getItem('listacontatos')
    
            if(contatosLocalStorage != null){
                listacontatos = JSON.parse(contatosLocalStorage)  
            }

            listacontatos.push(contato)  
    
            localStorage.setItem('listacontatos', JSON.stringify(listacontatos))
    
        } catch (error) {
    
            alert(error)
    
        }        
    }

    function ListarContatos(){
        sTipoEvento = 'I';

        var contatosLocalStorage = localStorage.getItem('listacontatos')
    
        if(contatosLocalStorage == null){
            seq = 0;
            return; 
        }
    
        var contatos = []
        contatos = JSON.parse(contatosLocalStorage)

        seq = contatos.length;

        var tbody = document.getElementById('tbodyResultados');
    
        tbody.innerHTML = ''
    
        for (let index = 0; index < contatos.length; index++) {
            var nome = contatos[index].nome;
            var idade = contatos[index].idade;
            var telefone = contatos[index].telefone;
            var id = contatos[index].id;
    
            tbody.innerHTML += '<tr><th>'+ nome +'</th>'+
            '<th>'+ idade +'</th>'+
            '<th>'+ telefone +'</th>  <th><button id="btnEditar" alt="'+ index +'" type="button" class="btn btn-warning btn-sm">Alterar</button>'+
            '<button id="btnExcluir" alt="'+ index +'"  type="button" class="btn btn-danger btn-sm">Excluir</button> </th>  </tr>'
        }        
    }

    $(document).on('click', '#btnExcluir', function () {
        sTipoEvento = 'D';

        var posicao = parseInt($(this).attr("alt"));

        var contatosStorage = JSON.parse(localStorage.getItem("listacontatos"));

        contatosStorage.splice(posicao, 1);
        
        localStorage.setItem("listacontatos", JSON.stringify(contatosStorage))

        alert('Contato excluído!');

        ListarContatos();

    });


    $(document).on('click', '#btnEditar', function () {
        sTipoEvento = 'U';

        var posicao = parseInt($(this).attr("alt"));

        //posicaoParaRemover = posicao;

        var contatosStorage = JSON.parse(localStorage.getItem("listacontatos"));

        var contato = contatosStorage[posicao];

        $("#txtNome").val(contato.nome);
        $("#txtIdade").val(contato.idade);
        $("#txtTelefone").val(contato.telefone);

    });
   
})

/*

$(function () {
    $("#btnSalvar").click(function () {


        adicionarContato();

        $('input').val('');
        $('#txtNome').focus();
    });

    Listar();

    $(document).on('click', '#btnExcluir', function () {

        var posicao = parseInt($(this).attr("alt"));

        var contatosStorage = JSON.parse(localStorage.getItem("contatos"));
        contatosStorage.splice(posicao, 1);
        
        localStorage.setItem("contatos", JSON.stringify(contatosStorage))

        alert('Contato excluído!');

        Listar();

    });


    $(document).on('click', '#btnEditar', function () {




        // $('#btnAdd').hide();

        var posicao = parseInt($(this).attr("alt"));

        //posicaoParaRemover = posicao;

        var contatosStorage = JSON.parse(localStorage.getItem("contatos"));

        var contato = contatosStorage[posicao];

         $("#txtNome").val(contato.nome);
         $("#txtIdade").val(contato.idade);
         $("#txtTelefone").val(contato.telefone);
         // $('#btnSave').show();
 
     });
 });
 
 function adicionarContato() {
 
     if ($.trim($('#txtNome').val()) == '') {
         alert('Favor informar o nome!');
         $('#txtNome').focus();
         return false;
     }
     if ($.trim($('#txtIdade').val()) == '') {
         alert('Favor informar a idade!');
         $('#txtIdade').focus();
         return false;
     }
     if ($.trim($('#txtTelefone').val()) == '') {
         alert('Favor informar o telefone!');
         $('#txtTelefone').focus();
         return false;
     }
 
 
     var contato = {
         nome: $("#txtNome").val(),
         idade: $("#txtIdade").val(),
         telefone: $("#txtTelefone").val()
     };
 
 
     var contatosStorage = JSON.parse(localStorage.getItem("contatos"));
 
     //console.log('Valores atuais no localstorage ' + JSON.stringify(contatosStorage));
 
     if (contatosStorage == null) {
         contatosStorage = [];
         contatosStorage.push(contato);
     }
     else {
         if (posicaoParaRemover > -1) {
 
             contatosStorage[posicaoParaRemover] = {
                 nome: $("#txtNome").val(),
                 idade: $("#txtIdade").val(),
                 telefone: $("#txtTelefone").val()
             };
         }
         else {
             contatosStorage.push(contato);
         }
     }
 
     //console.log('Com o objeto atual adicionado! ' + JSON.stringify(contatosStorage));
     localStorage.setItem("contatos", JSON.stringify(contatosStorage))
 
 
     // $('#tblContatos tr:not(:first)').remove();
 
     //contatosStorage = JSON.parse(localStorage.getItem("contatos"));
 
     //console.log(contatosStorage[0]);
 
     Listar();
 
     posicaoParaRemover = -1;
 
 }
 
 function Listar() {
     var contatosStorage = JSON.parse(localStorage.getItem("contatos"));
 
     for (var posicao in contatosStorage) {
 
         console.log(posicao);
         var contato = contatosStorage[posicao];
 
         $('#tblContatos tr:last').after('<tr><td>' + contato.nome + '</td><td>' +
             contato.idade + '</td><td>' + contato.telefone + '</td><td>' +
             '<button id="btnExcluir" alt="' + posicao +
             '" class="btn btn-danger btn-sm">Excluir</button>   <button id="btnEditar" alt="'
             + posicao + '" class="btn btn-info btn-sm">Editar</button>' +
             '</td></tr>');
     }
 }
 Footer
 © 2022 GitHub, Inc.
 Footer navigation
 
     Terms
     Privacy
     Security
     Status
     Docs
     Contact GitHub
     Pricing
     API
     Training
     Blog
     About
 
 12831/bs at projeto · valdairelaborata/12831 · GitHub
 12831/jq/03 at projeto · valdairelaborata/12831 · GitHub
 12831/jq at projeto · valdairelaborata/12831 · GitHub
 12831/jq/01 at projeto · valdairelaborata/12831 · GitHub
 12831/index.js at projeto · valdairelaborata/12831 · GitHub
*/

