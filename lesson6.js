// Butun sonlarga oid masalalar

// Integer1. Uzunlik L santimetrda berilgan.
//  Undagi to`liq metrlar sonini aniqlovchi programma tuzilsin. (1m=100cm)


let l1 = 1223
let tm1 = l1 - l1%100
console.log(tm1/100)

// Integer2. Og`irlik M kilogramda berilgan.
//  Undagi to`liq tonnalar sonini aniqlovchi programma tuzilsin. (1t=1000kg)

let massa2 = 22033
let tonna2 = massa2 -massa2%1000

console.log(tonna2/1000)



// Integer3. Faylning hajmi baytlarda berilgan. 
// Bo`lib butunni olish operatsiyasidan foydalanib fayl hajmining 
// to'liq kilobaytlarda ifodalovchi programma tuzilsin. (1Kb=1024 bayt)


let hajm3 = 2048
let butun_bayt3 = hajm3 - hajm3%1024
console.log(butun_bayt3/1024)



// Integer4. A va B (A > B) musbat sonlari berilgan. 
// A kesmada, B kesmani necha marta joylashtirish mumkinligini aniqlovchi programma tuzilsin.

let a4  = 23
let b4 = 4

res = a4/b4
console.log(Math.floor(res))


// Integer5. A va B (A > B) musbat sonlar berilgan.
//  A kesmada B kesmani necha marta joylashtirish mumkin. 
// A kesmada B kesmaning joylashmagan qismini aniqlovchi programma tuzilsin.

let a5  = 27
let b5 = 4

res = Math.floor(res)
console.log(a5/b5 - res)


// Integer6. Ikki xonali son berilgan.
//  Oldin uning o'nliklar xonasidagi raqamini, 
// so`ng birlar xonasidagi raqamini chiqaruvchi programma tuzilsin.

let son6 = 23;


let birlik6 = son6%10
let unlik6 = (son6 - birlik6)/10
console.log(birlik6)
console.log(unlik6)



// Integer7. Ikki xonali son berilgan.
//  Uning raqamlari yig`indisini aniqlovchi programma tuzilsin.
let son7 = 23;

let birlik7 = son7%10
let unlik7 = (son7 - birlik7)/10

console.log(birlik7+unlik7)


// Integer8. Ikki xonali son berilgan. 
// Uning raqamlari o'rnini almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.

console.log(birlik6+""+unlik6)

// Integer9. Uch xonali son berilgan. 
// Uning yuzlar xonasidagi raqamini aniqlovchi programma tuzilsin.


let son9 = 123

let qoldiq9 = son9%100
console.log((son9-qoldiq9)/100)

// Integer10. Uch xonali son berilgan.
//  Oldin uni birliklar xonasidagi raqamni 
// so`ng o`nliklar xonasidagi raqamni chiqaruvchi programma tuzilsin.




let son10 = 123;
let birlik10 = son10%10

let unlik10 = ((son10-birlik10)%100)/10
console.log(unlik10)


// Integer11. Uch xonali son berilgan. 
// Uning raqamlar yig`indisini aniqlovchi programma tuzilsin.

let yuzlik11 = (son10 - unlik10*10-birlik10)/100

console.log(yuzlik11+unlik10+birlik10)



// Integer12. Uch xonali son berilgan. 
// Uning raqamlarini teskari tartibda yozishdan hosil bo`lgan sonni aniqlovchi program tuzilsin.
console.log(""+birlik10+unlik10+yuzlik11)