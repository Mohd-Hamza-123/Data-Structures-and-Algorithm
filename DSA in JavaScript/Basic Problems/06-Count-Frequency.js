// Count frequency of each character in a string


// Way 1 : O(n)
const name = "Mohammad Hamza"

const freq = {}

for (const c of name) {
    if (c === ' ') continue
    if (c in freq) {
        const prev = freq[c]
        freq[c] = prev + 1
    } else {
        freq[c] = 1
    }
}

console.log(freq)

// Way 2 : O(n)

const freq2 = {}

for (const c of name) {
    if (c === ' ') continue
    freq2[c] = freq2[c] ? freq2[c] + 1 : 1
}

console.log(freq2)