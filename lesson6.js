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

res = Math.floor(a5/b5)
console.log(res)


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


//Integer13. Uch xonali son berilgan. Uning chapdan birinchi raqamini o’chirib o’ng
//  tarafiga yozishdan hosil bo’lgan sonni aniqlovchi programma tuzilsin.



let son13 = 928
let unlik13 = son13%100
let yuzlik13 = (son13-unlik13)/100
console.log(yuzlik13)
console.log(unlik13+""+yuzlik13)

//Integer14. Uch xonali son berilgan. Uning o’ngdan birinchi raqamini o’chirib 
// chap tarafiga yozishdan hosil bo’lgan sonni aniqlovchi programma tuzilsin.

let birlik14 = son13%10
let son_P_14 = (son13-birlik14)/10
console.log(birlik14+""+son_P_14)



//Integer15. Uch xonali son berilgan. Uning o’nliklar xonasidagi raqam bilan 
// yuzliklar xonasidagi raqamni almashtirishdan hosil bo’lgan sonni aniqlovchi programma tuzilsin.
//  (Kirish = 123; Natija = 213)


console.log(""+unlik10+yuzlik11+birlik10)

//Integer16. Uch xonali son berilgan. Uning o’nliklar xonasidagi raqam bilan
//  birliklar xonasidagi raqamni almashtirishdan hosil bo’lgan sonni aniqlovchi programma tuzilsin. 
// (Kirish = 123; Natija = 132)



console.log(""+yuzlik11+birlik10+unlik10)
//Integer17. 999 dan katta bo’lgan son berilgan. Bir marta bo’lib butunni 
// va bo’lib qoldiqni olish operatsiyasidan foydalanib berilgan sonni yuzliklar
//  xonasidagi sonni aniqlovchi programma tuzilsin.


let son17 =99999999999123
let son_kk =Math.floor((son17%1000)/100)

console.log(son_kk)



//Integer18. 999 dan katta bo’lgan son berilgan.
//  Bir marta bo’lib butunni va bo’lib qoldiqni olish operatsiyasidan foydalanib
//  berilgan sonni mingliklar xonasidagi sonni aniqlovchi programma tuzilsin.
 son_kk = Math.floor((son17%10000)/1000)
 console.log(son_kk)


//Integer19. Kun boshidan boshlab N sekund vaqt o’tti.
//  Kun boshidan boshlab qancha minut to’la o’tganligini aniqlovchi programma tuzilsin.

let sekund = 7222

let minut = Math.floor(sekund/60)
console.log(minut)


//Integer20. Kun boshidan boshlab N sekund vaqt o’tti. 
// Kun boshidan boshlab qancha to’la soat o’tganligini aniqlovchi programma tuzilsin.

let soat = Math.floor(sekund/3600)
console.log(soat)

//Integer21. Kun boshidan boshlab N sekund vaqt o’tti.
//  Kun boshidan boshlab qancha minut va sekund o’tganini aniqlovchi programma tuzilsin.
let sknd = sekund%60
let mnt = (sekund-sknd)/60
console.log(mnt,sknd)

//Integer22. Kun boshidan boshlab N sekund vaqt o’tti. 
// Kun boshidan boshlab qancha soat va sekund o’tganini aniqlovchi programma tuzilsin.

let sknd1 = sekund%3600
let soat1 = (sekund-sknd1)/3600

console.log(soat1,sknd1 )

//Integer23. Kun boshidan boshlab N sekund vaqt o’tti. 
// Kun boshidan boshlab qancha soat, 
// minut va sekund o’tganini aniqlovchi programma tuzilsin.

let sknd2 = sekund%60
let mnt2 = ((sekund-sknd2)%3600)/60
let soat2= ((sekund - mnt2*60-sknd2)/3600)

console.log(soat2,mnt2,sknd2)