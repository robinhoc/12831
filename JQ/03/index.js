$(document).ready(function () {
    $("input#todos").click(function () {
        var checked_status = this.checked;
        $("input#all").each(function () {
            this.checked = checked_status;
        });
    });





    $("#tudo").click(function () {
        if ($("#tudo").attr("checked") === undefined) {
            $("#selecionados").hide();
        } else {
            $("#selecionados").show();
        }
    });











    $('#estado').attr("disabled", true);

    $("#brasileiro").click(function () {

        $('#estado').attr("disabled", false);

        $("#estrangeiro").click(function () {
            $('#estado').attr("disabled", true);
        });

    });



    $("#form").submit(function () {


     
        var campoNome = $('#nome').val();

        if (campoNome === "") {
            $('#nome').addClass("campo-erro");
        } else {
            $('#nome').removeClass("campo-erro");

        }


        var email = $("#email").val();
        if (email === "") {
            $('#email').addClass("campo-erro");


        } else {
            var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            if (filtro.test(email)) {
                $('#email').removeClass("campo-erro");
            } else {
                $('#email').addClass("campo-erro");

            }
        }
        return false;
    });
});