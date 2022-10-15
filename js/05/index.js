window.onload = function () {
    montarLista()
    document.getElementById('frmCadastro').addEventListener('submit', adicionarOuAlterar)
}

function adicionarOuAlterar(e) {

    var txtDescrisao = document.getElementById('txtDescrisao');
    var txtCod = document.getElementById('txtCod');
    var rbSituacao = document.getElementById('rdoAtivo');
    var txtEstoque = document.getElementById('txtEstoque');

    var produto = {
        descricao: txtDescrisao.value,
        cod: txtCod.value,
        situacao: rbSituacao.checked ? 'A' : 'I',
        estoque: txtEstoque.value
    }

    try {

        var produtos = []
        var produtosLocalStorage = localStorage.getItem('produtos')

        if(produtosLocalStorage != null){
            produtos = JSON.parse(produtosLocalStorage)  
        }

        produtos.push(produto)  

        localStorage.setItem('produtos', JSON.stringify(produtos))

    } catch (error) {

        alert(error)

    }

    montarLista()

    document.getElementById('frmCadastro').reset() //limpar form

    e.preventDefault();
}

function montarLista(){
    var produtosLocalStorage = localStorage.getItem('produtos')

    if(produtosLocalStorage == null){
        return; 
    }

    var produtos = []
    produtos = JSON.parse(produtosLocalStorage)
    var tbody = document.getElementById('tbodyResultados');

    tbody.innerHTML = ''

    for (let index = 0; index < produtos.length; index++) {
        var Cod = 1;produtos[index].cod;
        var descricao = produtos[index].descricao;
        var situacao = produtos[index].situacao;
        var estoque = produtos[index].estoque;

        tbody.innerHTML += '<tr><td>'+ Cod +'</td>'+
        '<td>'+ descricao +'</td>'+
        '<td>'+ situacaoDecode(situacao) +'</td>'+
        '<td>'+ estoque +'</td></tr>'
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

function situacaoDecode(situacao){
    var decodeSituacao = ''

    if(situacao == 'A'){
        decodeSituacao = 'Ativo'
    }else{
        decodeSituacao = 'Inativo'
    }

    return decodeSituacao;

}
/*for(var i=0, len=localStorage.length; i<len; i++) {
    var key = localStorage.key(i);
    var value = localStorage[key];
    console.log(key + " => " + value);
}*/