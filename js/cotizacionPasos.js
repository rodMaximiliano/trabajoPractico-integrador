$(document).ready(function() {

    // Acceder del paso 1 al paso 2
    $("#sigPaso1").on("click", function() {
        let nombrePersona = $("#name").val();
        let apellidoPersona = $("#lastName").val();
        let emailPersona = $("email").val();
        console.log(nombrePersona);
        console.log(apellidoPersona);
        console.log(emailPersona);
        $("#paso1").hide();
        $("#paso2").show();
    });
    // Dentro del paso 2 volver al paso 1 
    $(`#backPaso2`).on(`click`, function() {
        $(`#paso2`).hide();
        $(`#paso1`).show();
    });
    // Acceder del paso 2 al paso 3
    $(`#sigPaso2`).on(`click`, function() {
        let nombreEmpresa = $("#nameEmpresa").val();
        let apellidoEmpresa = $("#lastName").val();
        let emailEmpresa = $("email").val();
        console.log(nombreEmpresa);
        console.log(apellidoEmpresa);
        console.log(emailEmpresa);
        $(`#paso2`).hide();
        $(`#paso3`).show();
    });
    // Dentro del paso 3 volver al paso 2
    $(`#backPaso3`).on(`click`, function() {
        $(`#paso3`).hide();
        $(`#paso2`).show();
    });

});