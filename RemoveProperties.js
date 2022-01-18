// 49. Remove property in object
let obj = [
  {
    name: "rajath",
    age: 23,
    gender: "male",
    ph: 1234,
  },
  {
    name: "rajat",
    age: 33,
    gender: "female",
    ph: 12346,
  },
];

obj.map(x => {
  return delete x.ph;
});
console.log(obj);

obj.forEach(x => {
  delete x.ph;
});