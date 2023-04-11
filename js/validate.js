export var validarFormulario = new FormValidator ("registrarDatos", [{
    name: "name",
    display: "Agustin...",
    rules: "required"
},
{
    name: "lastName",
    display: "Laje...",
    rules: "required"
},
{
    name: "lastName",
    display: "Laje...",
    rules: "required|valid_email"
}
]);