//73.Use the reduce function to calculate the sum of nums array. The output should be:

let nums = [11, 22, 33, 46, 75, 86, 97, 98];
let squaredEvenNums = nums.filter(num => num % 2 === 0).map(num => num * num);
console.log(squaredEvenNums);

let sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(sum);