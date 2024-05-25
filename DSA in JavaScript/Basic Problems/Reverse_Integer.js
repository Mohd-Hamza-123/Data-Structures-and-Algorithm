let num = 12345


let reversedNum = 0
while (num !== 0) {
    let lastdigit = num % 10

    reversedNum = reversedNum * 10 + lastdigit

    num = parseInt(num / 10)
}

console.log(reversedNum)