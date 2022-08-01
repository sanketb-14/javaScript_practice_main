// array push(add element to last) pop(remove last element)
// array shift(remove firsst element) unshift(add element to first)
let a = [ 1 , 2 , 4 ,5]
a.unshift(56)      //O(n)
a.push(100)   //fast O(1)
a.pop()        //fast  O(1)  
a.shift()         //O(n)
console.log(a)