/*
i++ reiskia jog i = i+1
i+= 2, reiskia jog i=i+2

for (let i=0; i<5; i++) {
    kartotinas kodas
}



*/

console.log('Pradzia');

for (i = 2; i <= 5; i += 1) {
    console.log('kartotinas kodas', i);
}

console.log('Pabaiga');





console.log('-------------------');

const words = ['abc', 'Borisas', 'citrina', 'duobe', 'eziukas', 'fabrikas', 'gandriukas'];

for (let i=0; i < words.length; i++) {
    const word = words[i]
    console.log(i,words[i]);
    console.log('pirma zodzio raide:', word[0]);
    console.log('pirma zodzio raide:', word.length);

}

console.log(words);
//console.log(word); kodo blokas, nes (word egzistuoja tik 'for' cikle)
