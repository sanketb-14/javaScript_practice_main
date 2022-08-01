// Closure 
//        means that we have access inside of a function to the outside scope 
// closure has access to all properties indside itself and all properties which were defined default

const privateCounter =() => {
  let count = 0
  return {
    increament:(val = 1) => {
      count += 1
    },
    getValue: () => {
      return count
    }
  }
}
const counter = privateCounter();
console.log(counter.getValue())
counter.increament()
console.log(counter.getValue())