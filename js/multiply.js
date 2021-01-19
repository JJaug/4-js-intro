/*
SALYGOS:
- grazinamas sandaugos rezultatas
- dauginami tik skaiciai
*/


function multiply(a, b) {
    if (typeof a !== 'number') {
        return 'ERROR: pirmasis parametras turi buti skaicius.';
    }if (''+ a === 'NaN') {
         return 'ERROR: pirmasis parametras turi buti tikras skaicius.';
     }
    if (a === Infinity || a === -Infinity) {
       return 'ERROR: pirmasis parametras negali buti begalybe.';
}
//    if (Math.abs(a) === Infinity) {
//        return 'ERROR: pirmasis parametras negali buti begalybe.';     Alternatyvus variantas
//    }


    if (typeof b !== 'number') {
        return 'ERROR: antrasis parametras turi buti skaicius.';
    } else if (!isFinite(b)) {
        return 'ERROR: antrasis parametras turi buti tikras skaicius.';
    }

    const rez = a * b;

    return rez === 0 ? 0 : rez;
}


console.log(multiply('labas', 'rytas'));
console.log(multiply('labas', 5));
console.log(multiply(5, 'labas'));
console.log(multiply('5', '4'));
console.log(multiply(true, 4));
console.log(multiply(true, false));
console.log(multiply(8, false));

console.log(multiply(2, 2), '->', 4);
console.log(multiply(22, -2), '->', -44);
console.log(multiply(-22, -2), '->', 44);
console.log(multiply(0.4, 3.65), '->', 1.46);
console.log(multiply(-1, 0), '->', 0);

console.log(multiply(Infinity, 5));
console.log(multiply(Infinity, Infinity));
console.log(multiply(8, Infinity));