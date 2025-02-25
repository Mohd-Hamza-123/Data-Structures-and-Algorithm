let arr = [2, 4, 5, 1]
const target = 10

let obj = {}

class CookObj {
    constructor(self, arr) {
        console.log(self.arr)
        for (let i = 0; i < (self.arr).length; i++) {
            self.arr[i] = arr[i]
        }
    }
}

const newObj = new CookObj(arr)
console.log(newObj)
