function myFunction(){
console.log("welcome");
console.log("we are learning js");
}
myFunction();
function myFunction(msg ){ // parameter-> input..it passes on defining
console.log(msg);
}
myFunction("I LOVE JS,100"); // ARGUMENT:it passes on calling

function sum(x,y){  // x and y local var..as its scope is within function
    // console.log(x+y);
// }
// sum(9,9);
s=x+y;
console.log("before return");
return s;
console.log("after return");  
// return k baad wala code execute ni hota
// return statement ke baad kn likhte bcoz ek bar apne func se return krdiya uske baad kuch bhi return ni hoga
}
let val=sum(9,9);
console.log(val);
const arrowSum=(a,b)=>{
    console.log(a+b);
}
const arrowMul=(a,b)=>{
    return a*b;
};
const printHello=()=> console.log("hello");
// single line code to semicolon ignore bhi kr skte but we should not


// PRACTICE
 function countVowels(str){
    let count=0;
    for(const char of str){
        if(char==="a"|| char==="e"|| char==="i"||char==="o"||char==="u"){
count++;
        }
    }
    return count;
 }
//  arrow Fucn.
 const countvow=(str)=>{
    let count=0;
    for(const char of str){
        if(char==="a"|| char==="e"|| char==="i"||char==="o"||char==="u"){
count++;
        }
    }
    return count;
    
 }
 //FUNCTION IS JUST NORMAL FUNCTION THAT TAKES INPUT AND RETURN A O/P
 //WHEREAS METHOD IS A FUNCTION WHICH IS ASSOCIATED WITH OBJECT
 //for each loop
 let arr=["Delhi","Pune","mumbai"];
 arr.forEach((val,idx)=>{  // val at each index
console.log(val.toUpperCase(),idx,arr);
 });
// SQUARE OF EACH NUMBER
let nums=[2,4,5,6,7,9];
nums.forEach((num)=>{
    console.log(num*num);
});

// Map
let numb=[2,4,5,6,7,9];
numb.map((val)=>{
    console.log(val);
});
let calcSquare =(num)=>{
    console.log(num*num);
};
// MAP
let number=[2,4,5];
let newarr=number.map((val)=>{
    return val*2;
});
console.log(newarr);
let calcsquare = (number)=>{
    console.log(number*number);
};

// FILTER METHOD
let ARR =[1,2,3,4,5];
let evenARR=ARR.filter((val)=>{
    return val%2===0;
})
console.log(evenARR);

// REDUCE METHOD
let array =[1,2,3,4,5];
const output=array.reduce((result,curr)=>{
    return result+curr;
});
console.log(output);

// for finding max No
let array1 =[1,2,4,3];
const output1=array1.reduce((prev,curr)=>{
 return prev>curr?prev:curr;
});
console.log(output1);


// P.Qs
let marks =[91,77,83,99,88];
let toppers= marks.filter((val)=>{
    return val>90;
})
console.log(toppers)

// Q2
let n=prompt("enter a number:");
let arrayy=[];
for( let i=1;i<=n;i++){
    arrayy[i-1]=i;
}
console.log(arrayy);
let summ=arrayy.reduce((res,curr)=>{
    return res+curr;
}
);
console.log("sum=",summ);
let fact=arrayy.reduce((res,curr)=>{
    return res*curr;
});
console.log("factorial=",fact);