// most developers use const in refernce type when we push or pop it address not changing if assign again usin const a=[] then it give error
const fruits = [8,5,0,10,0,20]
let [a ,b ,...newd]=fruits
console.log(newd)          // [0,10,0,20]
   