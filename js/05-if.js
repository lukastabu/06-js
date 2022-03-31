/*
IF
IF ELSE
IF ELSE IF ELSE

Sablonai: 
if () {}
if () {} else {}

Salyginiai operatoriai:
visi: >, <, <=, >=, == (reiksme lygu), != (reiksme nelygu); === (reiksme lygu ir tipas sutampa); !== (reiksme nelygu ir tipai sutampa)
naudotini: >, <, <=, >=, ===, !==
NEnaudotini: ==, !=


*/

let a = 2;
let b = 1;

if (a == b) {
    console.log('a is equal to b');
}  else { console.log('a is NOT equal to b');
}

if (b != a) {
    console.log('b is NOT equal to a');
} else {
    console.log('b is equal to a');
}

console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');
let diena = 5;
if (diena == 1) {
    console.log('pirmadienis');
} else if (diena == 2) {
    console.log('antradienis');
} else if (diena == 3) {
    console.log('treciadienis');
} else if (diena == 4) {
    console.log('ketvirtadienis');
} else if (diena == 5) {
    console.log('penktadienis');
} else if (diena == 6) {
    console.log('sestadienis');
} else if (diena == 7) {
    console.log('sekmadienis');
}

console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');

let akys = 'melyna';

if (akys === 'zalia') {
    console.log('zaliaakiai yra zalciai');
} else {
    if (akys === 'melyna') {
        console.log('melynakiai megsta melynes');
    } else {
        if (akys === 'ruda') {
            console.log('rudaakiai yra melagiai');
        } else {
            if (akys === 'raudona') {
            console.log('raudonakiai yra vampyrai');
            } else {
            console.log('akys nerastos');
            }    
        }
    }
}

console.log('xxxxxxxxxxxxxxxxxxxxxxxxx');
let siltaNuo = 10;
let temp = 20;
let krituliai = true;

if (krituliai) {   // boolean iskart gali veikti kaip salyga, nereikia rasyt papildomai
    if (temp >= siltaNuo) {
        console.log('pasiimk sketi, bet striukes nereikia');
    } else {
        console.log('pasiimk sketi ir striuke');
    }
} else {
    if (temp >= siltaNuo) {
        console.log('neimk nei skecio, nei striukes');
    } else {
        console.log('neimk skecio, bet pasiimk striuke');
    }
}