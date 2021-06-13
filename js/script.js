// // Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

a = parseInt(prompt('Inserire il minimo'));
b = parseInt(prompt('Inserire il massimo'));
array = [1,2,3,4,5,6,7,8,9];

console.log(subArray(array,a,b));

function subArray(array,a,b) {
    
    var risultato = [];

    while (a < 1 || b > array.length || b < 1 || a > array.length) {
        a = parseInt(prompt('Inserire un valore minimo corretto'));
        b = parseInt(prompt('Inserire un valore massimo corretto'));
        if (a > b) {
            var temp = a;
            a = b;
            b = temp;
        }
    }

    for (var i = a; i <= b; i++) {
        risultato.push(array[i-1]);
    }

    return risultato;
}

// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.  Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

parola1 = prompt('Inserire la prima parola');
parola2 = prompt('Inserire la seconda parola');

console.log(confrontoParole(parola1, parola2));

function confrontoParole(parola1, parola2) {
    
    if (parola1.length == parola2.length) {
        return 'Le parole sono della stessa lunghezza';
    } else if (parola1.length > parola2.length) {
        return 'La parola più lunga è ' + parola1;
    } else {
        return 'La parola più lunga è ' + parola2;
    }

}

// Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro. Es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

array1 = [1,2,3,4,5];
array2 = ['a','b','c','d','e'];

console.log(array1);
console.log(array2);

console.log(unioneArray(array1,array2));

function unioneArray(array1,array2) {
    
    if (array1.length != array2.length) {
        return 'Passare due array con stessa lunghezza';
    } else{

        var risultato = [];

        for (var i = 0; i < array1.length; i++) {
            
            risultato.push(array1[i]);
            risultato.push(array2[i]);
        }

        return risultato;
    }

}

// Scrivi una funzione che prenda una stringa e la trasformi con l'iniziale maiuscola e tutto il resto in minuscolo.

var parola = prompt('Inserisci una parola')

console.log(capitalize(parola));


function capitalize(parola) {
    
    var risultato = "";

    return risultato = parola.charAt(0).toUpperCase() + parola.substring(1).toLowerCase();
    
}