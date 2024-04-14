
const tasks = ["Задача 1","fack"];

function Add(a){
    tasks.push(a);
}

function Remove(b){
const index = tasks.indexOf(b);
if (index === -1){
    return;
}
 return tasks.splice(index,1);
}

function Prioritize(task){
    const result = Remove(task);
    if (!result) {
        return;
    }
    tasks.unshift(result[0]);
}
Add("Задача 2");
Add("Задача 3");
console.log(tasks);
// Remove("Задача 2");
console.log(tasks);
Prioritize("Задача 2");
console.log(tasks)
