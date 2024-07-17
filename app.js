// functions in javascript 
// declaaration of functions
//  task 1

 function evenOdd(num){
if(num%2===0){
    console.log(num,"is a even number.");
}
else{
    console.log(num ,"is a odd number.");
} 
}
console.log(evenOdd(7));

// task 2

function square(num1){
    console.log(num1*num1);
    return;
}
console.log(square(7));

// function expression
//  task 3

function max(num2 ,num3){
    if(num2 > num3){
        console.log(num2 ,"is a grater number.");
    }else{
        console.log(num3 , "is a grater number.");
    }
}
console.log(max(7 ,3));

// task 4

function concat(str1,str2){
    console.log(str1 + str2);
}
console.log(concat("my name" ,  " is Abhishek."));

// arrow functions
// task 5

const addTwo = (num4 ,num5) => {
    return num4 + num5 ;
}
console.log(addTwo(3 , 4));


// task 6

let  containChar = (str ,char ) => {
    return str.includes(char);
};

console.log(containChar("Abhishek", "A"));

// function parmeters and default values
// task 7

function calc(num6 ,num7=7){
    return num6*num7;
}
console.log(calc(3,8));
console.log(calc(7));

//  task 8
function greet(name,age="unknown"){
return  `${name}, you are ,${age} , years old.`;
}
console.log(greet("Abhishek",20));
console.log(greet("prem"));


// higher order fuctions
// task 9
function callMulti(func ,numTimes){
    for (let i=0; i<=numTimes ;i++){
        func();
    }
}
function sayHello(){
    console.log("Hello");
}
callMulti(sayHello ,5);

// task 10
function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}
const Two = x => x + 2;
const multiplyByThree = x => x * 3;

const result = applyFunctions(Two, multiplyByThree, 5);
console.log(result); 


