//Boolean1. A butun soni berilgan.
// Jumlani rostlikka tekshiring: “A soni musbat”.
let a = 2;
console.log(a > 0);

//Boolean2. A butun soni berilgan.
//  Jumlani rostlikka tekshiring: “A soni toq son”.

console.log(a % 2 == 1);

//Boolean3. A butun soni berilgan.
// Jumlani rostlikka tekshiring: “A soni juft son”.
console.log(a % 2 == 0);

//Boolean4. Ikkita butun A va B sonlari berilgan.
//  Jumlani rostlikka tekshiring: “A>2 va B<=3”.

let b = -2;
console.log(a > 2 && b <= 3);

//Boolean5. Ikkita butun A va B sonlari berilgan.
// Jumlani rostlikka tekshiring: “A >= 0 yoki B < -2”.

console.log(a >= 0 || b < -2);

//Boolean6. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: “A<= B <= C”.
let c = 2;

console.log(c >= b && b >= a && c >= a);

//Boolean7. Uchta A, B, C butun sonlar berilgan.
// Jumlani rostlikka tekshiring: “B soni A va C sonlari orasida yotadi”.

res = (b > a && b < c) || (b > c && b < a);
console.log(res);

//Boolean8. Ikkita butun A va B sonlari berilgan.
//  Jumlani rostlikka tekshiring: “A va B sonlari toq sonlar”.

res = a % 2 == 1 && b % 2 == 1;
console.log(res);

//Boolean9. Ikkita butun A va B sonlari berilgan.
// Jumlani rostlikka tekshiring: “A va B sonlarning hech bo’lmaganda bittasi toq son”.

res = a % 2 == 1 || b % 2 == 1;

console.log(res);

//Boolean10. Ikkita butun A va B sonlari berilgan.
// Jumlani rostlikka tekshiring: “A va B sonlarning faqat bittasi toq son”.

res = (a % 2 == 1 && b % 2 == 0) || (a % 2 == 0 && b % 2 == 1);
console.log(res);

//Boolean11. Ikkita butun A va B sonlari berilgan.
// Jumlani rostlikka tekshiring: “A va B sonlarining har ikkalasi ham yoki toq son yoki juft son”.

res = (a % 2 == 0 && b % 2 == 0) || (a % 2 == 1 && b % 2 == 1);
console.log(res);

//Boolean12. Uchta A, B, C butun sonlar berilgan.
// Jumlani rostlikka tekshiring: “A, B, C sonlarning har biri musbat”.

res = a > 0 && b > 0 && c > 0;
console.log(res)

//Boolean13. Uchta A, B, C butun sonlar berilgan. 
// Jumlani rostlikka tekshiring: 
// “A, B, C sonlarning hech bo’lmaganda bittasi musbat”.

res = a > 0 || b>0 || c>0

console.log(res)

//Boolean14. Uchta A, B, C butun sonlar berilgan. 
// Jumlani rostlikka tekshiring: “A, B, C sonlaridan faqat bittasi musbat son”.



res = ( a > 0 && b<=0  && c<=0) && ( a <= 0 && b>0  && c<=0)&&( a <=0 && b<=0  && c>0)
console.log(res)





//Boolean15. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: “A, B, C sonlardan faqat ikkitasi musbat son”.
res = ( a > 0 && b>0  && c<=0) && ( a <= 0 && b>0  && c>0)&&( a >0 && b<=0  && c>0)
console.log(res)

//Boolean16. Musbat butun son berilgan. 
// Jumlani rostlikka tekshiring: “Berilgan son ikki xonali juft son”.
let son = 232
res = ( son/10 >= 1) && ( son%2==0)&&(son<100)

console.log(res)

//Boolean17. Musbat butun son berilgan. 
// Jumlani rostlikka tekshiring: “Berilgan son uch xonali toq”.

res = (son>=100) && (son<1000) &&(son%2==1)
console.log(res)

//Boolean18. Jumlani rostlikka tekshiring: 
// “Berilgan uchta butun sonlarning hech bo’lmaganda 2 tasi bir biriga teng”.

res = (a==1 && b==1 && c!=1)|| (a==1 && b!=1 && c==1) &&  (a!=1 && b==1 && c==1)

console.log(res)
//Boolean19. Jumlani rostlikka tekshiring: 
// “Berilgan uchta butun sonlarning hech 
// bo’lmaganda bir jufti o’zaro qarama-qarshi”.

res = (a ==-b) ||(a==-c) || (b==-c)

console.log(res)

//Boolean20. Uch xonali son berilgan. 
// Jumlani rostlikka tekshiring: 
// “Ushbu sonning barcha raqamlari xar xil”.
let sons = 1.6
let one = son%10
let ten = (son%100 - one)/10
let hnd = Math.floor(son/100)
console.log(one==ten && one==hnd && hnd ==ten)

//Boolean21. Uch xonali son berilgan. 
// Jumlani rostlikka tekshiring: “Ushbu sonning raqamlari 
// ketma-ket o’suvchi bo’lib joylashgan”.


console.log(hnd <ten && ten < one && hnd < one)

//Boolean22. Uch xonali son berilgan. Jumlani rostlikka tekshiring: 
// “Ushbu sonning raqamlari ketma-ket o’suvchi 
// bo’lib joylashgan yoki kamayuvchi ketma-ketlikka ega”.
res = (hnd <ten && ten < one && hnd < one ) || !(hnd <ten && ten < one && hnd < one)
//Boolean23. Uch xonali son berilgan. 
// Jumlani rostlikka tekshiring: 
// “Ushbu sonni chapdan o’qiganda ham, o’ngdan o’qiganda ham bir xil”.

console.log(one == hnd)

//Boolean24. A, B, C sonlar berilgan (A soni noldan farqli). 
// D=B²-4AC diskerminantdan foydalanib, jumlani rostlikka tekshiring: 
// “Ax²+Bx+C=0 kvadrat tenglama haqiqiy ildizga ega”.

//Boolean25. x, y sonlar berilgan. Jumlani rostlikka tekshiring: “Koordinatalari (x,y) bo’lgan nuqta, koordinata choragining ikkinchisida yotadi”.

//Boolean26. x, y sonlar berilgan. Jumlani rostlikka tekshiring: “Koordinatalri (x,y) bo’lgan nuqta koordinata choragining to’rtinchisida yotadi”.

//Boolean27. x, y sonlar berilgan. Jumlani rostlikka tekshiring: “Koordinatalri (x,y) bo’lgan nuqta koordinata choragining ikkinchisida yoki uchunchisida yotadi”.