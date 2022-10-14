window.onload = function () {

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

        contatos.push(contato)

        localStorage.setItem('contatos', JSON.stringify(contatos))

    } catch (error) {

        alert(error)

    }




    e.preventDefault();
}