class Registro {
    
  constructor(
      public Name: string,
      public lastNameOne: string,
      public lastNameTwo: string,
      public phone: string,
      public date: string,
      public email: string,
      public password: string,
      public passwordRepeat: string,
  ) {}

  toString(): string {
      let result = `Name: ${this.Name}\nlastNameOne: ${this.lastNameOne}\nlastNameTwo: ${this.lastNameTwo}\nPhone: ${this.phone}\nDate: ${this.date}\nEmail: ${this.email}\nPassword: ${this.password}\nPassword Repeat: ${this.passwordRepeat}`;
      return result;
  }

}
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

// Obtener el formulario
const form = document.querySelector('form');

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
darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});



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

//MEtodo que registra el usuario.
function registrar() {
  const nombre = (document.getElementById('Name') as HTMLInputElement).value;
  const apellido1 = (document.getElementById('lastNameOne') as HTMLInputElement).value;
  const apellido2 = (document.getElementById('lastNameTwo') as HTMLInputElement).value;
  const telefono = (document.getElementById('phone') as HTMLInputElement).value;
  const fecha = (document.getElementById('date') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const contrasena = (document.getElementById('Input') as HTMLInputElement).value;
  const contrasenaRepetida = (document.getElementById('passwordRepeat') as HTMLInputElement).value;

  const registro = new Registro(nombre, apellido1, apellido2, telefono, fecha, email, contrasena, contrasenaRepetida);
  const modelo = document.getElementById('error') as HTMLParagraphElement;
  const mostrar: string = registro.toString();
  modelo.innerHTML = mostrar;
}



//TELEFONO 
// Inicializa el campo de entrada del teléfono con intl-tel-input
const phoneInputField = document.querySelector("#phone") as HTMLInputElement;
if (phoneInputField) { // Asegúrate de que phoneInputField no es null
    const iti = globalThis.intlTelInput(phoneInputField, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });

    // Añade un oyente de eventos para el evento 'countrychange'
    phoneInputField.addEventListener('countrychange', function() {
        // Obtiene el código del país seleccionado
        const countryCode = iti.getSelectedCountryData().dialCode;

        // Establece el valor del campo de entrada del teléfono al código del país
        phoneInputField.value = '+' + countryCode;
    });
}





