const operation = [100,-300,-100,50,400];

operation.sort((a,b)=>{
    return a > b ? +1 : -1;
})
console.log(operation)

operation.sort((i,w)=> i-w );
console.log(operation)