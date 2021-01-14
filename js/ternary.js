
const a = 4;
const b = 2;

// po ? yra jeigu atitinka, o po : jeigu neatitinka

const arLygu = a === b ? true : false;

console.log(arLygu);


const aukstai = 6;
const kadaDaugiaaukstis = 5;

const arDaugiaaukstis = aukstai >= kadaDaugiaaukstis ? 'taip' : 'ne';
console.log(arDaugiaaukstis);


const variklisIjungtas = false;

const arJudam = variklisIjungtas === true ? 'vaziuojam' : 'stovim';
console.log(arJudam);

const arAlkanas = false;

const einamValgyti = arAlkanas === true ? 'einam valgyti' : 'dar palauksim kol isalksim';
console.log(einamValgyti);

console.log('--------------------------');

let alkioAtsakymas = '';
const iprociai = 'mesedis';

 if(arAlkanas === true) {
    if (iprociai === 'mesedis') {
        alkioAtsakymas = 'uzkask mesytes'
}   else {
    alkioAtsakymas = 'uzkask darzoviu';
}
} else {
    alkioAtsakymas = 'nu, palukim....';
}



if (arAlkanas === true) {
    alkioAtsakymas = 'tai valgom';
} else {
    alkioAtsakymas = 'nu, palaukim...';
}

console.log(alkioAtsakymas);

const alkioAtsakymas2 = arAlkanas === true 
                            ? iprociai === 'mesedis'
                                ? 'uzkask mesytes'
                                : 'uzkask darzoviu'
                            : 'nu, palaukim...';
console.log(alkioAtsakymas2);


const skaicius = true ? false ? 4 : 3 : 2;
console.log(skaicius);

// jeigu yra true, skaitome tai aks yra po ?, jeigu false, tai kas po :
