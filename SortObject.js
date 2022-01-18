//61.sort object by age
let info = [
  {
    name: "kart",
    age: 25,
  },
  {
    name: "agok",
    age: 24,
  },
];
let data = info.sort((a, b) => {
  return a.age - b.age;
});
console.log(data);