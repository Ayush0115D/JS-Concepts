let sum=0;
for(let i=1;i<=5;i++)
{
    sum=sum+i;
}
console.log("sum=",sum);
let size=0;
 let str="APNA COLLEGE";
 for(let i of str){
    console.log( "i="+i);
 
 size++;
 }
 console.log("string size=", size);
 let student={
    name:"ayush",
    age:20,
    cgpa:7.1,
    ispass:true,
 };
 for(let key in student){
    console.log("key=",key,"value=",student[key]);
 }
//  guess
let gamenum=11;
let usernum=prompt("ENTER THE NUMBER:");
while(gamenum!= usernum){
    usernum=prompt("you entered wrong no.guess again");
}
console.log("congrats,you entered the right number");
// STRINGS
let obj={
   item:"pen",
   price:10,
};
// better way...single string k andr combine krdo..that way is TEMPLATE LITERALS
let output = `the cost of  ${obj.item} is ${obj.price} rupees`;
console.log(output);
console.log("the cost of ",obj.item,"is",obj.price,"rupees");

// TEMPLATE LITERALS
let specialstring='this is a template literal ';
console.log(typeof specialstring);
// String Functions
let str1="apna";
let str2="college";
let res= str1.concat(str2);
console.log(res);
let str3="hello";
console.log(str3.replace("hello","yello"));
// PRACTICE








