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