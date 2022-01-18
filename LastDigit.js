//30.CHECK THE LAST DIGIT

/* program to check whether the last digit o
numbers is same */
// take input
const a = prompt('Enter a first integer: 
const b = prompt('Enter a second integer:
const c = prompt('Enter a third integer: 
// 
// find the last digit
const result1 = a % 10;
const result2 = b % 10;
const result3 = c % 10;
// 
// compare the last digits
if(result1 == result2 && result1 == resul3){
    console.log("same last digit");
}
else {
    console.log(" different last digit.")
}
// 
