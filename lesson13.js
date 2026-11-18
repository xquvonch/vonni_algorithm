//Case1. 1-7 gacha bo’lgan butun sonlar berilgan. Kiritilgan songa mos
//  ravishda hafta kunlarini so’zda ifodalovchi programma tuzilsin. (1-Dushanba, 2-Chorshanba,…h.k)
let son = 3;
let day;
switch (son) {
  case 1:
    day = "Dushanba";
    break;
  case 2:
    day = "Seshanba";
    break;
  case 3:
    day = "Chorshanba";
    break;
  case 4:
    day = "Payshanba";
    break;
  case 5:
    day = "Juma";
    break;
  case 6:
    day = "shanba";
    break;
  case 7:
    day = "Yakshanba";
    break;
  default:
    day = "Bunday kun yo'q";
}

console.log(day);

//Case2. K butun soni berilgan. Baho natijalarini chiqaruvchi programma tuzing.
//  (1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yahshi, 5-a’lo). Agar k soni 1-5 gacha
// oraliqqa tegishli bo’lmasa “xato” deb chiqarilsin.

let k = 4;
let st;

switch (k) {
  case 1:
    st = "yomon";
    break;
  case 2:
    st = "qoniqarsiz";
    break;
  case 3:
    st = "Qoniqarli";
    break;
  case 4:
    st = "yahshi";
    break;
  case 5:
    st = "a'lo";
}

console.log(st);

//Case3. Oy raqamini berilgan. Kiritilgan oy qaysi faslga tegishli
// ekanligini chiqaruvchi programma tuzilsin. (Masalan: 2 chi oy, “qish”)

son = 5;

switch (son) {
  case 1:
  case 2:
  case 12:
    st = "Winter";
    break;
  case 3:
  case 4:
  case 5:
    st = "Spring";
    break;
  case 6:
  case 7:
  case 8:
    st = "summer";
    break;
  case 9:
  case 10:
  case 11:
    st = "autumn";
    break;
}
console.log(st);

//Case4. Oy raqami berilgan. Shu oyda nechta kun
// borligini aniqlovchi programma tuzilsin.
let days;
son = 12;
switch (son) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = 28;
  default:
    days = " bunday oy mavjud emas";
}

console.log(days);

//Case5. A, B haqiqiy va amal butun soni berilgan.
//  A va B sonlari ustida arifmetik amallar bajaruvchi progaramma tuzilsin.
// amal quyidagi qiymatlarni qabul qiladi: 1-qoshish, 2-ayirish, 3-bolish, 4-ko`paytirish.

let a = 2,
  b = 3;
let amal = 2;
let res;
switch (amal) {
  case 1:
    res = a + b;
    break;
  case 2:
    res = a - b;
    break;
  case 3:
    res = a / b;
    break;
  case 4:
    res = a * b;
    break;
}
console.log(res);

//Case6. Uzinlik birliklari quyidagi tartibda berilgan. 1-desimetr,
// 2-kilometr, 3-metr, 4-millimeter, 5-santimetr. Uzunlik birligini
// bildiruvchi son berilgan (1 – 5 oraliqda) va shu birlikdagi kesma
// uzunligi berilgan (haqiqiy son). Kesmaning uzunligini metrlarda ifodalofchi programma tuzilsin.

let kesma = 1234;
let evn = 2;
let d;

switch (evn) {
  case 1:
    d = kesma / 10;
    break;
  case 2:
    d = kesma * 1000;
    break;
  case 3:
    d = kesma;
    break;
  case 4:
    d = kesma / 1000;
    break;
  case 1:
    d = kesma / 100;
    break;
}
console.log(d);

//Case7. Ogirlik birliklari quyidagi tartibda berilgan.
// 1-kilogramm, 2-milligramm, 3-gramm, 4-tonna, 5-sentner.
// Ogirlik birligini bildiruvchi soni berilgan va shu birlikdagi
// ogirlik qiymati berilgan. Ogirlikni kilogramda ifodalofchi programma tuzilsin.

switch (evn) {
  case 1:
    d = kesma;
    break;
  case 2:
    d = kesma / 1000000;
    break;
  case 3:
    d = kesma / 1000;
    break;
  case 4:
    d = kesma * 1000;
    break;
  case 1:
    d = kesma * 100;
    break;
}
console.log(d);

//Case8. Sanani bildiruvchi ikkita butun son berilgan D (kun) va M (oy).
// (Kabisa bo`lmagan yil sanasi kiritiladi). Berilgan sanani ifodalovchi programma tuzilsin.
//  Kabisa yilida 366 kun, kabisa bo’lmagan yilda 365 kun bor bo’ladi.

let dy = 24;
let mn = 12;
res = 0;
switch (mn){
  case 12:res+=30;
  case 11:res+=31;
  case 10:res+=30;
  case 9:res+=31;
  case 8:res+=31;
  case 7:res+=30;
  case 6:res+=31;
  case 5:res+=30;
  case 4:res+=31;
  case 3:res+=28;
  case 2:res+=31;
  case 1:break;
  default:
    console.log('Error')

}
 

console.log(res, dy);

//Case9. Ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo`lmagan yil sanasi kiritiladi).
// Berilgan sanadan keyingi sanani ifodalovchi programma tuzilsin.


res = 0;
switch (mn){
  case 12:res+=30;
  case 11:res+=31;
  case 10:res+=30;
  case 9:res+=31;
  case 8:res+=31;
  case 7:res+=30;
  case 6:res+=31;
  case 5:res+=30;
  case 4:res+=31;
  case 3:res+=28;
  case 2:res+=31;
  case 1:break;
  default:
    console.log('Error')

}

console.log(res+1)




//Case10. Robot faqat tortta tomonga kocha oladi (“s”-shimol, “j”-janub, “q”-sharq, “g”-g’arb)
// va uchta raqamli kamanda: 0-harakni davom ettir, 1-chapga buril, 2-ongga buril.
//  Y - robot yonalishi va K - kamanda berilgan.
//  Bajarilgan kamanda keyingi robot holatini aniqlovchi programma tuzilsin.




let  y , s = 'Shimol',j = "janub",q="sharq",g = "g'arb"
k  = 1
let yunalish = s
y = yunalish
switch(y){
  case s: y = 'shimolga'
;
  
}



