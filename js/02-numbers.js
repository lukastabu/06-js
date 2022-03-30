/*
NUMBERS:
    -normalus:
        sveikieji (1; 10; 99999)
        desimtainiai (0.1; -0.1)

    -nenormalus:
        Not a Number (NaN)
        begalybe (Infinity; -Infinity)

OPERATORS:
    ++ padidinimas vienu vnt
    -- sumazinimas vienu vnt
    += -= /= *= %= savo paties keitimas pagal atitinkama operatoriu + - / * %
*/
console.log('xxxxxxxxx');

console.log(2**4);

console.log(7 % 2);

let santaupos = 0;
console.log('Dabar turiu: ', santaupos);
console.log('Dabar turiu: ', ++santaupos); // prideda ir paraso
console.log('Dabar turiu: ', santaupos++); // paraso ir tik po to prideda
console.log('Dabar turiu: ', santaupos);

console.log('xxxxxxxx');
let b=0;
console.log(b);
b += 3;
console.log(b);

console.log('xxxxxxxx');

let c = 16;
const d = 2;
console.log(c);
c = c / d;
console.log(c);
c = 16;
c /= d; //tas pats kas c = c / d;
console.log(c);
c=16;
c %= d
console.log(c);