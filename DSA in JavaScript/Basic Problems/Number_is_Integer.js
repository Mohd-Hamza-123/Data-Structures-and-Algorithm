// way 1 :

let num = 54.8393


let check = `${num}`

if (check.includes(`.`)) {
    console.log("It is a decical number")
} else {
    console.log("It is integer")
}


// way 2 :

console.log(Number.isInteger(num))

// way 3 :


if (num % 1 === 0) {
    console.log("It is not decimal")
} else {
    console.log("It is decimal")
}