////if1. Butun son berilgan. Agar, berilgan son musbat bo`lsa,
// 1 ga oshirilsin, aks holda o`zgartirilmasin.
// Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.

let son = 12;
if (son > 0) {
  son++;
}

console.log(son);

//if2. Butun son berilgan. Agar, berilgan son musbat bo`lsa,
// 1 ga oshiring, aks holda 2 ga kamaytiring.
// Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.

if (son > 0) {
  son++;
} else {
  son -= 2;
}

console.log(son);

//if3. Butun son berilgan. Agar,
// berilgan son musbat bo`lsa, 1 ga oshiring, agar manfiy bo`lsa 2 ga kamaytiring.
//  Agar 0 ga teng bo`lsa, 10 ni o`zlashtirsin. Hosil bo`lgan sonni ekranga chiqaruvchi programma tuzilsin.

if (son > 0) {
  son++;
} else if (son < 0) son -= 2;
else son = 10;
console.log(son);

//if4. Uchta butun son berilgan. Shu sonlar orasidan nechta musbat son borligini aniqlovchi programma tuzilsin.

let a = 2,
  b = -2,
  c = 1;

let count = 0;

if (a > 0) count++;
if (b > 0) count++;
if (c > 0) count++;

console.log(count);

//if5. Uchta butun son berilgan. Shu sonlar orasidan
// nechta musbat va manfiy son borligini aniqlovchi programma tuzilsin.

let musbat = 0,
  manfiy = 0;

if (a > 0) musbat++;
else if (a < 0) manfiy++;

if (b > 0) musbat++;
else if (b < 0) manfiy++;

if (c > 0) musbat++;
else if (c < 0) manfiy++;

//if6. Ikkita butun son berilgan.
// Shu sonlarning kattasini aniqlovchi programma tuzilsin.

let son1 = 23,
  son2 = 22;

if (son1 > son2) {
  console.log(son1 + " katta ");
} else if (son1 < son2) {
  console.log(son2 + "katta");
} else {
  console.log("Ikkala son teng");
}

//if7. Ikkita butun son berilgan. Shu sonlarning kichigini
// tartib raqamini aniqlovchi programma tuzilsin.

if (son1 < son2) {
  console.log("Birinchi son kichik");
} else if (son2 < son1) {
  console.log("Ikkinchi son katta");
} else {
  console.log("Ikkala son teng");
}

//if8. Ikkita butun son berilgan.
// Shu sonlarning avval kattasini keyin kichigini
// ekranga chiqaruvchi programma tuzilsin.

if (son1 > son2) {
  console.log(son1, son2);
} else {
  console.log(son2, son1);
}

//if9. A va B haqiqiy sonlari beringan. Shu sonlarni shunday o'zgartirish kerakki,
// A son kichik B son katta bo`lsin. A va B ning qiymati ekranga chiqarilsin.

let A = 2,
  B = 1;

if (A > B) {
  A = A + B;
  B = A - B;
  A = A - B;
}
console.log("A=" + A, "B=" + B);

//if10. A va B butun sonlari berilgan.
// Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B
// o`zgaruvchilari ularning yig`indisini o`zlashtirsin.
// Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati
// ekranga chiqarilsin.

if (A !== B) {
  A = A + B;
  B;
} else {
  A = 0;
  B = A;
}
console.log(A, B);

//if11. A va B butun sonlari berilgan.
// Agar o`zgaruvchilar o`zaro teng bo`lmasa,
// A va B bu sonlarning kattasini o`zlashtirsin. Agar teng bo`lsa, 0 ni o`zlashtirsin.
// A va B ning qiymati ekranga chiqarilsin.

if (A !== B) {
  if (A > B) {
    B = A;
  } else {
    A = B;
  }
} else {
  A = 0;
  B = A;
}

console.log(A, B);

//if12. Uchta son berilgan. Shu sonlarni kichigini aniqlovchi programma tuzilsin.

((a = 2), (b = 12), (c = 3));

let min;

if (a <= b && a <= c) {
  min = a;
} else if (b <= a && b <= c) {
  min = b;
} else if (c <= a && c <= b) {
  min = c;
}
console.log(min);

//**if13.** Uchta son berilgan. Shu sonlarni o'ratachasi (ya'ni katta va kichik sonlar orasidagi son)
//  ni aniqlovchi programma tuzilsin.

((son1 = 22), (son2 = 12), (son3 = 52));
let midN;
if ((son1 >= son2 && son3 <= son2) || (son2 >= son1 && son2 <= son3)) {
  midN = son2;
} else if ((son1 <= son2 && son1 >= son3) || (son1 >= son2 && son1 <= son3)) {
  midN = son1;
} else if ((son3 <= son2 && son3 >= son1) || (son3 >= son2 && son3 <= son1)) {
  midN = son3;
}
console.log(midN);

//**if14.** Uchta son berilgan. Shu sonlarni avval kichigini
// keyin kattasini ekranga chiqaruvchi programma tuzilsin.

let big, sml;

if (son1 <= son2 && son1 <= son3) {
  sml = son1;

  if (son2 > son3) {
    big = son2;
  } else {
    big = son3;
  }
} else if (son3 <= son2 && son1 >= son3) {
  sml = son3;

  if (son2 > son1) {
    big = son2;
  } else {
    big = son1;
  }
} else if (son1 >= son2 && son2 <= son3) {
  sml = son2;

  if (son1 > son3) {
    big = son1;
  } else {
    big = son3;
  }
}

console.log(sml, big);

//**if15.** Uchta son berilgan. Shu sonlarning yig'indisi eng
// katta bo'ladigan ikkitasini ekranga chiqaruvchi programma tuzilsin.

let maxSum;

let firstSum = son1 + son2,
  secondSum = son1 + son3,
  thirdSum = son2 + son2;

if (firstSum >= secondSum && firstSum >= thirdSum) {
  console.log(son1, son2);
} else if (firstSum <= secondSum && secondSum >= thirdSum) {
  console.log(son1, son3);
} else if (thirdSumSum >= secondSum && firstSum <= thirdSum) {
  console.log(son2, son3);
}

//**if16.** A, B, C haqiqiy sonlari berilgan. Agar berilgan sonlar o'sish
// tartibida berilgan bo'lsa, sonlarni ikkilantiring, aks holda sonlarni ishorasi o'zgartirilsin.
//  A, B, C ning qiymatlari ekranga chiqarilsin.

((a = 2), (b = 4), (c = 5));

if (a <= b && a <= c && b <= c) {
  ((a *= 2), (b *= 2), (c *= 2));
} else {
  ((a = -a), (b = -b), (c = -c));
}

console.log(a, b, c);
//**if17.** A, B, C haqiqiy sonlari berilgan. Agar berilgan sonlar o'sish
// yoki kamayish tartibida berilgan bo'lsa, sonlarni ikkilantiring,
// aks holda sonlarni ishorasi o'zgartirilsin. A, B, C ning qiymatlari ekranga chiqarilsin.

if (a >= b && a >= c && b >= c) {
  ((a *= 2), (b *= 2), (c *= 2));
} else {
  ((a = -a), (b = -b), (c = -c));
}

console.log(a, b, c);

//**if18.** Uchta butun son berilgan. Shu sonlarni ikkitasi o'zaro teng,
//  qolgan bittasini tartib raqami aniqlansin.

if (son1 == son2) {
  console.log(3);
} else if (son2 == son3) {
  console.log(1);
} else if (son1 == son3) {
  console.log(2);
} else {
  console.log("Teng sonlar yuq");
}

//**if19.** To'rtta butun son berilgan. Shu sonlarni uchtasi
// o'zaro teng, qolgan bittasini tartib raqami aniqlansin.

let son4 = 12;

if (son1 == son2 && son4 == son1) {
  console.log(3);
} else if (son2 == son3 && son2 == son4) {
  console.log(1);
} else if (son1 == son3 && son4 == son1) {
  console.log(2);
} else if (son2 == son1 && son1 == son3) {
  console.log(4);
} else {
  console.log("Uchchalasi teng emas");
}

//**if20.** Sonlar o'qida uchta A, B, C nuqtalar berilgan.
// A nuqtaga eng yaqin nuqta va ular orasidagi masofa topilsin.

((a = 3), (b = 7), (c = -2));

let d1 = Math.abs(a - b);
let d2 = Math.abs(a - c);

if (d1 < d2) {
  console.log("b nuqta", d1);
} else if (d1 > d2) {
  console.log("c nuqta", d2);
} else {
  console.log("Ikkalasi teng");
}

//**if21.** Koordinatalar tekisligida butun son berilgan.
// Agar nuqta koordinata boshida yotsa, 0 chiqarilsin. Agar nuqta OX yoki OY
// o'qlarida joylashsa mos holda 1 va 2 chiqarilsin. Agar nuqta koordinata o'qida joylashmasa 3 chiqarilsin.

((x = 2), (y = 3));

if (x == 0 && y == 0) {
  console.log(0);
} else if (x == 0 && y != 0) {
  console.log(1);
} else if (x != 0 && y == 0) {
  console.log(2);
} else {
  console.log(3);
}
//**if22.** OX va OY koordinata o'qlarida yotmaydigan nuqta berilgan.
// Nuqta joylashgan koordinata choragi aniqlansin.

if (x > 0) {
  if (y > 0) {
    console.log(1);
  } else {
    console.log(4);
  }
} else {
  if (y > 0) {
    console.log(2);
  } else {
    console.log(3);
  }
}

//**if23.** Koordinata o'qlariga parallel ravishda to'g'ri to'rtburchakning uchta uchi berilgan,
//  to'rtinchi uchi koordinatasini aniqlansin.

((x1 = 2), (y1 = 4), (x2 = -4), (y2 = 4), (x3 = -4), (y3 = -5));

x4 = x1 === x2 ? x3 : x1 === x3 ? x2 : x1;
y4 = y1 === y2 ? y3 : y1 === y3 ? y2 : y1;
console.log(x4, y4);

//if24. X haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.

//f(x) =

//2 · sin(x), agar x > 0;
//x − //6, agar x ≤ 0;

x = -2;
let f;
if (x > 0) {
  f = 2 * Math.sin(x);
} else {
  f = x - 6;
}
console.log(f);

//if25. X haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.

//f(x) =

//2 · x, agar x < −2 yoki x > 2;
//−3 * x aks holda;
//

if (x > 2 || x < -2) {
  f = 2 * x;
} else {
  f = -3 * x;
}
console.log(f);

//if26. X haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.

//f(x) =

//−x, agar x ≤ 0;
//x², agar 0 < x < 2;
//4, agar x ≥ 2;
//

if (x <= 0) {
  f = -x;
} else if (0 < x && x < 2) {
  f = x ** 2;
} else {
  f = 4;
}
console.log(f);
//if27. X haqiqiy soni berilgan. Quyidagi funksiya hisoblansin.

//f(x) =
//0, agar x < 0;
//1, agar x ∈ [0,1), [2,3), ...;

//−1, agar x ∈ [1,2), [3,4), ...;

x = 0.5;
if (x < 0) {
  f = 0;
} else if ((x >= 0 && x < 1) || (x >= 2 && x < 3)) {
  f = 1;
} else {
  f = -1;
}
console.log(f);

//if28. Yil berilgan (musbat butun son). Berilgan yilda nechta kun borligini aniqlovchi programma tuzilsin.
// Kabisa yilida 366 kun bor, kabisa bo’lmagan yilda 365 kun bor.
// Kabisa yil deb 4 ga karrali yillarga aytiladi.
// Lekin 100 ga karrali yillar ichida faqat 400 ga karrali bo’lganlari kabisa yil hisoblanadi.
// Masalan 300, 1300 va 1900 kabisa yili emas. 1200 va 2000 kabisa yili.
let days;
year = 1200;
if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      days = 366;
    } else {
      days = 365;
    }
  } else {
    days = 366;
  }
} else {
  days = 365;
}

console.log(days);

//if29. Butun son berilgan. Berilgan sonni “musbat toq son”, “manfiy juft son”,
//  “son nolga teng” va x.k. ekranga yozadigan programma tuzilsin.

let st;

let number = 100;

if (number > 0) {
  st = "musbat ";
} else if (x < 0) {
  st = "manfiy ";
} else {
  st = "Nol ";
}
if (number % 2 == 0) {
  st += "juft";
} else {
  st += "toq";
}
console.log(Boolean(number & (2 == 0)));
console.log(st + " " + "son");

//if30. 1-999 oraliqdagi sonlar berilgan. Berilgan sonni “ikki xonali juft son”,
//  “uch xonali toq son” va x.k. ekranga yozadigan programma tuzilsin.

let evn;
if (number >= 100) {
  evn = "3 xonali ";
} else if (number >= 10) {
  evn = "2 xonali ";
} else {
  evn = "1 xonali ";
}

console.log(evn + st + "son" + number);
