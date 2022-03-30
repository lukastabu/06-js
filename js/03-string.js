/*
STRING

kabutes:
    viengubos ('x')
    dvigubos ("x")
    backtikas (`x`)

kiekis: - kintamasis.length (gaunamas skaicius)

*/

let visosKabutes = 'viengubos \' dvigubos \"';
console.log(visosKabutes);
visosKabutes = "viengubos \' dvigubos \"";
console.log(visosKabutes);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

let clientName = 'John';
let clientAge = 45;
let clientCombo = 'Client ' + clientName + ' is ' + clientAge + ' years old.';
console.log(clientCombo);

let backtick = `Cleint ${clientName} is ${clientAge} years old.`; // vietoj kabutes (') naudojamas backtick (`)
console.log(backtick);

console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');

let zodis = 'asdfdfgdfgsdf'
let zodzioIlgis = zodis.length;
console.log(`Zodzio ${zodis} ilgis yra ${zodzioIlgis} simboliu`);
zodis = `daugiau slash \\\\ nereiskia tikrai daugiau`;
console.log(zodis);