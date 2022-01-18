//47. program to remove item from an array

function removeItem(array, n) {
  const index = array.indexOf(n);
  if(index > -1) {
      array.splice(index, 1);
  }
  return array;
}

const result = removeItem([1, 2, 3, 4, 5], 2);
console.log(result);