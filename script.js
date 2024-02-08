var Registro = /** @class */ (function () {
    function Registro(Name, lastNameOne, lastNameTwo, phone, date, email, password, passwordRepeat) {
        this.Name = Name;
        this.lastNameOne = lastNameOne;
        this.lastNameTwo = lastNameTwo;
        this.phone = phone;
        this.date = date;
        this.email = email;
        this.password = password;
        this.passwordRepeat = passwordRepeat;
    }
    Registro.prototype.toString = function () {
        var result = "Name: ".concat(this.Name, "\nlastNameOne: ").concat(this.lastNameOne, "\nlastNameTwo: ").concat(this.lastNameTwo, "\nPhone: ").concat(this.phone, "\nDate: ").concat(this.date, "\nEmail: ").concat(this.email, "\nPassword: ").concat(this.password, "\nPassword Repeat: ").concat(this.passwordRepeat);
        return result;
    };
    return Registro;
}());
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
// Obtener el formulario
var form = document.querySelector('form');
// Función para cambiar a dark mode
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    if (form) {
        form.classList.remove('bg-light');
        form.classList.add('bg-dark');
    }
}
// Función para cambiar a light mode
function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    if (form) {
        form.classList.remove('bg-dark');
        form.classList.add('bg-light');
    }
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
//MEtodo que registra el usuario.
function registrar() {
    var nombre = document.getElementById('Name').value;
    var apellido1 = document.getElementById('lastNameOne').value;
    var apellido2 = document.getElementById('lastNameTwo').value;
    var telefono = document.getElementById('phone').value;
    var fecha = document.getElementById('date').value;
    var email = document.getElementById('email').value;
    var contrasena = document.getElementById('Input').value;
    var contrasenaRepetida = document.getElementById('passwordRepeat').value;
    var registro = new Registro(nombre, apellido1, apellido2, telefono, fecha, email, contrasena, contrasenaRepetida);
    var modelo = document.getElementById('error');
    var mostrar = registro.toString();
    modelo.innerHTML = mostrar;
}
//TELEFONO 
// Inicializa el campo de entrada del teléfono con intl-tel-input
var phoneInputField = document.querySelector("#phone");
if (phoneInputField) { // Asegúrate de que phoneInputField no es null
    var iti_1 = globalThis.intlTelInput(phoneInputField, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
    // Añade un oyente de eventos para el evento 'countrychange'
    phoneInputField.addEventListener('countrychange', function () {
        // Obtiene el código del país seleccionado
        var countryCode = iti_1.getSelectedCountryData().dialCode;
        // Establece el valor del campo de entrada del teléfono al código del país
        phoneInputField.value = '+' + countryCode;
    });
}
