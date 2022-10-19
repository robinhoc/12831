$(document).ready(function(){
    document.getElementById('frmCadastro').addEventListener('submit', AddUpdate);

    lisctarContados();

    $("#form").submit(function () {

        AddUpdate();
        lisctarContados();

    });   
    
    function AddUpdate(e){
        var campoNome = $('#txtNome').val();
        var campoIdade = $('#txtIdade').val();
        var campoTelefone = $('#txtTelefone').val();

        console.log(campoNome.value)

        var contato = {
            nome: campoNome.value,
            idade: campoIdade.value,
            telefone: campoTelefone.value
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
    
        montarLista()
    
        //document.getElementById('frmCadastro').reset() //limpar form
    
        e.preventDefault();
    }

    function lisctarContados(){
        var contatosLocalStorage = localStorage.getItem('contatos')
    
        if(contatosLocalStorage == null){
            return; 
        }
    
        var contatos = []
        contatos = JSON.parse(contatosLocalStorage)
        var tbody = document.getElementById('tbodyResultados');
    
        tbody.innerHTML = ''
    
        for (let index = 0; index < contatos.length; index++) {
            var nome = contatos[index].nome;
            var idade = contatos[index].idade;
            var telefone = contatos[index].telefone;
    
            tbody.innerHTML += '<tr><th>'+ nome +'</th>'+
            '<th>'+ idade +'</th>'+
            '<th>'+ telefone +'</th></tr>'
        }
    }    
})