document.addEventListener("DOMContentLoaded", function() {
    const tipka = document.getElementById("tipka");
    const unos = document.getElementById("unos");
    const samored = document.getElementById("samored");

    function ispis() {
        let podatak = unos.value;
        if (podatak !== "") {
            samored.textContent = podatak; // Ažuriranje tekstualnog sadržaja elementa
            unos.value = ""; // Resetiranje input polja
        }
    }

    tipka.addEventListener("click", ispis);
});
