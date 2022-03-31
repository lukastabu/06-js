
let algis = [5, 0, 10, 10, 9];
let bronius = [1, 9, 7, 2, 6];
let ceslovas = [4, 4, 4, 10, 5];
let dalius = [6, 8, 6, 8, 7];

function vidurkis(pazymiai) {
    let pazymiuSuma = 0;
    pazymiuSuma += pazymiai[0];
    pazymiuSuma += pazymiai[1];
    pazymiuSuma += pazymiai[2];
    pazymiuSuma += pazymiai[3];
    pazymiuSuma += pazymiai[4];
    
    return pazymiuSuma / pazymiai.length;
}

let aVidurkis = vidurkis(algis);
console.log('Algis:', aVidurkis);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
function vardoAnalize(vardas) {
 return   `Vardo ${vardas} pirma raide yra ${vardas[0]} ir vardas sudarytas is ${vardas.length} raidziu`
}
let petroVardas = vardoAnalize('Petras');
console.log(petroVardas);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
function dviejuSuma(pirmas, antras) {
    return `${pirmas} + ${antras} = ${(pirmas + antras)}`;
}

let sprendinys = dviejuSuma(2, 3)
console.log(sprendinys);