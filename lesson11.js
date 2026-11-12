//if1. Butun son berilgan. Agar, berilgan son musbat bo`lsa,
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


if(son>0){
    son++
}
else if(son<0) son-=2
else son=10
console.log(son)


//if4. Uchta butun son berilgan. Shu sonlar orasidan nechta musbat son borligini aniqlovchi programma tuzilsin.

let a = 2, b=-2 , c=1

let count=0;

if(a>0) count++
if(b>0)count++
if(c>0)count++

console.log(count)





//if5. Uchta butun son berilgan. Shu sonlar orasidan 
// nechta musbat va manfiy son borligini aniqlovchi programma tuzilsin.

let musbat =0 , manfiy=0;

if(a>0) musbat ++
else if(a<0) manfiy++

if(b>0) musbat ++
else if(b<0) manfiy++

if(c>0) musbat ++
else if(c<0) manfiy++


//if6. Ikkita butun son berilgan. 
// Shu sonlarning kattasini aniqlovchi programma tuzilsin.

let son1 =  23, son2 = 22

if(son1>son2){
    console.log(son1 +" katta ")
}
else if(son1<son2){
    console.log(son2+'katta')
}else {
    console.log('Ikkala son teng')
}





//if7. Ikkita butun son berilgan. Shu sonlarning kichigini 
// tartib raqamini aniqlovchi programma tuzilsin.

if(son1<son2){
    console.log("Birinchi son kichik")
}else if (son2<son1){
console.log("Ikkinchi son katta")
}else {
    console.log("Ikkala son teng")
}




//if8. Ikkita butun son berilgan. 
// Shu sonlarning avval kattasini keyin kichigini 
// ekranga chiqaruvchi programma tuzilsin.


if(son1>son2){
    console.log(son1,son2)
}
else{
    console.log(son2,son1)
}

//if9. A va B haqiqiy sonlari beringan. Shu sonlarni shunday o'zgartirish kerakki, 
// A son kichik B son katta bo`lsin. A va B ning qiymati ekranga chiqarilsin.


let A=2, B=1


if(A>B){
    A=A+B
    B=A-B
    A=A-B
}
console.log("A=" +A,"B="+B)

//if10. A va B butun sonlari berilgan. 
// Agar o`zgaruvchilar o`zaro teng bo`lmasa, A va B 
// o`zgaruvchilari ularning yig`indisini o`zlashtirsin. 
// Agar teng bo`lsa, 0 ni o`zlashtirsin. A va B ning qiymati 
// ekranga chiqarilsin.

if(A!==B){
    A=A+B
    B
}else {
    A=0
    B=A
}
console.log(A,B)



//if11. A va B butun sonlari berilgan. 
// Agar o`zgaruvchilar o`zaro teng bo`lmasa, 
// A va B bu sonlarning kattasini o`zlashtirsin. Agar teng bo`lsa, 0 ni o`zlashtirsin. 
// A va B ning qiymati ekranga chiqarilsin.

if(A!==B){
    if(A>B){
        B=A
    }
    else {
        A=B
    }
}
else {
    A=0
    B=A
}


console.log(A,B)


//if12. Uchta son berilgan. Shu sonlarni kichigini aniqlovchi programma tuzilsin.

a = 2, b= 12, c=3

let min

if(a<=b&& a<=c){
    min = a
}
else if (b<=a && b<=c){
    min = b
}else if (c<=a && c<= b){
    min = c
}
console.log(min)