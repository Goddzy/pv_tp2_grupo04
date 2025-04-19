document.addEventListener("DOMContentLoaded", function () {
    // Mapeo de países y sus capitales
    const paisesCapitales = {
        argentina: "buenosaires",
        brasil: "brasilia",
        chile: "santiago",
        mexico: "ciudaddemexico",
        colombia: "bogota",
        peru: "lima"
    };

    // Elementos del DOM
    const paisesSelect = document.getElementById("paises");
    const capitalesSelect = document.getElementById("capitales");

    // Evento change en la lista de países
    paisesSelect.addEventListener("change", function () {
        const paisSeleccionado = paisesSelect.value;
        const capitalCorrespondiente = paisesCapitales[paisSeleccionado];

        // Seleccionar automáticamente la capital correspondiente
        capitalesSelect.value = capitalCorrespondiente;

        // Mostrar en la consola el país y la capital seleccionados
        console.log(`País seleccionado: ${paisesSelect.options[paisesSelect.selectedIndex].text}`);
        console.log(`Capital seleccionada: ${capitalesSelect.options[capitalesSelect.selectedIndex].text}`);
    });
});