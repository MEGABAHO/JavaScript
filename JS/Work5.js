// const tasks = [[1,"task1"],[2,"task2"]];
// for (let i=0;i<tasks.length;++i){
//     for (let j =0;j<tasks[i].length;++j){
//         console.log(tasks[i][j]);
//     }
//
// }
// let i=0;
// while (++i<5){
//     console.log(`output - ${i}`);

// }
const arr1 = [3,2,"tot",3,5,6,9,8];
let i  =-1;
while (arr1[++i] <= 5 && arr1.length){

    console.log("oui "+arr1[i]);

}
for (let i =0;i<arr1.length;++i){
    console.log(arr1[i]);
}


// for (let i =0;i<arr.length;i++){
//     if (arr[i] > 5){
//         console.log(arr[i]);
//         break
//     }
//     console.log(arr[i]);
// }
const arr = [1,4,"tot",[5,6],8,7];
for (let el of arr){
    console.log("output correct : "+el);
}
const arrIn = arr;
for (let el in arrIn){
    console.log(arrIn[el])
}