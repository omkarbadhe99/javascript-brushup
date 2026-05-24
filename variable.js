let a = 10;
 a=20
function foo() {
    const a = 20;
    return a;
//   console.log(a);
}
// console.log(a);
const b = 30;
if(true){
    const b = 40;
    console.log(b);
}
console.log(b);

let c = 50;
if(true){
    let c = 60;
    console.log(c);
}   
console.log(c);
//test
// console.log(foo());

/*
-let variable we can reassign the value but we cannot redeclare the variable
let a = 10;
a= 20;
but let a = 30; // This will throw an error because we cannot redeclare a let variable

- const variable we cannot reassign the value and we cannot redeclare the variable
const a = 10;
a= 20; // This will throw an error because we cannot reassign a const variable
const a = 30; // This will also throw an error because we cannot redeclare a const variable

 - var variable we can reassing the value and we can redclare thi variable
var a = 10;
var a=20




*/
