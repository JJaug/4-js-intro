



function numLength(number) {
    if (typeof number !== 'number') {
        return 'Pateikta netinkamo tipo reiksme.';
    }
    else if (!isFinite(number)){
        return 'Pateikta netinkamo tipo reiksme.';
} else {

    const numberAsString = '' + number;
    let length = numberAsString.length;

    if (number < 0) {
        length--;
    }
    if (number % 1 !==0) {
        length--;
    }

return length;
}
}

console.log( numLength( true ) );
console.log( numLength( 'asd' ) );
console.log( numLength( NaN ) );

console.log( numLength( 5 ), '->',1  );
console.log( numLength( 781 ), '->',3 );
console.log( numLength( 37060123456 ), '->',11 );

console.log( numLength( -5 ), '->',1 );
console.log( numLength( -781 ), '->',3 );
console.log( numLength( -37060123456 ), '->',11 );

console.log( numLength( 5.123 ), '->',4 );
console.log( numLength( 781.123 ), '->',6 );
console.log( numLength( 37060123456.123 ), '->',14 );

console.log( numLength( -5.123 ), '->',4 );
console.log( numLength( -781.123 ), '->',6 );
console.log( numLength( -37060123456.123 ), '->',14 );


console.log( numLength( 100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 ), '->',14 );

// tiek reikia eiluciu norint patikrinti ar funkcija skaiciuja teisingai 
// pasiskaityti standartine israiska