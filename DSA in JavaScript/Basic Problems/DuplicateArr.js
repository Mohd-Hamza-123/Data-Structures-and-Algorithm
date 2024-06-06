let arr = [1, 2, 3, 4]

function duplicate(arr, times) {
    let duplicateArr = []
    duplicateArr.length = arr.length * times
    let count = 0
    for (let i = 0; i < times; i++) {
        for (let ii = 0; ii < arr.length; ii++) {
            duplicateArr[count] = arr[ii]
            count++
        }
    }
    return duplicateArr
}

function duplicate2(arr){
    return arr.concat(arr)
}
console.log(duplicate(arr, 2))


console.log(duplicate2(arr))