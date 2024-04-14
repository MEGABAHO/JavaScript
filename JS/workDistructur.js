const userData = ["Bob", 18, "Moscou"];

function getData(){
// return ["Bob", 18, "Moscou"];
return userData;
}
// const userName = getData()[0];
// const age = getData()[1];
// const city = getData()[2];

const [ _, age, city] = userData
console.log(age,city);
console.log(userData);