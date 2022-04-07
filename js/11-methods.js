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

console.log('kiti: map, filter, sort, reduce, every, flat, forEach');

/*
OBJECT
*/

