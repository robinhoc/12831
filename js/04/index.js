window.onload = function () {
    montarLista()
    document.getElementById('frmCadastro').addEventListener('submit', adicionarOuAlterar)
}

function adicionarOuAlterar(e) {

    var txtNome = document.getElementById('txtNome');
    var txtDataNascimento = document.getElementById('dtpDataNascimento');
    var rbSexo = document.getElementById('rdoMasculino');
    var txtEndereco = document.getElementById('txtendereco');
    var txtMsg = document.getElementById('txtmsg');

    /*    !nome ? "sem nome" : nome, //mesmo que 
        if (nome = "") { nome = "sem nome"; }
        else {
            nome = nome
        }*/


    var contato = {
        nome: txtNome.value,
        dataNascimento: new Date(txtDataNascimento.value.replace("-", "/")),
        sexo: rbSexo.checked ? 'M' : 'F',
        endereco: txtEndereco.value,
        msg: txtMsg.value, 
        data: new Date()
    }

    try {

        var contatos = []
        var contatosLocalStorage = localStorage.getItem('contatos')

        if(contatos != null){
            contatos = JSON.parse(contatosLocalStorage)    
        }

        console.log(contatosLocalStorage)
        contatos.push(contato)
        localStorage.setItem('contatos', JSON.stringify(contatos))

    } catch (error) {

        alert(error)

    }

    montarLista()

    document.getElementById('frmCadastro').reset() //limpar form

    e.preventDefault();
}

function montarLista(){
    var contatosLocalStorage = localStorage.getItem('contatos')

    if(contatosLocalStorage == null){
        return;
        contatos = JSON.parse(contatosLocalStorage)    
    }

    var contatos = []
    contatos = JSON.parse(contatosLocalStorage)
    var tbody = document.getElementById('tbodyResultados');

    tbody.innerHTML = ''

    for (let index = 0; index < contatos.length; index++) {
        var nome = contatos[index].nome;
        var nascimento = contatos[index].dataNascimento;
        var sexo = contatos[index].sexo;
        var data = contatos[index].data;

        tbody.innerHTML += '<tr><td>'+ nome +'</td>'+
        '<td>'+ nascimento +'</td>'+
        '<td>'+ sexo +'</td>'+
        '<td>'+ data +'</td></tr>'
    }

    /*contatos.map((contato, index) => {
        tbody.innerHTML = 
            '<tr id="rowTable '+ index +' ">' +
            '<td>'+ contato.nome +'</td>'+
            '<td>'+ contato.dataNascimento +'</td>'+
            '<td>'+ contato.sexo +'</td>'+
            '<td>'+ contato.data +'</td></tr>'
    })*/
}
/*for(var i=0, len=localStorage.length; i<len; i++) {
    var key = localStorage.key(i);
    var value = localStorage[key];
    console.log(key + " => " + value);
}*/