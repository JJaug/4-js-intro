/*

OPERATORIAI
naudotini >, <, >=, <=, ===, !==
ne naudotini: ==, !=

if(tikrininama salyga) {
    jei tenkina
} else {
    jei ne tenkina
}

SABLONAI
if () {}
if () {} else {}
if () {} else {} ..... else if () {}
if () {} else {} ..... else if () {} else {}

*/ 

const a = 4;
const b = '4';

const c = +b;
console.log(c);

if (a === b) {
    console.log('taip');

} else {
    console.log('ne');
}

console.log('------------------------------');

const spalva = 'raudonos';

if (spalva === 'melyna') {
    console.log('Arijai');
} else if (spalva === 'zalia') {
    console.log('Gerai slepiasi zolej');
} else if (spalva === 'rudos') {
    console.log('Angry bird');
} else if(spalva === 'raudonos'){
    console.log('Turbut programuotojas');
} else {
    console.log('A tu turi akis?');
}

const moneta = 'herbas';

if (moneta === 'skaicius') {
    console.log('isskrito sakicius');
} else {
    if (moneta === 'herbas') {
        console.log('Iskrito herbas');
    } else {
        console.log('Tai gal iskrito briauna??');
    }
}


console.log('---------------------------');

const namoTipas = 'butas'; //namas,butas
const kaipKilti = 'liftas'; // laiptai, liftas

if (namoTipas === 'namas') {
    if (kaipKilti === 'laiptai'){
        console.log('einu y nama ir kylu laiptais');
    } else if (kaipKilti === 'liftas') {
        console.log('Ieinu y nama ir kylu liftu');
    }else {
        console.log('Ieinu i buta ir nera kaip kilti');
    }
} else if (namoTipas === 'butas') {
    if (kaipKilti === 'laiptai'){
        console.log('einu y buta ir kylu laiptais');
    } else if (kaipKilti === 'liftas') {
        console.log('Ieinu y buta ir kylu liftu');
    } else {
        console.log('Ieinu i buta ir nera kaip kilti');
    }
 } else {console.log('Nurodytas blogas namo tipas');
    
}























