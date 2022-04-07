/*
CLASS
klase - savybiu ir metodu junginys.
savybes - kintamieji (info)
metodai - funkcionalumas

klases - receptura,
objektas - pagal receptura pagamintas dalykas
*/
console.log('labas');
console.log('xxxxxxxxxxxxxxx');
/*
function vidurkis(list) {
    let kiekis = list.length;
    let suma = 0;
    for (let index = 0; index < kiekis; index++) {
        suma += list[index];
    }
    return suma/kiekis
}
*/
class Bankomatas {
    constructor (gatve, spalva) { //metodas = konstruktoriaus iskvietimas = funkcija
        this.street = gatve;
        this.color = spalva;
        this.money = 0;
        this.working = false;
    }
    start(){
        this.working = true;
    }
    stop(){
        this.working = false
    }
    cashIn(pinigai){
        // pirmiausia: jei neijungtas - ERROR
        // po to: jei skaicius nenormalus - ERROR
        // jei normalus - paimam pinigus
        if (!this.working) {
            console.log('bankomatas neijungtas');
            return;
        }
        if (typeof pinigai !== 'number'
            || !isFinite(pinigai)
            || pinigai <= 0) {
            console.log('netinkamas pinigu kiekio formatas');
            return
        }
        this.money += pinigai;
    }
    cashOut(pinigai){
        if (!this.working) {
            console.log('bankomatas neijungtas');
            return;
        }
        if (typeof pinigai !== 'number'
        || !isFinite(pinigai)
        || pinigai <= 0) {
        console.log('netinkamas pinigu kiekio formatas');
        return
        }
        if (pinigai > this.money) {
            console.log('bankomate neuztenka pinigu');
            return
    
        }
        this.money -=pinigai

    }
}

const bankomatas1= new Bankomatas('Laisves pr. 60', 'raudona');
const bankomatas2= new Bankomatas('Ukmerges g. 3', 'zalia');

bankomatas1.start();
//bankomatas1.stop();
bankomatas1.cashIn(5);
console.log(bankomatas1.money);
bankomatas1.cashIn(true);
console.log(bankomatas1.money);

/* console.log('xxxxxxxxxxxxxxx');
console.log('Radio');
*/