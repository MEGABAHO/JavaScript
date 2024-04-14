const score = [4,6,8,1];
for (const[index,element] of score.entries()){
    console.log(`round ${index+1}: ${element}`);
}

score.forEach ((element,index)=>{
console.log(`round ${index+1}:  ${element}`);
})
const iterator = (element)=>console.log(`round: ${element}`);
score.forEach(iterator);