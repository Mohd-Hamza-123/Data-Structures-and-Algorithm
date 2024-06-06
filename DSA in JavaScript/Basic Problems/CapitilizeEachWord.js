// Very Important
let word = "this is me mohd Hamza"

// method 1:
let capitizileString = []
let newString = word.split(" ")

for (let i = 0; i < newString.length; i++) {
    let cap = newString[i].split("")

    cap[0] = cap[0].toUpperCase()
    cap = cap.join("")

    capitizileString = [...capitizileString, cap]
}
// console.log(capitizileString.join(" "))

// method 2 : 

let str = "this is me mohd Hamza"

// console.log(str.charAt(0).toUpperCase())

function capitilize(str) {
    let word = str.split(" ").map(element => {
       let newElement = element.charAt(0).toUpperCase() + element.substring(1, element.length)
       return newElement
    });

    return word.join(" ")
}
let result = capitilize(str)
console.log(result)


// method 3 :




