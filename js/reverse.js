"Use strict";

/*
Perrasyti teksta is galo i prieki
*/

const text = 'abcdef';
size = text.length;
let reverseText = '';

for (let i=0; i<size; i++) {
const letter = text[i];
   reverseText = letter + reverseText;
   console.log(i, letter, reverseText);
}

//for (let i=0; i<size; i++) {
//   const letter = text[size - i - 1];
//    reverseText += letter;
//    console.log(i, letter, reverseText);
//}

// for (let i=1; i<=size; i++) {
//     const letter = text[size - i];
//     reverseText += letter;
//     console.log(i, letter, reverseText);
// }

// for (let i=size - 1; i >= 0; i--) {
//     const letter = text[i];
//     reverseText += letter;
//     console.log(i, letter, reverseText);
// }


console.log('Finale gavau', reverseText);






