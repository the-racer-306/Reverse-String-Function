function theracerReverse(str) {
  let stringRev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    stringRev += str[i];
  }
  return stringRev;
}

console.log(reverseStr("recaR")); //Racer

//Good luck ( :
