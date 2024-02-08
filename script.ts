// // Espera a que el DOM esté completamente cargado
// $(document).ready(function () {
//     // Utiliza .on() para delegación de eventos
//     $('#thumbs').on('click', 'img', function() {
//         const $this = $(this);

import { Registro } from "./model/Registro";

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


const eye = document.getElementById('Eye') as HTMLElement;
const input = document.getElementById('Input') as HTMLInputElement;

eye.addEventListener("click", function() {
    if (input.type === "password") {
        input.type = "text";
        eye.style.opacity = "0.8";
    } else {
        input.type = "password";
        eye.style.opacity = "0.2";
    }
});

// Función para validar el formulario al hacer clic en el botón "Register"
function validateForm() {
    // Obtener los elementos del formulario
    const nameInput = document.getElementById('Name') as HTMLInputElement;
    const lastNameOneInput = document.getElementById('lastNameOne') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('Input') as HTMLInputElement;
    const passwordRepeatInput = document.getElementById('passwordRepeat') as HTMLInputElement;

    // Variable para almacenar los errores
    let errors = '';

    // Validar el nombre y el primer apellido
    if (!nameInput.value.trim() || !lastNameOneInput.value.trim()) {
        errors += 'El nombre y el primer apellido son obligatorios.<br>';
    }

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        errors += 'El correo electrónico no tiene un formato válido.<br>';
    }

    // Validar que la contraseña coincida con el campo de repetir contraseña
    if (passwordInput.value !== passwordRepeatInput.value) {
        errors += 'Las contraseñas no coinciden.<br>';
    }

    // Mostrar los errores en el párrafo con id "error"
    const errorParagraph = document.getElementById('error') as HTMLParagraphElement;
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
const darkModeToggle = document.getElementById('darkModeToggle') as HTMLInputElement;

// Función para cambiar a dark mode
function enableDarkMode() {
  document.body.classList.add('dark-mode');
}

// Función para cambiar a light mode
function disableDarkMode() {
  document.body.classList.remove('dark-mode');
}

// Event listener para el cambio de estado del checkbox
darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function setPrefix(prefix: string): void {
  const phonePrefixInput = document.getElementById('phonePrefix') as HTMLInputElement;
  if (phonePrefixInput) {
    phonePrefixInput.value = prefix;
  }
}


//Generar Contrasena
function generatePassword() {
  const passwordField = document.getElementById('Input') as HTMLInputElement;
  const passwordRepeatField = document.getElementById('passwordRepeat') as HTMLInputElement;

  const password = generateRandomPassword();
  passwordField.value = password;
  passwordRepeatField.value = password;
}

function generateRandomPassword(): string {
  const blocks: string[] = [];
  for (let i = 0; i < 4; i++) {
      const block = Math.random().toString(36).substring(2, 6);
      blocks.push(block);
  }
  return blocks.join('-');
}

function registrar() {
  const nombre = (document.getElementById('Name') as HTMLInputElement).value;
  const apellido = (document.getElementById('lastNameOne') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const contraseña = (document.getElementById('Input') as HTMLInputElement).value;

  const registro = new Registro(nombre, apellido, email, contraseña);
  console.log(registro.toString());
}
