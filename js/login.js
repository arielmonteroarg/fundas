import { cartState } from './cart.js';

export function contactForm() {
  const form = document.querySelector(".contact-form"),
    inputs = document.querySelectorAll(".contact-form [required]");

  // Agregar mensajes de validación
  inputs.forEach((input) => {
    const span = document.createElement("span");
    span.id = input.name;
    span.textContent = input.title;
    span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", span);
  });

  document.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact-form [required]")) {
      let input = e.target,
        pattern = input.pattern || input.dataset.pattern;

      if (pattern && input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.test(input.value)
          ? document.getElementById(input.name).classList.add("is-active")
          : document.getElementById(input.name).classList.remove("is-active");
      }

      if (!pattern) {
        return input.value === ""
          ? document.getElementById(input.name).classList.add("is-active")
          : document.getElementById(input.name).classList.remove("is-active");
      }
    }
  });

  document.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // Actualizar el estado de cartState con los datos del usuario
    cartState.user = userData.name;
    cartState.email = userData.email;
    cartState.password = userData.password;

    // Guardar los datos en localStorage usando el método de cartState
    cartState.saveToLocalStorage();
   /*  Toastify({
        text: "usuario guardado exitosamente",
        duration: 2000, // Duración del Toast
        gravity: "top", // Posición: "top" o "bottom"
        position: "right", // Posición: "left", "center" o "right"
        style: {
          background: "linear-gradient(to right, #4caf50, #81c784)", // Fondo verde
          color: "#fff", // Texto blanco
          borderRadius: "5px", // Bordes redondeados
          padding: "10px", // Espaciado interno
        },
      }).showToast();
      
      // Reiniciar el formulario después de mostrar el Toast
      form.reset();
          // Redirigir a la página de inicio después de un breve delay
    setTimeout(() => {
        window.location.href = "index.html"; // Redirige al index.html
    }, 1000);  */
	Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario guardado exitosamente ',
        showConfirmButton: true,
    }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {				
    window.location.href = 'index.html';
    } 
})
    
  });
}

contactForm();
