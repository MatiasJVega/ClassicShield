function cambioKilometraje(){
    const km = Number(document.getElementById("kilometraje").value);
    const kmSelect = document.getElementById("descuento");
    let kmOption = document.getElementById("desc_km");
    if (km < 10000 && !kmOption ) {
        kmOption = document.createElement("option");
        kmOption.setAttribute("value","desc_km");
        kmOption.setAttribute("id", "desc_km");
        kmOption.innerText = "Descuento por bajo kilometraje";
        kmSelect.appendChild (kmOption);
    } else if (kmOption){
        kmSelect.removeChild(kmOption)
    }
}