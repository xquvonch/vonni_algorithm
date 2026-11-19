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
    days = 28;break;
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
  case 5:
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
switch (mn) {
  case 12:
    res += 30;
  case 11:
    res += 31;
  case 10:
    res += 30;
  case 9:
    res += 31;
  case 8:
    res += 31;
  case 7:
    res += 30;
  case 6:
    res += 31;
  case 5:
    res += 30;
  case 4:
    res += 31;
  case 3:
    res += 28;
  case 2:
    res += 31;
  case 1:
    break;
  default:
    console.log("Error");
}
res+=dy
console.log(res, dy);

//Case9. Ikkita butun son berilgan D (kun) va M (oy). (Kabisa bo`lmagan yil sanasi kiritiladi).
// Berilgan sanadan keyingi sanani ifodalovchi programma tuzilsin.

res = 0;
switch (mn) {
  case 12:
    res += 30;
  case 11:
    res += 31;
  case 10:
    res += 30;
  case 9:
    res += 31;
  case 8:
    res += 31;
  case 7:
    res += 30;
  case 6:
    res += 31;
  case 5:
    res += 30;
  case 4:
    res += 31;
  case 3:
    res += 28;
  case 2:
    res += 31;
  case 1:
    break;
  default:
    console.log("Error");
}

console.log(res + 1);

//Case10. Robot faqat tortta tomonga kocha oladi (“s”-shimol, “j”-janub, “q”-sharq, “g”-g’arb)
// va uchta raqamli kamanda: 0-harakni davom ettir, 1-chapga buril, 2-ongga buril.
//  Y - robot yonalishi va K - kamanda berilgan.
//  Bajarilgan kamanda keyingi robot holatini aniqlovchi programma tuzilsin.

let y,
  s = "Shimol",
  j = "janub",
  q = "sharq",
  g = "g'arb";
k = 1;
y = s;
let yun;
switch (y) {
  case s:
    switch (k) {
      case 0:
        yun = s;
        break;
      case 1:
        yun = q;
        break;
      case 2:
        yun = g;
        break;
    }
    break;
  case j:
    switch (k) {
      case 0:
        yun = j;
        break;
      case 1:
        yun = g;
        break;
      case 2:
        yun = q;
        break;
    }
    break;
  case q:
    switch (k) {
      case 0:
        yun = q;
        break;
      case 1:
        yun = j;
        break;
      case 2:
        yun = s;
        break;
    }
    break;
  case g:
    switch (k) {
      case 0:
        yun = g;
        break;
      case 1:
        yun = s;
        break;
      case 2:
        yun = j;
        break;
    }
    break;
}
console.log(yun);

//Case11. Lokatr dunyoning bir tomoniga qaratilgan
// (“s”-shimol, “j”-janub, “q”-sharq, “g”-g’arb) va uchta raqamli kamanda:
// 0-o’ngga burilish, 1-chapga burilish, 2-burilish 180°.
// C - lakatrning boshlang’ich holati va K1, K2 - kamandalar berilgan.
// Berilgan kamanda bajarilgandan keyingi lakatr holatini aniqlovchi programma tuzilsin.
(y, (s = "Shimol"), (j = "janub"), (q = "sharq"), (g = "g'arb"));

y = q;
let k1 = 1,
  k2 = 2;
switch (y) {
  case s:
    switch (k1) {
      case 0:
        yun = q;
        break;
      case 1:
        yun = g;
        break;
      case 2:
        yun = j;
        break;
    }
    break;
  case j:
    switch (k1) {
      case 0:
        yun = g;
        break;
      case 1:
        yun = q;
        break;
      case 2:
        yun = s;
        break;
    }
    break;
  case q:
    switch (k1) {
      case 0:
        yun = j;
        break;
      case 1:
        yun = s;
        console.log(yun);
        break;
      case 2:
        yun = g;
        break;
    }
    break;
  case g:
    switch (k1) {
      case 0:
        yun = s;
        break;
      case 1:
        yun = j;
        break;
      case 2:
        yun = q;
        break;
    }
    break;
}
console.log(yun);

switch (yun) {
  case s:
    switch (k2) {
      case 0:
        yun = q;
        break;
      case 1:
        yun = g;
        break;
      case 2:
        yun = j;
        break;
    }
    break;
  case j:
    switch (k2) {
      case 0:
        yun = g;
        break;
      case 1:
        yun = q;
        break;
      case 2:
        yun = s;
        break;
    }
    break;
  case q:
    switch (k2) {
      case 0:
        yun = j;
        break;
      case 1:
        yun = s;
        break;
      case 2:
        yun = g;
        break;
    }
    break;
  case g:
    switch (k2) {
      case 0:
        yun = s;
        break;
      case 1:
        yun = j;
        break;
      case 2:
        yun = q;
        break;
    }
    break;
}
console.log(yun);

//Case12. Doiraning elementlari quyidagi tartibda nomerlangan.
// 1-radius R, 2-diametr D = 2·R, 3-uzunligi L = 2·π·R, 4-doiraning yuzasi S = π·R².
// Shu elementlardan bittasi berilganda qolganlarini topuvchi programma tuzilsin. π = 3.14
((r = 2), d=2, s=2);
let l=2;
one = 1
switch (one) {
  case 1:
    d = 2 * r;
    l = 2 * Math.PI * r;
    s = Math.PI * r ** 2;
    break;
  case 2:
    r = d / 2;
    l = 2 * Math.PI * r;
    s = Math.PI * r ** 2;
    break;
  case 4:
    r = Math.sqrt(s / Math.PI);
    d = 2 * r;
    l = 2 * Math.PI * r;
    break;
  case 3:
    r = l / (Math.PI * 2);
    d = 2 * r;
    s = Math.PI * r ** 2;
    break;
}
console.log(r, d, l, s);

//Case13. Tengyonli uchburchakning elementlari quyidagi tartibda nomerlangan.
// 1-katet a, 2-gipotenuza c = a·√2, 3-gepotenuzaga tushirilgan baladlik h = c/2, 4-yuzasi S = c·h/2.
// Shu elementlardan bittasi berilganda qolganlarini topuvchi programma tuzilsin.

((a = 3), b, (c = 5), (h = 2.5));
s=2;
one = 2;
switch (one) {
  case 1:
    c = Math.sqrt(2) * a;
    h = c / 2;
    s = (c * h) / 2;
    b = Math.sqrt(c ** 2 - a ** 2);break;
  case 2:
    a = c / Math.sqrt(2);
    h = c / 2;
    s = (c * h) / 2;
    b = Math.sqrt(c ** 2 - a ** 2);break;
  case 3:
    c = 2 * h;
    a = c / Math.sqrt(2);
    s = (c * h) / 2;
    b = Math.sqrt(c ** 2 - a ** 2);break;
  case 4:
    c = (2 * s) / h;
    a = c / Math.sqrt(2);
    h = c / 2;
    b = Math.sqrt(c ** 2 - a ** 2);break;
}

console.log(a, c, h , s)

//Case14. Tengtomonli uchburchakning elementlari quyidagi tartibda nomerlangan. 1-tomoni a, 2-ichki chizilgan aylananing radiusi R₁ = a·√3/6, 3- tashqi chizilgan aylananing radiusi R₂ = 2·R₁, 4-yuzasi S = a²·√3/4. Shu elementlardan bittasi berilganda qolganlarini topuvchi programma tuzilsin.

//Case15. O’yin kartasi turlari berilgan 1-g’isht, 2-olma, 3-chillak, 4-qarg’a. 10 lik kartadan katta kartalar quyidagi qiymatlarni o’zlashtirgan: 11-valet, 12-dama, 13-qirol, 14-tuz. Ikkita butun son berilgan N-karta qiymati (6 ≤ N ≤ 14), M-karta turi (1 ≤ M ≤ 4) kiritilganda karta nomlarini (masalan: “olti qarg’a”) chiqarib beruvchi programma tuzilsin.

//Case16. Yoshni yillarda aniqlovchi 20-69 gacha butun son berilgan. Son kiritilganda unga mos so’zlarda ifodalovchi programma tuzilsin. (“yigirma yosh”, “qirq uch yosh” va h.k.)

//Case17. O’quv masalalarini aniqlovchi 10-40 gacha butun son berilgan. Son kiritilganda unga mos so’zlarda ifodalovchi programma tuzilsin. (“yigirmata masala”, “o’n uchta masala” va h.k.)

//Case18. 100-999 gacha oraliqdagi sonlarni so’zlarda ifodalovchi programma tuzilsin. (masalan: 123-“bir yuz yigirma uch”).

//Case19. Sharq kalendarida 60 yillik davr qabul qilingan. Yil muchali 5 ta rang (yashil, qizil, sariq, oq va qora) va 12 ta hayvon (sichqon, sigir, yo’lbars, quyon, ajdar, ilon, ot, qo’y, maymun, tovuq, it va to’ngizlardan) nomlaring kombinatsiyasidan kelib chiqadi. Yilning raqamiga qarab uning muchalini aniqlovchi programma tuzilsin. 1984-davr boshi: “Yashil sichqon yili”.

//Case20. Ikkita burj vaqtlarini aniqlovchi butun son berilgan: D(kun), M(oy). Berilgan sana qaysi burjga kirishini aniqlovchi programma tuzilsin.
//“Qovg’a (20.1-18.2)”, “Baliq (19.2-20.3)”, “Qo’y (21.3-19.4)”, “Buzoq (20.4-20.5)”, “Egizaklar (21.5-21.6)”, “Qisqichbaqa (22.6-22.7)”, “Arslon (23.7-22.8)”, “Parizod (23.8-22.9)”, “Tarozi (23.9-22.10)”, “Chayon (23.10-22.11)”, “O’qotar (23.11-21.12)”, “Echki (22.12-19.1)”.
