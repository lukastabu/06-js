console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('paprasta funkcija');

const pirmas = 7;
const antras = 5;

function  suma(a, b) {
    return a + b
}
console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('anonimine funkcija');

let rez1 = suma (pirmas, antras);
console.log(rez1);

let skirtumas = function (a, b) {
    return a - b;
}

let rez2 = skirtumas(pirmas, antras);
console.log(rez2);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('arrow funkcija');

let dalmuo = (a, b) => {
    return a / b;
}

let rez3 = dalmuo(pirmas, antras);
console.log(rez3);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('arrow funkcija su viena procedura - nereikia {} ir return');

let sandauga = (a, b) => a*b;

let rez4 = sandauga(pirmas, antras);
console.log(rez4);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('arrow funkcija su vienu parametru - nereikia rasyti ()');

let kvadratu = a => a*a;
let rez5 = kvadratu(pirmas);
console.log(rez5);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');
let tekstas = 'labas'

let firstletter = text => text[0];
console.log(firstletter(tekstas));

console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');
console.log('SUMA INTERVALE FUNKCIJA');
function sumaIntervale(nuo, iki) {
    let suma = 0;
    for (let index = nuo; index <= iki; index++) {
        suma += index;
    }
    return suma;
}

console.log(sumaIntervale (0,0));
console.log(sumaIntervale (0,4));
console.log(sumaIntervale (0,100));
console.log(sumaIntervale (-50,50));
console.log(sumaIntervale (-70,30));