// Simulación de credenciales de administrador
const adminCredentials = { username: "admin", password: "12345" };
let busyDates = ["2024-12-10", "2024-12-15"]; // Fechas ocupadas iniciales

// Login del administrador
function adminLogin() {
    const username = document.getElementById("admin-username").value;
    const password = document.getElementById("admin-password").value;

    if (username === adminCredentials.username && password === adminCredentials.password) {
        window.location.href = "admin.html"; // Redirige al panel de administración
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

function renderBusyDates() {
    const list = document.getElementById("busy-dates-list");
    list.innerHTML = "";
    busyDates.forEach((date, index) => {
        const li = document.createElement("li");
        li.textContent = date;
        const button = document.createElement("button");
        button.textContent = "Eliminar";
        button.onclick = () => removeBusyDate(index);
        li.appendChild(button);
        list.appendChild(li);
    });

    // Guardar fechas ocupadas en Local Storage
    localStorage.setItem("busyDates", JSON.stringify(busyDates));
}

function addBusyDate() {
    const newDate = document.getElementById("new-date").value;
    if (newDate && !busyDates.includes(newDate)) {
        busyDates.push(newDate);
        renderBusyDates();
    } else {
        alert("Fecha inválida o ya ocupada.");
    }
}

function removeBusyDate(index) {
    busyDates.splice(index, 1);
    renderBusyDates();
}

// Cargar fechas ocupadas al inicio
document.addEventListener("DOMContentLoaded", () => {
    const savedDates = JSON.parse(localStorage.getItem("busyDates"));
    if (savedDates) {
        busyDates = savedDates;
    }
    renderBusyDates();
});


// Cerrar sesión
function logout() {
    window.location.href = "nails.html";
}
