let num = 12345

let reversedNum = 0

function reverseNum1(num) {
    while (num !== 0) {
        let lastdigit = num % 10

        reversedNum = reversedNum * 10 + lastdigit

        num = parseInt(num / 10)
    }
    return reversedNum
}

function reverseNum2(num) {
    return Number(num.toString().split("").reverse().join(""))
}

console.log(reverseNum1(num))
console.log(reverseNum2(num))