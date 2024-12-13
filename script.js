document.addEventListener("DOMContentLoaded", () => {
    // Cargar fechas ocupadas desde Local Storage
    const savedDates = JSON.parse(localStorage.getItem("busyDates"));
    if (savedDates) {
        busyDates = savedDates;
    }

    const dateInput = document.getElementById("date");
    const dateWarning = document.getElementById("date-warning");

    dateInput.addEventListener("input", () => {
        const selectedDate = dateInput.value;
        if (busyDates.includes(selectedDate)) {
            dateWarning.style.display = "block";
            dateInput.setCustomValidity("Esta fecha está ocupada.");
        } else {
            dateWarning.style.display = "none";
            dateInput.setCustomValidity("");
        }
    });
});
