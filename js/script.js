let valorTicket         = 200;
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;


let nombre              = document.getElementById("nombre");
let apellido            = document.getElementById("apellido");
let mail                = document.getElementById("mail");
let cantidad            = document.getElementById("cantidad");
let categoria           = document.getElementById("categoria");

const sacarMensajeError = () => {
    let lista_invalid = document.querySelectorAll(".form-control, .form-select");
    for (let i = 0; i < lista_invalid.length; i++) {
        lista_invalid[i].classList.remove('is-invalid')
    }  
}
const total_pagar = () => {
    sacarMensajeError();
    if(nombre.value === "") {
        nombre.classList.add("is-invalid");        
        nombre.focus();
        return;
    }
    if(apellido.value === ""){
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
    }
    if (mail.value === ""){
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }
    if (!emailValido(mail.value)) {
        mail.classList.add("is-invalid");
        mail.focus();
        return;
    }
    if (cantidad.value === "") {
        cantidad.classList.add("is-invalid");
        cantidad.focus();
        return;
    }
    if (categoria.value == "") {
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
    }
    let totalValorTickets = (cantidad.value) * valorTicket;

    switch (categoria.value) {
        case "0":
            totalValorTickets = totalValorTickets;
            break;
        case "1":
            totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
            break;
        case "2":
            totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
            break;
        case "3":
            totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
            break;
    }
    total.innerHTML = totalValorTickets;
}

resumen.addEventListener('click', total_pagar);

const borrar_resumen = () => {
    sacarMensajeError();
    total.innerHTML = "";
}
limpiarForm.addEventListener('click', borrar_resumen);



