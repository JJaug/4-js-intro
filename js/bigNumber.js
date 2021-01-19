function bigNumber(list) {
    //validation
    if (typeof list !== 'object') {
        return 'ERROR: reikia array tipo reiksmes'
    }
    if (list.length === 0) {
        return 'ERROR: sarasas yra tuscias.';
    }

    //logic
    let biggestNumber = -Infinity;

    for (let i=0; i<list.length; i++) {
        const number = list[i];
        //list item validation
        if(typeof number !== 'number' || !isFinite(number)){
            continue;
        }
        if (number > biggestNumber) {
            biggestNumber = number;
        }
    }

    // post logic validation
    if (biggestNumber === -Infinity) {
        return 'ERROR: sarase turi buti bent vienas normalus skaicius';
    }


    //return result
    return biggestNumber;

}

console.log( bigNumber( 'pomidoras' ));
console.log( bigNumber( [] ) );
console.log( bigNumber( [ 'asfa', true, false, NaN] ));

console.log( bigNumber( [ 1 ] ), '->', 1);
console.log( bigNumber( [ 1, 2, 3 ] ), '->', 3);
console.log( bigNumber( [ -5, 78, 14, 0, 18 ] ), '->', 78);
console.log( bigNumber( [ 69, 69, 69, 69, 66 ] ), '->', 69);
console.log( bigNumber( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ), '->', -1);

console.log( bigNumber( [ -5, 78, 14, 0, 18, 'asfa' ] ), '->', 78);
console.log( bigNumber( [ -5, 78, 14, 'asfa', 0, 18 ] ), '->', 78);
console.log( bigNumber( [ 'asfa', -5, 78, 14, 0, 18 ] ), '->', 78);

console.log( bigNumber( [ 'asfa', -5, 78, Infinity, 14, 0, 18 ] ), '->', 78);



