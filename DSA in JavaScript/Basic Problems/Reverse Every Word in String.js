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

