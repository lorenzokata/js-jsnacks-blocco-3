// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).  La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri

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