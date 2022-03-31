/*
LOOP: for, while, for-in, for-of, foreach, etc...
*/

let pazymiai = [5, 1, 10, 9];
let suma = 0

for (let index = 0; index < pazymiai.length; index++) {
    const pazymys = pazymiai[index];
    suma += pazymys;
}

let vidurkis = suma / pazymiai.length;
console.log(vidurkis);