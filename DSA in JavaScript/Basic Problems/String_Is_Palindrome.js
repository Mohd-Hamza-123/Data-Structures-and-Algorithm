let str = "LoL"

let palindromeString = ""

function checkPalindrome(str) {

    for (let i = str.length - 1; i >= 0; i--) {
        palindromeString += str[i]
    }

    return palindromeString === str
}

function checkPalindrome2(str){
    let newStr = str.split("").reverse().join("")
    return str === newStr
}

console.log(checkPalindrome(str))
console.log(checkPalindrome2(str))
