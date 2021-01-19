function pickLetter(text, step) {
    //validation
    if (typeof text !== 'string' ||
        text === '') {
        return 'ERROR: pirmas parametras turi buti ne tuscias tekstas';
    }
    if (typeof step !== 'number' ||
        !isFinite(step)) {
        return 'ERROR: pirmas parametras turi buti skaicius';
    }
    if (step === 0) {
        return 'ERROR: zingsnis negali buti nulinis.';
    }
    if (step > text.length) {
        return 'ERROR: zingsnis negali buti didesnis nei teksto ilgis';
    }
    if (step % 1 !== 0 ) {
        return 'ERROR: zingsnis turi buti sveikasis skaicius';
    }
    //logic
    let picker = '';

    if (step>0) {
        for (let i = step - 1; i<text.length; i+=step) {
            picker += text[i];
        }
    }else {
        for (let i = text.length + step; i >= 0; i+=step) {
            picker += text[i];
        }
    }



    // for (let i=0; i<text.length; i++) {
    //     const letter = text[i];
    //     if (i % step === step - 1) {
    //     if (i+1 % step === 0) {
    //         picker += letter;
    //     }
    // }


    //post logic validation
    if (picker === '') {
        return 'ERROR: nenumatyta logine klaida';
    }
    //return result
    return picker;
}

console.log( pickLetter( 1561, 2 ) );
console.log( pickLetter('labas','ass'));
console.log( pickLetter(NaN,'ass'));
console.log( pickLetter('labas',-Infinity));
console.log( pickLetter( 'abc', 0 ) );
console.log( pickLetter( 'abc', 4 ) );
console.log( pickLetter( 'abc', 1.5 ) );
console.log( pickLetter( '', 5 ) );

console.log( pickLetter( 'abcdefg', 2 ), '->', 'bdf' );
console.log( pickLetter( 'Labasrytas', 2 ), '->', 'aarts' )
console.log( pickLetter( 'abcdefghijkl', 3 ), '->', 'cfil' );
console.log( pickLetter( 'abcdefg', 1 ), '->', 'abcdefg' );

console.log( pickLetter( 'abcdefg', -1 ), '->', 'gfedcba' );
console.log( pickLetter( 'abcdefg', -2 ), '->', 'fdb' );
console.log( pickLetter( 'abcdefghijkl', -3 ), '->', 'jgda' );
console.log( pickLetter( 'abc', -3 ), '->', 'a' );

