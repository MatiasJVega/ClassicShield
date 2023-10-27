


const marca = document.getElementById(marca).value;
const modelo = document.getElementById(modelo).value;
const kilometraje = document.getElementById(kilometraje).value;
const combustible = document.getElementById(combustible).value;
const color = document.getElementById(color).value;
const valor = parseFloat(document.getElementById(valor).value);
const cobertura = document.getElementById(cobertura).value;
const descuento = parseFloat(document.getElementById(valor).value);

if(isNaN(valor)){
    showModal: ("por favor ingresa un Valor válido")
}else{
    let valorFinal = valor;
    if(isNaN(descuento)){
        Valorfinal -= descuento;
    }
    }