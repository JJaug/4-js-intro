"use strict";

/*
Suskaičiuoti, kiek nurodytame intervale (0 - 11; 8 - 31; -18 - 18) yra skaičių, kurie dalijasi 
be liekanos iš 3, 5 ir 7 atskirai
*/

const from = -18;
const till = 18;
const divider = 3;

let count = 0;

for (let i=from; i <= till; i++) {
    if (i % divider === 0) {
        count++;
    }

    
}



const ats = `Skaičių intervale tarp ${from} ir ${till}, besidalijančių be 
liekanos iš ${divider} yra ${count} vienetai.`;

console.log(ats);



