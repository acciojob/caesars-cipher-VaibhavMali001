// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = [];

  for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i];
    if (lookup[char] !== undefined) {
      // Check if the character is in the lookup table
      decodedArr.push(lookup[char]);
    } else {
      // If not in the table, push the character unchanged
      decodedArr.push(char);
    }
  }

  return decodedArr.join(''); // Join the characters into a string and return it
}

// Test the function
console.log(rot13("SERR YBIR? NPPVBWBO")); 

// Do not change this line
window.rot13 = rot13;
