/*
OBJECT
*/
console.log('labas');
console.log('xxxxxxxxxxxxxxx');
/*
const mokiniai = [
    ['Algis', [8, 8], ['A. A.', 861]], 
    ['Bronius', [2, 2, 8], ['B. B.', 862]],
    ['Ceslovas', [10], ['C. C.', 863]]
];

const index = 1;
const mokinys = mokiniai[index];
const mokinysVardas = mokinys[0];
const mokinysPazymys = mokinys[1];
const mokinysKontaktas = mokinys[2];
const kontaktasVardas = mokinysKontaktas[0];
const kontaktasTel = mokinysKontaktas[1];
console.log('Mokinio vardas:', mokinysVardas);
*/

const mokiniai = [
    {
        vardas: 'Algis',
        pazymiai: [8, 8],
        kontaktas: {
            vardas: 'A. A.',
            tel: 861
        }
    },
    {
        vardas: 'Bronius',
        pazymiai: [2, 2, 2],
        kontaktas: {
            vardas: 'B. B.',
            tel: 862
        }
    },
    {
        vardas: 'Ceslovas',
        pazymiai: [10],
        kontaktas: {
            vardas: 'C. C.',
            tel: 863
        }
    }
];

let studentIndex = 0;
let mokinys=mokiniai[studentIndex];
let vardas = mokinys.vardas;
let pazymiai = mokinys.pazymiai;
let kontaktas = mokinys.kontaktas;
let kontaktasVardas = kontaktas.vardas;
let kontaktasTel = mokinys.kontaktas.tel;

console.log(vardas);
console.log(pazymiai);
console.log(kontaktas);
console.log(kontaktasVardas);
console.log(kontaktasTel);