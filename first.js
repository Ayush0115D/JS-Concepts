console.log("Apna college");
console.log("Ayush Dhakre");
price=99.69;
console.log(price);
x=null;
y=undefined;
console.log(x);
isFollow= false;
console.log(isFollow);
var age =12;
var age=16;
var age =69;
console.log(age);
{
    let a=6;
    console.log(a);
}6
{
    let a=7;
    console.log(a);
}
const student={
    age:21,
    fullName:"Ayush Dhakre",
    cgpa:6.9,
    ispass:true,
};
student["age"]= student["age"]+1;
console.log(student["age"]);    
// Arithmetic operators 
let a=5;
let b=2;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a ** b=",a ** b); // exponential....a^b  
console.log("a-b=",a-b);
// unary operator
console.log("a++=",a++);
console.log("a=",a); // PHLE PRINT KRAUNGA THEN NEXT LINE SE VALUE CHANGE 
// Assignment operator
console.log("b=",b+=4);
// Comparison operator
x=5;
y="5";
console.log("x===y",x===y);
// Logical operator
let A=6;
let B =5;
let cond1= A>B; 
let cond2= A===6;
console.log("cond1 && cond2=",cond1 && cond2);
console.log("cond 1 || cond2=", A<B || A===6);
// Conditional statement
let Age=25;
if(Age>18){
    console.log("u can vote");
}
// TERNARY
let agee=24;
let result=age>18?"adult":"not adult";
console.log(result);
// or
age>18?console.log("adult"):console.log("not adult");
let num=prompt("enter a number");
if(num % 5 ==0){
    console.log(num,"is multiiple of 5");
}
else{
    console.log(num," is not multiple of 5");
}  
let score=prompt("enter your score(0-100):");
let grade;
if(score>90 && score<=99){
    grade='A+';
 } else if( score>=80 && score<=89){
    grade='A';
 }else if(score>=70&& score<=79){
    grade='B';
 }else if (score<60){
    grade='F';
 }
 console.log("your grades acc to your score :",grade);
//  practice Q
 const product={
    title:"BallPen" ,
    rating: 4,
    offer:5,
    price:170,
 };
 console.log(product);
// profile
const profile={
    username :"ayushhh123",
isFollow: false,
followers:277,
following:17,
};


