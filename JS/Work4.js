const arr = ["!", "Js", "Love", "I"];
let truc = [];

for (let i =arr.length;i>=0;i--){
    truc.push(arr[i]);
}

console.log(truc.join(" "));
console.log(arr.reverse().join(" "))