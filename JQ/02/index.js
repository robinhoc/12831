$(document).ready(function(){
    var nacionalidadeValidacao ='B';

    $("#cbNovidades").hide();  

    $('#brasil').click(function(){
        $("#cbEstados").hide(); 
    })   
    
    $("input[name='nacionalidade']").click(function(){

        var tipoNacionalidade = $(this).val();
        nacionalidadeValidacao = tipoNacionalidade;

        if(tipoNacionalidade == 'E'){
            $('#cbEstados').attr('disabled', 'disabled'); 
            $("select#cbEstados").val('0');
        } else {
            $('#cbEstados').attr('disabled', false); 
        }
    })   
    
    $('#novidades').click(function(){
        if ($("#novidades").is(":checked")) {
            $('#cbNovidades').show();
        } else {
            $('#cbNovidades').hide();     
        }
    }) 
    
    $('#btnEnvio').click(function(){
        if( $("#txtnome").val().length === 0 ) {
            $("#txtnome").addClass("warning");
            return;
        }

        if( $("#txtemail").val().length === 0 ) {
            $("#txtemail").addClass("warning");
            return;
        }  

        if(nacionalidadeValidacao == 'B'){
            var valorestado = $("#cbEstados").val();

            if(valorestado == '0'){
                $("#cbEstados").addClass("warning");
                return  
            }
        }
        
        alert('Registro confirmado')
    })  
    
    $('#txtnome').focusin(function(){
        $("#txtnome").removeClass("warning");
    })  
    
    $('#txtemail').focusin(function(){
        $("#txtemail").removeClass("warning");
    })  
    
    $('#cbEstados').focusin(function(){
        $("#cbEstados").removeClass("warning");
    })      
})    