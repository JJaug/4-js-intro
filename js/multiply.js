/*
SALYGOS:
- grazinamas sandaugos rezultatas
- dauginami tik skaiciai
*/


function multiply(a, b) {
    if (typeof a !== 'number') {
        return 'ERROR: pirmasis parametras turi buti skaicius.';
    }else if (isNaN(a)) {
         return 'ERROR: pirmasis parametras turi buti tikras skaicius.';
     }

    if (typeof b !== 'number') {
        return 'ERROR: antrasis parametras turi buti skaicius.';
    } else if (isNaN(b)) {
        return 'ERROR: antrasis parametras turi buti tikras skaicius.';
    }

    return a * b;
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

console.log(multiply(NaN, 5));
console.log(multiply(NaN, NaN));
console.log(multiply(8, NaN));