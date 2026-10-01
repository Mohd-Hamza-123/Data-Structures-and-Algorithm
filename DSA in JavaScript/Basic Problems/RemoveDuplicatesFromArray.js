// Way 1 : O(n^2)
const arr = [5, 6, 1, 1, 5, 9, 0, 8, 1, 7, 1, 0]
const newArr1 = []
for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    const isAdd = newArr1.findIndex((e) => e === element)
    if (isAdd === -1) {
        newArr1.push(element)
    }
}

console.log(newArr1)

// Way 2 : O(n^2)

const newArr2 = []
for (let i = 0; i < arr.length; i++) {
    if (!newArr2.includes(arr[i])) {
        newArr2.push(arr[i])
    }
}

console.log(newArr2)


// Way 3 : O(n)

const s = new Set()
const newArr3 = []

for (const element of arr) {
    if (!s.has(element)) {
        s.add(element)
        newArr3.push(element)
    }
}

console.log(newArr3)