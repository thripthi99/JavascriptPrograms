//21.FACTORIAL USING RECURSION


function factorial(x) {

 
    if (x == 0) {
        return 1;
    }

    
    else {
        return x * factorial(x - 1);
    }
}


const num = prompt('Enter a positive number: ');

calling factorial() if num is positive
if (num >= 0) {
    const result = factorial(num);
    console.log(result);
}
else {
    console.log('Enter a positive number.');
}