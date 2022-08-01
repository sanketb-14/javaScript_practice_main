//1) Write code to get array of names from given array of users
// 2) get back only having position "developer"
// 3)Sort users by age decending
const staff = [
  { name: 'bob', age: 20, position: 'developer', salary: 100 },
  { name: 'peter', age: 25, position: 'designer', salary: 300 },
  { name: 'susy', age: 30, position: 'the boss', salary: 400 },
  { name: 'anna', age: 35, position: 'developer', salary: 10 },
];

const ans = staff.sort((a,b) => a.age > b.age ? -1 : 1 )
.filter((item) => item.position==="developer").map((n) => n.name)
console.log(ans)
