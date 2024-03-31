function calcularIMC() {
    let pesoEl = Number(document.getElementById("peso").value)
    let alturaEl = Number(document.getElementById("altura").value)
    
    let imc = pesoEl / ((alturaEl / 100) * (alturaEl / 100))

    if(imc !== "" && imc !== undefined && imc !== null && imc !== Infinity) {
        document.getElementById("resultado").value = `IMC: ${imc.toFixed(2)}`;
    } else {
        document.getElementById("resultado").value = "Digite valores válidos!";
    }
}