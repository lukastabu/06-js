console.log('labas');
console.log('xxxxxxxxxxxxxxx');
console.log('Pirma uzduotis');
// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
console.log('xxxxxxxxxxxxxxx');

function palyginimas(a, b) {
    if (a > b) {
        console.log('a didesnis uz b');
    } else if (a < b) {
        console.log('b didesnis uz a');
    } else {
        console.log('skaiciai lygus');
    }
}
palyginimas(1, 2);
palyginimas(2, 1);
palyginimas(1, 1);

console.log('xxxxxxxxxxxxxxx');
console.log('Antra uzduotis');
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
console.log('xxxxxxxxxxxxxxx');
for (let index = 1; index <= 10; index++) {
    console.log(index);
}

console.log('xxxxxxxxxxxxxxx');
console.log('Trecia uzduotis');
//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
console.log('xxxxxxxxxxxxxxx');
for (let index = 0; index <= 10; index+=2) {
    console.log(index);
}

console.log('xxxxxxxxxxxxxxx');
console.log('Ketvirta uzduotis');
//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
console.log('xxxxxxxxxxxxxxx');
for (let index = 0; index < 5; index++) {
    let rnd = 1 + Math.floor(Math.random()*10);
    console.log(rnd);
}

console.log('xxxxxxxxxxxxxxx');
console.log('Penkta uzduotis');
//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
console.log('xxxxxxxxxxxxxxx');
let a5 = 0;
while (a5 != 5) {
    a5 = 1 + Math.floor(Math.random()*10);
    console.log(a5);
}

console.log('xxxxxxxxxxxxxxx');
console.log('Sesta uzduotis');
//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
console.log('xxxxxxxxxxxxxxx');
rndlength = 20 + Math.floor(Math.random() * 11);
console.log('masyvo ilgis:', rndlength);
let m6 = Array.from({length: rndlength}, () => 10 + Math.floor(Math.random() * 21));
console.log(m6);
let didziausias = m6[0];
for (let index = 1; index < m6.length; index++) {
    if (m6[index] > didziausias) {
        didziausias = m6[index];
    }
}
console.log('didziausia masyvo reiksme:', didziausias);

console.log('xxxxxxxxxxxxxxx');
console.log('Septinta uzduotis');
//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
console.log('xxxxxxxxxxxxxxx');

let abcd =  Array.from({length: 100}, () => 1 + Math.floor(Math.random() * 4));
newabcd = [];
let acount=0;
let bcount=0;
let ccount=0;
let dcount=0;

for (let index = 0; index < abcd.length; index++) {
    if (abcd[index] === 1) {
        newabcd.push('a');
        acount++;
    } else if (abcd[index] === 2) {
        newabcd.push('b');
        bcount++;
    } else if (abcd[index] === 3) {
        newabcd.push('c');
        ccount++;
    } else if (abcd[index] === 4) {
        newabcd.push('d');
        dcount++;
    } 
}
console.log(abcd);
console.log(newabcd);
console.log('a raidziu:', acount, 'b raidziu:', bcount, 'c raidziu:', ccount, 'd raidziu:', dcount);

console.log('xxxxxxxxxxxxxxx');
console.log('Astunta uzduotis');
/* 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų) */
console.log('xxxxxxxxxxxxxxx');

function lygineSuma(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        if ((a + b) % 2 === 0) {
            return (a+b);
        } else {
            return ('suma nelyginė');
        }
    }
    else if (typeof a == 'object' && typeof b == 'object') {  // buvo galima naudoti if (Array.isArray(a) && Array.isArray(b))
        if ((a.length + b.length) % 2 == 0) {
            return (a.length + b.length);
        } else {
            return ('suma nelyginė');
        }
    } else {
        return ('kintamieji nevienodo arba netinkamo tipo');
    }
}
console.log(lygineSuma (1, 2));
let ma8 = [1, 2, 3];
let mb8 = [1, 2, 3,];
console.log(lygineSuma (ma8, mb8));
console.log(lygineSuma (2, [1, 2]));
console.log(lygineSuma ('a', [1, 2]));

console.log('xxxxxxxxxxxxxxx');
console.log('Devinta uzduotis');
/* 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų) */
console.log('xxxxxxxxxxxxxxx');

function pirminisSkaicius(a) {
    let f = 0;
    for (let index = 1; index <= a; index++) {
        if ((a % index) == 0) {
            f++
        }
    }
    if (f > 2) {
        console.log('a nera pirminis skaicius');
    } else {
        console.log('a yra pirminis skaicius');
    }
}

pirminisSkaicius(5);
pirminisSkaicius(9);
pirminisSkaicius(112);
pirminisSkaicius(113);

console.log('xxxxxxxxxxxxxxx');
console.log('Desimta uzduotis');
/* 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų) */
console.log('xxxxxxxxxxxxxxx');

function telefonoNumeris(a) {
    if (typeof a !== 'object') {
        return 'ivestas netinkamo tipo kintamasis'
    }
    if ((a.length) !== 10) {
        return 'ivestas ne desimties skaiciu kintamasis'
    }
    for (let index = 0; index < a.length; index++) {
        if (typeof a[index] !== "number") {
            return 'kintamojo skaiciai yra netinkamo tipo'
        };
        if (a[index].toString().length !== 1) {
            return 'ivesta per daug skaiciu'
        }
    }
    return `"(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}"`;
}

console.log(telefonoNumeris(5));
console.log(telefonoNumeris([5]));
console.log(telefonoNumeris([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(telefonoNumeris([8, 6, 1, 1, 2, 3, 3, 8, 9, 10]));
console.log(telefonoNumeris(['a', 6, 1, 1, 2, 3, 3, 8, 9, 0]));

