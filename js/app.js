
function sumar(){
    const forma=document.getElementById('forma');
    let operandoA=forma['operandoA'];
    let operandoB=forma['operandoB'];
    let resultado=parseInt(operandoA.value)+parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado="La operación no incluyé números";
    }
    document.getElementById('resultado').innerHTML=`resultado de la suma: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}

function restar(){
    const forma=document.getElementById('forma');
    let operandoA=forma['operandoA'];
    let operandoB=forma['operandoB'];
    let resultado=parseInt(operandoA.value)- parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado="La operación no incluyé números";
    }
    document.getElementById('resultado').innerHTML=`El resultado de la resta: ${resultado}`;
    console.log(`Resultado de la resta ${resultado}`)
}

function multiplicar(){
    const forma=document.getElementById('forma');
    let operandoA=forma['operandoA'];
    let operandoB=forma['operandoB'];
    let resultado=parseInt(operandoA.value)*parseInt(operandoB.value);
    if(isNaN (resultado)){
        resultado="La operación no incluyé número"
    }
    document.getElementById('resultado').innerHTML=`El resultado de la multiplicación:  ${resultado}`;
    console.log(`Resultado de la multiplicación ${resultado}`);
}

function dividir(){
    const forma=document.getElementById('forma');
    let operandoA=forma['operandoA'];
    let operandoB=forma['operandoB'];
    let resultado=parseInt(operandoA.value)/ parseInt(operandoB.value);
    if(isNaN (resultado)){
        resultado="La operación no incluyé número"

    }
    document.getElementById('resultado').innerHTML=`El resultado de la división es: ${resultado}`

}

function residuo(){
    const forma=document.getElementById('forma');
    let operandoA=forma['operandoA'];
    let operandoB=forma['operandoB'];
    let resultado= parseInt(operandoA.value)% parseInt(operandoB.value);
    if(isNaN(resultado)){
        resultado="Espacio en blanco";
    }
    document.getElementById('resultado').innerHTML=`El resultado del residuo es: ${resultado}`
    console.log(`${resultado}`);


}

