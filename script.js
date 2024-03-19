function calcular(event){
    event.preventDefault()

    let alcoolInput = document.getElementById("alcool").value;
    let gasolinaInput = document.getElementById("gasolina").value;
    let contentResult = document.getElementById("content-result");
    let textResult = document.getElementById("text-result")

    let gasolinaSpan = document.getElementById("gasolina-result")
    let alcoolSpan = document.getElementById("alcool-result")
    

    /* calculo: alcool/gasolina
    e se o resultado for menor que 0.7 compensa usar alcool
    */

    let calculo = (alcoolInput / gasolinaInput);

    if( calculo < 0.7){
        // aqui compensa usar gasolina
        textResult.innerHTML = "Compensa usar Àlcool";
    }
    else{
        //compensa usar gasolina
        textResult.innerHTML = "Compensa usar Gasolina";
    }

    gasolinaSpan.innerHTML = "Gasolina R$ " + gasolinaInput;
    alcoolSpan.innerHTML = "Àlcool R$ " + alcoolInput;

    contentResult.classList.remove("hide")

}