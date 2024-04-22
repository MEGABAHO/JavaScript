const operations = [100,-70,130,-40,30];
const operationsCredit = operations
    .filter(element=>{
    return element>0;
})

console.log(operationsCredit);

const operationsCreditInRub = operations
    .filter(element=>{
    return element>0;
})
.map(element=>{
    return element*60;
})
console.log(operationsCreditInRub);
// [100,150]
const prices = [[100,200],[120,100],[200,350]];

const deltaPrices = prices
    .filter(element=>{
    return element[0]<element[1];
})
console.log(deltaPrices)


const delta = deltaPrices
    .map(element=>{
    return (element[0]+element[1])/2;
})
console.log(delta)