



function skaitmenuKiekisSkaiciuje(skaicius) {
    if (typeof skaicius !== 'number') {
        return 'Pateikta netinkamo tipo reiksme.';
    }
    else if (isNaN (skaicius)){
        return 'Pateikta netinkamo tipo reiksme.';
} else {

    const skaiciuKiekis = skaicius.length;
return `Skaiciuje ${skaicius} yra ${skaiciuKiekis} skaitmenu`;
}
}


console.log(skaitmenuKiekisSkaiciuje(781));