
const operations = [100,-20,7,-30,500];
let balance = 0;
const finalBalance = operations.reduce((acc,operation,index)=>{
console.log(`balance ${acc}, operation ${operation}, Cicle ${index}`)
    return acc += operation;
},0);
console.log(finalBalance);

const minElement = operations
    .reduce((acc,operation)=>{
    if (acc<operation){
        return acc;
    }else {
        return operation;
    }},0);
console.log(minElement)




