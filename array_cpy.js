//primative vs reference data types  
// in primative data tyle each variable stored in separate block of stack each has its individual space

//in reference type we stored with refernce address if a=[1,2,3] and b=a and if we push element one element to 1 array then it also shows in array 2 because array 2 is refernce array 1 both are refering to single data

// to create a clone of array we can use slice


let arr1=[1,2,3,4,5,6]
// let arr2 = arr1.slice(0)

//new method
// let arr2 = [...arr1]

//second method

let arr2 = [].concat(arr1,["a","b"])
// console.log(arr2)

//if we want to add another element to arr2 with arr1
// let arr3 = arr1.slice(0).concat(99,56)    1st method

// let arr3 = [...arr1, 99 , 56]    new method
arr3 = [...arr1,...arr2]
console.log(arr3)