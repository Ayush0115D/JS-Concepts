let marks=[97,6,56,71,49];
console.log(marks);
let heroes=["hulk","spiderman","thor","ironman","shaktiman","antman"];
console.log(heroes);
// for (let i=0;i< heroes.length;i++){
    // console.log(heroes[i]); 
    // or
    for (let idx=1;idx<= heroes.length;idx++){
        // not prefered generally not a good method
        console.log(heroes[idx-1]); 
    }
        // for of loops
for(let hero of heroes){
    console.log(hero);
}
let cities =["delhi","gurugram","goa","agra","noida"];
for( let city of cities)
    console.log(city.toUpperCase());
// practice
let markss=[79,99,72,62,24];
let sum=0;
for( let val of marks){
    sum=sum+val;
}
let avg =sum/marks.length;
console.log(`avg marks of class= ${avg}`);
//
let items=[250,300,900,50,100];

for(let i=0;i<items.length;i++){
    let offer = items[i]/10;
    items[i]-=offer;
} 
console.log(items);
// or
let i=0;
for(let val of items){
    let offer=val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer=${items[i]}`);
    i++;
}
let foodItems=["potato","tomato","apple","litchi"];
// foodItems.push("paneer","chips");
let deletedVal=foodItems.pop();
console.log(foodItems);
console.log("deleted", deletedVal);
let marksss= [77,65,88,92,57];
console.log(marksss);
let arr =[1,2,3,4,5,6,7];
// arr.splice(1,2,100,200,5,6,7);
// add Element
arr.splice(1,0,100);
// delete Element
// arr.splice(3,1);
// replace Element
arr.splice(3,1,101);
// practice
let company=["amazon","microsoft","google","uber","ola"];
// company.splice(0,1);
// company.splice(0,1,"tata");
company.splice(5,0,"hcl");
console.log(company);



 

