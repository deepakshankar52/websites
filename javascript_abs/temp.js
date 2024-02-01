/*
console.log("hi");

document.getElementsByTagName('h1')[0].innerHTML = 'HI';

document.write('Vera mari');


window.alert("Warning");

window.prompt("Enter your name:");

// getting value from user and printing in screen
window.alert(prompt('enter your name'));


user_name = window.prompt("enter name");
console.log(user_name);


const dept_name = "ads";
//dept_name = "ece";
console.log(dept_name);


// fixed values means use const otherwise use let,var(old browser)

// global and local scope

let dept_name = 'ads';
console.log(dept_name);
{
     let dept_name = 'ece';
    console.log(dept_name);

}
console.log(dept_name);

// o/p => ads  ece  ads

var dept_name = 'ads';
console.log(dept_name);
{
    var dept_name = 'ece';
    console.log(dept_name);
}
console.log(dept_name);

// 0/p => ads ece ece


OBJECTS:
    Array
    Object

datatype:
    num -> 15 digit -> 287
    BigInt -> more than 15 digit -> 287n
    string
    Boolean

print dataype -> typeof()

// odd or even

let num = window.prompt("Enter a number:");
if(num%2 == 0)
{
    console.log("even");
}
else 
{
    console.log("odd");
}

// positive, negative and zero

let num = window.prompt("Enter a number:");
if(num>0)
{
    window.alert(num + " is positive");
}
else if(num<0)
{
    window.alert(num + "negative");
}
else
{
    window.alert(num + "zero");
}


// using innerHTML

const num = window.prompt("Enter a number:");
if(num%2 == 0)
{
    num.innerHTML = "Prime number";
}
else if(num == 1)
{
    num.innerHTML = "Neither prime nor composite number";
}
else
{
    num.innerHTML = "Composite number";
}

// switch case

let day = window.prompt("Enter a number within 0 to 6:");
switch(day)
{
    case 0:
        window.alert("Sunday");
        break;
    case 1:
        window.alert("Monday");
        break;
    case 2:
        window.alert("Tuesday");
        break;
    case 3:
        window.alert("Wednesday");
        break;
    case 4:
        window.alert("Thursday");
        break;
    case 5:
        window.alert("Friday");
        break;
    case 6:
        window.alert("Saturday");
        break;
    default:
        window.alert("Invalid input")
}

// Ternary operator

let num = prompt("Enter a number:");

(num%2 == 0)?window.alert("Even number"):window.alert("Odd number");

// logical and(&&)

//let value = false;
let value = true;
if(value && true)
{
    console.log("Its True");
}
else
{
    console.log("Its False");

}

// new Date() 

let a = new Date();
console.log(a);
console.log(typeof(a));

// object -> key value pairs

data = {
    user_name: 'deepak',
    age: 20,
    dept: 'ads',
    skill: {
        frontend: ['html', 'css'],
        backend: 'javascript'
    }
};
console.log(data);
console.log(data.age);
console.log(data.skill.frontend);
console.log(data.skill.frontend[0]);

// arrays

let arr = [[1,2,3], 'deepak', {age: 20, dept: 'ads'}]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2].age);

*/

// function

// function addition(a,b) {
//     return a+b;
// }

// console.log(addition(1,5));

function addition(a,b) {
    return a+b;
}
 
function subtraction(a,b) {
    return a-b;
}

function multiplication(a,b) {
    return a*b;
}

function division(a,b) {
    return a/b;
}

let num_1= parseInt(window.prompt("Enter number 1:"));
let num_2 = parseInt(window.prompt("Enter number 2:"));
let opr = window.prompt("1 - addition,\n2 - subtraction\n3 - multiplication\n4 - division\nEnter your operation:");
if(opr == 1)
{
    console.log(addition(num_1, num_2));
}
else if(opr == 2)
{
    console.log(subtraction(num_1, num_2));
}
else if(opr == 3)
{
    console.log(multiplication(num_1, num_2));
}
else if(opr == 4)
{
    console.log(division(num_1, num_2));
}

//Balachandra Youtube - js tutorial for beginners in tamil 