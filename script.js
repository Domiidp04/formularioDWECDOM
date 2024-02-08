"use strict";
// // Espera a que el DOM esté completamente cargado
// $(document).ready(function () {
//     // Utiliza .on() para delegación de eventos
//     $('#thumbs').on('click', 'img', function() {
//         const $this = $(this);
Object.defineProperty(exports, "__esModule", { value: true });
var Registro_1 = require("./model/Registro");
//         // Limpia el formato
//         $('#thumbs img').removeClass('border-highlight');
//         // Destaca con un borde coloreado
//         $this.addClass('border-highlight');
//         // Obtiene el valor del atributo 'id'
//         const idAttribute = $this.attr('id');
//         // Verifica si 'idAttribute' no es undefined antes de usarlo
//         if (idAttribute !== undefined) {
//             // Cambia el valor del campo del formulario "prod" al valor de img.id
//             $('[name="prod"]').val(idAttribute.substring(idAttribute.lastIndexOf('-') + 1));
//         }
//     });
// });
var eye = document.getElementById('Eye');
var input = document.getElementById('Input');
eye.addEventListener("click", function () {
    if (input.type === "password") {
        input.type = "text";
        eye.style.opacity = "0.8";
    }
    else {
        input.type = "password";
        eye.style.opacity = "0.2";
    }
});
// Función para validar el formulario al hacer clic en el botón "Register"
function validateForm() {
    // Obtener los elementos del formulario
    var nameInput = document.getElementById('Name');
    var lastNameOneInput = document.getElementById('lastNameOne');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('Input');
    var passwordRepeatInput = document.getElementById('passwordRepeat');
    // Variable para almacenar los errores
    var errors = '';
    // Validar el nombre y el primer apellido
    if (!nameInput.value.trim() || !lastNameOneInput.value.trim()) {
        errors += 'El nombre y el primer apellido son obligatorios.<br>';
    }
    // Validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        errors += 'El correo electrónico no tiene un formato válido.<br>';
    }
    // Validar que la contraseña coincida con el campo de repetir contraseña
    if (passwordInput.value !== passwordRepeatInput.value) {
        errors += 'Las contraseñas no coinciden.<br>';
    }
    // Mostrar los errores en el párrafo con id "error"
    var errorParagraph = document.getElementById('error');
    errorParagraph.innerHTML = errors;
    // Detener el envío del formulario si hay errores
    if (errors) {
        return false;
    }
    registrar();
    return true;
}
//DARKMODE
// Obtener el checkbox del dark mode
var darkModeToggle = document.getElementById('darkModeToggle');
// Función para cambiar a dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
}
// Función para cambiar a light mode
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
}
// Event listener para el cambio de estado del checkbox
darkModeToggle.addEventListener('change', function () {
    if (darkModeToggle.checked) {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
});
function setPrefix(prefix) {
    var phonePrefixInput = document.getElementById('phonePrefix');
    if (phonePrefixInput) {
        phonePrefixInput.value = prefix;
    }
}
//Generar Contrasena
function generatePassword() {
    var passwordField = document.getElementById('Input');
    var passwordRepeatField = document.getElementById('passwordRepeat');
    var password = generateRandomPassword();
    passwordField.value = password;
    passwordRepeatField.value = password;
}
function generateRandomPassword() {
    var blocks = [];
    for (var i = 0; i < 4; i++) {
        var block = Math.random().toString(36).substring(2, 6);
        blocks.push(block);
    }
    return blocks.join('-');
}
function registrar() {
    var nombre = document.getElementById('Name').value;
    var apellido = document.getElementById('lastNameOne').value;
    var email = document.getElementById('email').value;
    var contraseña = document.getElementById('Input').value;
    var registro = new Registro_1.Registro(nombre, apellido, email, contraseña);
    console.log(registro.toString());
}
