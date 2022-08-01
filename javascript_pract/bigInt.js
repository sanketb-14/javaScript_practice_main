//undefined - if we didnt assign a value to variable then its type is undefined but in case of const we have assign the value or it give error

//BigInt
let num = 123 ;
console.log(Number.MAX_SAFE_INTEGER)   //give max safe no to be assign
// converting number to BigInt

let a = 123n
let b = BigInt(123) //both are BigInt
console.log(a+ b)  //operation only happend when both atrributes are BigInt if one of them is not gives error

//falsy-values == '' , 0 , undefined , nul , false