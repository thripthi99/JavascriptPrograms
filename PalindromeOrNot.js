//40 program to check if the string is palindrome or not
let string = prompt('Enter a string: ');
function checkPalindrome(str) {
 find the length of a string
    const len = string.length;
    loop through half of the string
    for (let i = 0; i < len / 2; i++) {
        check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
let value = checkPalindrome(string);
console.log(value);