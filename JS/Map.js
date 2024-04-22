const TransactionInUsd = [10,-7,50,-10,100];

const transactionInRub=[];
for(const transaction of TransactionInUsd){
    transactionInRub.push(transaction*60);
}

console.log(transactionInRub);
console.log(TransactionInUsd);

const transactionInRub2 = TransactionInUsd
    .map((transaction,i) =>{
        console.log(i);
       return transaction*60;
    })

console.log(transactionInRub2);

const prices = [[100,200],[120,100],[200,350]];
const creditPrices = prices
    .filter(element=>element[0]<element[1])
    .map(element=>element[1]-element[0]);
console.log(creditPrices);
