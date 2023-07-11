// ejercicio 1

function parImpar (num){
    if (num % 2 === 0) {
        console.log (num + " es número par");
    }
    else {
        console.log (num + " es número impar")
    }   
}

// ejercicio 2

function comparacion (numero1, numero2) {
    if (numero1 > numero2) {
        console.log (numero1 + " es mayor que " + numero2);
    }
    else if (numero2 > numero1) {
        console.log (numero2 + " es mayor que " + numero1);
    }
    else {
        console.log ("Los números ingresados son iguales")
    }    
}

// ejercicio 3 

function multiplo (num) {
    if (num % 5 === 0) {
        console.log (num + " es múltiplo de 5 ");
    }
    else {
        console.log (num + " no es múltiplo de 5");
    }
}

// ejercicio 4 

function contarHasta (num) {
    for (let i=0; i <= num; i ++) {
        console.log(i);
    }
}

// ejercicio 5

function mostrarPalabra(palabra, num){
    for (let i = 0; i < num; i ++) {
        console.log(palabra);
    }
}

// ejericicio 6

let animales = ["gato", "perro", "loro"] 

function array(animales) {
    console.log (animales);
}

// ejercicio 7

function arraySinQuinto (array) {
    for (let i = 0; i < array.length; i++) {
        if (i !== 4) {
            console.log (array[i]);
        }
    }
}

const arrayBis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// ejercicio 8

function arrayMultiplicado (array, num) {
    for ( let i = 0; i < array.length; i++ ) {
        console.log (array[i] * num);
    }
}

const arrayNumeros = [ 2, 4, 6, 8];
arrayMultiplicado(arrayNumeros, 2)