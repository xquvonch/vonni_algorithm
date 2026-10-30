// Begin1. Kvadratning tomoni a berilgan. Uning perimetri aniqlansin. P = 4 * a

let a1 =12;
let P=4*a1;
console.log(P)


// Begin2. Kvadratning tomoni a berilgan. Uning yuzasi aniqlansin. S = a^2
let a2=12;
let S2= a2**2
console.log(S2)
// Begin3. To'g'ri to'rtburchakning tomonlari a va b berilgan. Uning yuzasi S = a * b va perimetri P = 2 * (a + b) aniqlansin.

let a3=12,b3=10;
let S3=a3* b3
let P3=2*(a3+b3)
console.log(S3,P3)


// Begin4. Aylananing diametri d berilgan. Uning uzunligi aniqlansin. L = pi * d, pi = 3.14


let d4=20;

let l4= d4 * Math.PI
console.log(l4)


// Begin5. Kubning yon tomoni a berilgan. Uning hajmi V = a^3 va to'la sirti S = 6 * a^2 aniqlansin.

let a5=6;
let v5=a5**3
let s5=6*(a5**2)
console.log(v5, s5)






// Begin6. Paralelepipedning tomonlari a, b, c berilgan. Uning hajmi V = a * b * c va to'la sirti S = 2 * (a*b + b*c + a*c) aniqlansin.

let a6=6,b6=12,c6=12;
let v6=a6*b6*c6;
let s6 = 2*(a6*b6+ a6*c6 + b6*c6)
console.log(v6,s6)



// Begin7. Doiraning radiusi R berilgan. Uning uzunligi L va yuzasi S aniqlansin. L = 2 * pi * R, S = pi * R^2

let r7=12;
let l7=2*Math.PI*r7;
let s7=Math.PI*(r7**2)

console.log(l7,s7)
// Begin8. Ikkita son a va b berilgan. Ularning o'rta arifmetigi aniqlansin. (a + b) / 2

let a8=12,b8=89;

console.log((a8+b8)/2)





// Begin9. Ikkita manfiy bo'lmagan son a va b berilgan. 
// Ularning o'rta geometrigi aniqlansin. sqrt(a * b)

let a9=12, b9=12;

console.log((a9*b9)**.5)






// Begin10. Nolga teng bo'lmagan ikkita son berilgan.
//  Ularning yig'indisini, ko'paytmasini va har birining kvadrati aniqlansin.

let a10=12,b10=12;
console.log(a10+b10)
console.log(a10*b10)
console.log(a10**2)
console.log(b10**2)





// Begin11. Nolga teng bo'lmagan ikkita son berilgan. 
// Ularning yig'indisini, ko'paytmasini va har birining moduli aniqlansin.

let a11=12,b11=12;
console.log(a11+b11)
console.log(a11*b11)
console.log(Math.abs(a11))
console.log(Math.abs(b11))





// Begin12. To'g'ri uchburchakning katetlari a va b berilgan.
//  Uning gipotenuzasi c va perimetri P aniqlansin. c = sqrt(a^2 + b^2), P = a + b + c


let a12=12,b12=5;
let c12=Math.sqrt(a12**2+b12**2)
console.log(c12, a12+ b12+c12)


// Begin13. Umumiy markazga ega bo'lgan ikkita aylana radiusi berilgan: R1, R2 (R1 > R2).
// Ularning yuzalari S1 va S2, ularning ayirmasi S3 aniqlansin.
// S1 = π·R1², S2 = π·R2², S3 = π·(R1² − R2²)



let R13_1=13, R13_2=12
let s13=Math.PI*(R13_1**2 - R13_2**2)
console.log(s13, R13_1**2*Math.PI,R13_2**2 * Math.PI)


// Begin14. Aylananing uzunligi L berilgan. Uning radiusi R va yuzasi S aniqlansin.
// L = 2·π·R, S = π·R², π = 3.14

let L14=24
let r14,s14;
r14 = L14/(2*Math.PI)
s14 = Math.PI * r14**2
console.log(s14 , r14)


// Begin15. Aylananing yuzasi S berilgan. Uning diametri d va radiusi R aniqlansin.
// L = 2·π·R, S = π·R², π = 3.14

let s15= 90
let d15,r15;
r15 = Math.sqrt(s15/Math.PI)
d15 = r15 * 2
console.log(r15, d15)


// Begin16. Sonlar o'qida ikkita nuqta orasidagi masofa aniqlansin.
// |x2 − x1|



let x16_1=0,x16_2=2;
let d ;
d = Math.abs(x16_1-x16_2)
console.log(d)

// Begin17. Sonlar o`qida A, B, C nuqtalar berilgan. 
// AC va BC kesmalarning uzunligini va kesmalar uzunligining yig`indisini topuvchi programma tuzilsin.


let a17=17,b17=29,c17=98;
let ac17 = Math.abs(a17-c17)
let bc17 = Math.abs(b17-c17)

console.log(ac17, bc17, ac17+bc17)


// Begin18. Sonlar o`qida A, B, C nuqtalar berilgan. 
// C nuqta A va B nuqtalar orasida joylashgan. AC va BC kesmalar uzunligining ko`paytmasini toping.


let a18=12,b18 = 23, c18 = 16;
let ac18= Math.abs(c18-a18)
let bc18 = Math.abs(b18-c18)
console.log(bc18 * ac18)



// Begin19. To`g`ri to`rtburchakning qarama-qarshi uchlari koordinatlari berilgan. 
// Uning tomonlari koordinata o`qiga parallel. To`g`ri to`rtburchakning perimetri va yuzasi aniqlansin.

let x19_1 = 2,y19_1 = 2,x19_3 = -9 , y19_3= -9;
let a19 = Math.abs(x19_1 - x19_3)
let b19= Math.abs(y19_1 - y19_3)
let p19 = 2*(a19 + b19)
let s19 = a19 * b19
console.log(p19,s19)






// Begin20. Tekislikdagi berilgan ikki nuqta (x1,y1) va (x2,y2) orasidagi masofa topilsin.
// d = sqrt((x2 - x1)^2 + (y2 - y1)^2)


let x20_1 = 1, x20_2=3,y20_1=8,y20_2 = 23;

let d20 = Math.sqrt((x20_1-x20_2)**2 + (y20_1 - y20_2)**2)

console.log(d20)

// Begin21. Uchburchakning uchta tomoni uchlari koordinatlari berilgan (x1,y1), (x2,y2), (x3,y3). 
// Ikki nuqta orasidagi masofani topish Begin20 da berilgan.
//  Uchburchakning yuzasini va perimetrini toping.
// S = sqrt(p(p - a)(p - b)(p - c)),  p = (a + b + c) / 2



let x21_1 = 1,y21_1 = 1,x21_2 = 5 , y21_2 = 5, x21_3 = 1, y21_3 = 5;
let a21 = Math.sqrt((x21_1-x21_2)**2 + (y21_1-y21_2)**2)
let b21 = Math.sqrt((x21_3-x21_2)**2 + (y21_3-y21_2)**2)
let c21 = Math.sqrt((x21_1-x21_3)**2 + (y21_1-y21_3)**2)
let P21 = (a21 + b21 + c21)
let p21 = P21/2
let s21 = Math.sqrt(p21*(p21-a21)*(p21-b21)*(p21-c21))

console.log(P21,s21)


// Begin22. Berilgan A va B sonlarining qiymatlarini almashtiring. 
// A va B ning yangi qiymati ekranga chiqarilsin.

let a22 =21, b22=23
a22 = a22 + b22;
b22 = a22 - b22
a22 = a22 - b22;
// let c = a;
// a = b;
// b = c;
console.log(a22 , b22)


// Begin23. A, B va C sonlari berilgan. 
// A ni qiymati B ga, B ni qiymati C ga va C ni qiymati A ga almashtirilsin.
//  A, B va C ning yangi qiymatilari ekranga chiqarilsin.

let a23 = 1, b23 = 2, c23 = 3;
a23 = a23 + b23 + c23;
 b23 = a23 - b23 - c23;
 c23 = a23 - b23 - c23
a23 =  a23 - b23 - c23 

console.log( 'a' +a23 ,"b" +b23, "c"+c23)



// Begin24. A, B va C sonlari berilgan. 
// A ni qiymati C ga, C ni qiymati B ga va B ni qiymati A ga almashtirilsin.
//  A, B va C ning yangi qiymatilari ekranga chiqarilsin.


let a24 = 1, b24 = 2, c24 = 3;
a24 = a24 + b24+ c24;
c24 = a24 - b24 - c24
b24 = a24 - b24 - c24
a24  = a24 - b24 - c24

console.log(a24, b24, c24)



// Begin25. x ning qiymati berilganda y = 3x^6 - 6x^2 - 7 funksiyaning qiymati aniqlansin.

let x25 = 1;
let y25 = 3 * x25**6 - 6 * x25**2 - 7;


console.log(y25)

// Begin26. x ning qiymati berilganda y = 4(x - 3)^6 - 7(x - 3)^3 + 2 funksiyaning qiymati aniqlansin.



let x26 = 4
let y26 = 4*(x26-3)**6-7*(x26-3)**3 +2

console.log(y26)
// Begin27. A soni berilgan. A ning A^2, A^4, A^8 darajalarini aniqlovchi programma tuzilsin.


let a27 = 2;
console.log(a27**2, a27**4, a27**8)





// Begin28. A soni berilgan. 
// A ning A^2, A^3, A^5, A^10, A^15 darajalarini aniqlovchi programma tuzilsin.

let a28 = 2;

const kvadrad=(a , n)=>{

    return a ** n
}


console.log(kvadrad(2,2))
console.log(kvadrad(2,3))
console.log(kvadrad(2,5))
console.log(kvadrad(2,10))
console.log(kvadrad(2,15))
console.log(kvadrad(2,20))




// Begin29. α burchak gradusda berilgan (0° < α < 360°).
//  Berilgan burchakning qiymatini radianga o`tkazuvchi programma tuzilsin.


let a29 = 180

let rad29 = a29/Math.PI

console.log(rad29)