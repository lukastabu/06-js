console.log('labas');
console.log('xxxxxxxxxxxxxxx');
/*
NUMBER
*/
console.log((5215).toString());         //same effect - number convert to string
console.log((5215)+"");                 //same effect - number convert to string
console.log((1.123456).toFixed(0));     // decimal places, convert to string
console.log((1.123456).toFixed(1));
console.log((1.123456).toFixed(2));
console.log((1.123456).toFixed(3));
console.log((1.123456).toFixed(5));
console.log(typeof (1.123456).toFixed(3));

console.log('xxxxxxxxxxxxxxx');


console.log('17.53');
console.log(+'17.53');                      //convert string to exact number
console.log(parseFloat('17.53'));           //convert string to exact number
console.log(typeof parseFloat('17.53'));    
console.log(parseInt('17.53'));             //convert string to whole number
console.log(typeof parseInt('17.53'));

console.log('xxxxxxxxxxxxxxx');

console.log(+'labas');                      //mon-numeric converted to number = NaN
console.log(+'17.53labas');                 //mon-numeric converted to number = NaN
console.log(+'labas17.53');                 //mon-numeric converted to number = NaN
console.log(parseInt('labas17.53'));        //mixed string converted to number = NaN , if starts with string
console.log(parseFloat('labas17.53'));       //mixed string converted to number = NaN , if starts with string
console.log(parseInt('17.53labas'));         //mixed string = number , if start with numbers
console.log(parseFloat('17.53labas'));      //mixed string = number , if start with numbers

console.log('xxxxxxxxxxxxxxx');
console.log('math class');
console.log(Math.PI);
console.log(Math.sqrt(9));  // saknies traukimas
console.log(Math.abs(-1));  //absoliutine israiska, modulis
console.log('APVALINIMAS');
console.log(Math.round(1.45));  //normalusis apvalinimas
console.log(Math.floor(1.45));  //FLOOR   apvalina prie artimiausio ZEMESNIO sveiko skaiciaus
console.log(Math.ceil(1.45));   //CEILING apvalina prie artimiausio AUKSTESNIO sveiko skaiciaus
console.log('RANDOM NUMBER: [0...1) nuo nulio imtinai iki vieno neimtinai ');
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

let randomnr = Math.floor(Math.random()*10); // [0..9]
console.log(randomnr);
let nuo = 10;
let iki = 19;
let randomNuoIki = nuo + Math.floor(Math.random()*(iki-nuo+1));
for (let index = 0; index < 20; index++) {
    console.log(randomNuoIki);
}


console.log('MIN-MAX');
console.log(Math.min(10, 0, 5));    // atrenka ZEMIAUSIA, bet veikia tik ant skaiciu
console.log(Math.max(1, 10, 5));    // atrenka DIDZIAUSIA, bet veikia tik ant skaiciu
console.log(Math.max[1, 10, 5]);    // atrenka DIDZIAUSIA, bet veikia tik ant skaiciu
console.log('TRUNC');
console.log(Math.trunc(5.2));           //is skaiciaus nuima desimtaine dali
console.log(Math.trunc(5));             //is skaiciaus nuima desimtaine dali
console.log(Math.trunc(1065.654652));   //is skaiciaus nuima desimtaine dali
console.log('xxxxxxxxxxxxxxx');

/*
STRING
*/
console.log('xxxxxxxxxxxxxxx');
console.log('STRING');
console.log('xxxxxxxxxxxxxxx');
console.log('Laba diena'.length);      //kiek stringe yra simboliu
console.log('Laba diena'.includes('a'));    //ar strubge yra kitas "sub-stringas" = true/false
console.log('Laba diena'.includes('ie'));   //ar strubge yra kitas "sub-stringas" = true/false
console.log('xxxxxxxxxxxxxxx');
console.log('Laba diena'.indexOf('ie'));   //kur strubge yra kitas "sub-stringas"
console.log('Laba diena'.indexOf('z'));   //kur strubge yra kitas "sub-stringas" - jei neranda = -1
console.log('Laba diena'.indexOf('a'));   //kur strubge yra kitas "sub-stringas" - grazina tik pirma poz, jei yra daugiau nei vienas toks "sub-stringas"
console.log('Laba diena'.indexOf('a', 2));   //pridejus skaiciu, pradeda ieskoti nuo tos pozicijos
console.log('xxxxxxxxxxxxxxx');
console.log('Laba diena'.split(' '));   // sukarpo stringa i dalis, naudojant pasirinkta simboli (siuo atveju tarpa) = grazina masyva (array)
console.log('Laba diena'.split('a'));   // sukarpo stringa i dalis, naudojant pasirinkta simboli
console.log('Laba diena'.slice(2,8));   // iskerpa nuo nurodyto iki nurodyto
//console.log('Laba diena'.slice((indexOf(' ')),9));       //
console.log('xxxxxxxxxxxxxxx');
console.log('           Laba diena         '.trimStart());  // nutrina tarpus PRODZIOJE
console.log('           Laba diena         '.trimEnd());    // nutrina tarpus PABAIGOJE
console.log('           Laba diena         '.trim());       // nutrina tarpus IR PRADZIOJE IR PABAIGOJE
console.log('xxxxxxxxxxxxxxx');
console.log('Valio'.repeat(3));       // pakartoja
console.log('Valio'.repeat(3) + '!'); // pakartoja pridedant extra simboli
console.log('xxxxxxxxxxxxxxx');
console.log('Laba diena'.replace('diena', 'vakara')); // pakeicia pasirinkta sub-stringa i nurodyta
console.log('Laba diena'.replaceAll('a', 'x'));       // pakeicia VISUS ATITINKANCIUS sub-stringUS i nurodyta
console.log('xxxxxxxxxxxxxxx');
console.log('Valio'.toLowerCase());       // visos mazosios
console.log('Valio'.toUpperCase());       // visos didziosios
console.log('xxxxxxxxxxxxxxx');

/*
BOOLEAN
*/
console.log('xxxxxxxxxxxxxxx');
console.log('BOOLEAN');
console.log('xxxxxxxxxxxxxxx');

/*
ARRAY
*/
console.log('xxxxxxxxxxxxxxx');
console.log('ARRAY');
console.log('xxxxxxxxxxxxxxx');
const diena = ['Laba', 'diena']

console.log(diena.length); // masyvo ilgis (elementu skaicius)
console.log('xxxxxxxxxxxxxxx');
console.log(diena.join(" "));
console.log(diena.join(", "));
console.log(diena.join("---"));
console.log('xxxxxxxxxxxxxxx');
console.log(diena.includes("a"));
console.log(diena.includes("laba"));
console.log(diena.includes("Laba"));
console.log('xxxxxxxxxxxxxxx');
console.log(diena.indexOf("a"));
console.log(diena.indexOf("laba"));
console.log(diena.indexOf("Laba"));
console.log('xxxxxxxxxxxxxxx');
console.log('xxxxxxxxxxxxxxx');
console.log(diena.push("PUSH!"));
console.log(diena);
console.log(diena.unshift("UNSHIFT!"));
console.log(diena);
console.log(diena.pop());
console.log(diena);
console.log(diena.shift());
console.log(diena);
console.log('xxxxxxxxxxxxxxx');

console.log(diena.reverse());

console.log('kiti: map, filter, reduce, sort, every, flat, forEach');
let pazymiai = [8, 7, 10, 5, 10];
console.log('xxxxxxxxxxxxxxx');
console.log(pazymiai.map(item => item));
console.log(pazymiai.map(item => 2*item));
console.log(pazymiai.map(item => item % 2));
console.log(pazymiai.map(item => item - 1));
console.log('xxxxxxxxxxxxxxx');

console.log(pazymiai.filter(item => item));
console.log(pazymiai.filter(item => item > 9));
console.log(pazymiai.filter(item => item <= 9));
console.log(pazymiai.filter(item => item >= 7 && item <10));
console.log('xxxxxxxxxxxxxxx');

console.log(pazymiai.reduce((total, item) => total + item, 0)); // sutraukia visas reiksmes i viena
console.log(pazymiai.reduce((total, item) => total + item, 1)); // 
console.log(pazymiai.reduce((total, item) => total + item)); // 
console.log(pazymiai.reduce((total, item) => total * item, 0));
console.log(pazymiai.reduce((total, item) => total - item, 0));
console.log(pazymiai.reduce((total, item) => total / item));
console.log('xxxxxxxxxxxxxxx');

let skaiciai = [1, 2, 3, 10, 20, 30, 111, 202, 11]
console.log(skaiciai.sort()); // sortina lyg lygintu ne skaitines reiksmes dydi, o tekstines reiksmes
console.log(skaiciai.sort((a, b) => a-b)); // didejimo tvarka
console.log(skaiciai.sort((a, b) => b-a)); // mazejimo tvarka

let tekstas = ['abc', 'a', 'xx', 'xaaaa']
console.log(tekstas.sort());
console.log(tekstas.sort().reverse());
console.log(tekstas.sort((a, b) => a.length - b.length));
console.log('xxxxxxxxxxxxxxx');
let matrica = [
    [0, 1],
    [10, 4],
    [9, 8],
]
console.log(matrica.flat()); // array pamazina vienu leveliu, matrica matricoje = matrica
console.log('xxxxxxxxxxxxxxx');

console.log(Math.min(5, 4, 7, 0));
console.log(Math.max(5, 4, 7, 0));
let sk = [5, 4, 7, 0];
console.log(Math.min(sk));          
console.log(Math.max(sk));
console.log(Math.min(...sk));       // spread operatorius '...' vietoj masyvo paduoda skaiciu eilute
console.log(Math.max(...sk));       // spread operatorius '...' vietoj masyvo paduoda skaiciu eilute
console.log('xxxxxxxxxxxxxxx');

let a1 = [0, 1];
let a2 = [2, 3];
let a3 = [4, 5];
let a123 = [...a1, ...a2, ...a3];   // sudeda masyvus naudojant spread
let a132 = [...a1, ...a3, ...a2];   // sudeda masyvus naudojant spread
let a213 = [...a2, ...a1, ...a3];   // sudeda masyvus naudojant spread
console.log(a123);                  
console.log(a132);
console.log(a213);

console.log('xxxxxxxxxxxxxxx');

/*
OBJECT
*/
console.log('xxxxxxxxxxxxxxx');
console.log('OBJECT');
console.log('xxxxxxxxxxxxxxx');

let zmogus = {
    vardas: "Algirdas",
    amzius: 45,
    vedes: true,
    vaikai: 4,
}

console.log(zmogus.vardas);
console.log(zmogus.amzius);
console.log(zmogus.vedes);
console.log(zmogus['vardas']);
console.log(zmogus['amzius']);
console.log(zmogus['vedes']);
console.log(zmogus);

console.log();        // automatinis visu objekto keys istraukimas
let zmogusKeys = Object.keys(zmogus);
console.log();        // automatinis visu objekto values istraukimas
for (let key of zmogusKeys) {
    console.log(key, ':', zmogus[key]);
}

for (const key in zmogus) {             // vienintelis ciklas darbui su objektu
    console.log(key, ':', zmogus[key]);
}

console.log('xxxxxxxxxxxxxxx');
console.log({...zmogus});       // ...spread'iname objekta ir tokiu budu padarome kopija, keiciame reiksmes, pridedam naujas
console.log({...zmogus, masina: 'Passat'});
console.log({...zmogus, amzius: 46});
console.log({vedes: false, ...zmogus});

let objA = {
    a: 'a',
    c: 'c',
    b: 'pirmiau'
}
let objB = {
    b: 'antriau',
    d: 'd',
}

let objAB = {...objA, ...objB};
console.log(objAB);
let objBA = {...objB, ...objA};
console.log(objBA);

console.log('xxxxxxxxxxxxxxx');
/*
DESTRUCTURING
*/
console.log('xxxxxxxxxxxxxxx');
console.log('DESTRUCTURING');
console.log('xxxxxxxxxxxxxxx');

let skaiciukai = [10, 2, 9, 11, 'a', -1, true];
let pirmukas = skaiciukai[0];               //reiksmei priskiriame vieta masyve, daroma po viena
let antrukas = skaiciukai[1];
let treciukas = skaiciukai[2];
console.log(pirmukas, antrukas, treciukas);
let [pirm, antr, trec, ...kita] = skaiciukai;        // same effect - priskiria reiksmei vieta masyve, tik galima priskirti daugiau nei viena iskart
console.log(pirm, antr, trec, kita);

let auto = {
    marke: 'Passat',
    megstama: false,
    spalva: 'pilka',
}
let {marke, spalva, megstama} = auto;
console.log(marke, spalva, megstama);