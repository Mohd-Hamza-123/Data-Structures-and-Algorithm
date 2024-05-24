let sentence = "  Hamza    Hamza   Hamza";
let reverseSentence = "";

let x = "";
let y = "";
for (let i = 0; i < sentence.length; i++) {


 if(sentence[i] !== " ") x += sentence[i]
    
    
 if (sentence[i] === " " || i === sentence.length - 1) {
    if(x.length === 0) continue
    for (let i = 0; i < x.length; i++) {
      y += x[x.length - 1 - i];
    }
    if(i !== sentence.length - 1) y += " "
    reverseSentence += y
    y = "";
    x = "";
  }
}

console.log(reverseSentence)
































// let sentence = "Mohd Hamza Ansari 123";
// let reverseSentence = "";

// let x = "";
// let y = "";
// for (let i = 0; i < sentence.length; i++) {
//   // Build the word until a space or the last character
//   if (sentence[i] !== " " && i !== sentence.length - 1) {
//     x += sentence[i];
//   } else {
//     if (i === sentence.length - 1) x += sentence[i]; // Include the last character in x
    
//     // Reverse the word stored in x and store it in y
//     for (let j = 0; j < x.length; j++) {
//       y += x[x.length - 1 - j];
//     }
    
//     // Add a space before the word if it's not the first word
//     if (reverseSentence.length > 0) {
//       reverseSentence += " ";
//     }
//     reverseSentence += y;
    
//     // Reset x and y for the next word
//     y = "";
//     x = "";
//   }
// }

// console.log(reverseSentence);
