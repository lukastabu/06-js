/*
LOOP: for, while, for-in, for-of, foreach, etc...
*/
console.log('xxxxxxxxxxxxxxxxxxxxxxxx');
console.log('FOR CIKLAS');
let pazymiai = [5, 1, 10, 9];
let suma = 0

for (let index = 0; index < pazymiai.length; index++) {
    const pazymys = pazymiai[index];
    suma += pazymys;
}

let vidurkis = suma / pazymiai.length;
console.log(vidurkis);

console.log('xxxxxxxxxxxxxxxxxxxxxxxx');
for (let i= -10; i < 1; i++) {
    console.log(i);
}

console.log('xxxxxxxxxxxxxxxxxxxxxxxx');
console.log('WHILE CIKLAS');

let sumaWhile = 0;
iw = 0;
while (iw < pazymiai.length) {
    sumaWhile += pazymiai[iw];
    console.log();
}

vidurkis = sumaWhile / pazymiai.length;
log(vidurkis);

console.log('xxxxxxxxxxxxxxxxxxxxxxxx');
console.log('FOR-OF ciklas');

let sumaForOf = 0;
let iFO = 0;
for (const pazymys of pazymiai) {
    sumaForOf += pazymys;    
}

vidurkis = sumaForOf / pazymiai.length;
console.log(vidurkis);

console.log('xxxxxxxxxxxxxxxxxxxxxxxx');
console.log('FOREACH ciklas');

let sumaForEach = 0;
pazymiai.forEach((pazymys, iFE, pazymiaiRef) => {
    sumaForEach += pazymys;
});

vidurkis = sumaForEach / pazymiai.length;
console.log(vidurkis);
