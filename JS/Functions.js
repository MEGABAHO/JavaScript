function power(pow){
   return  function (num){
       return num**pow;
   }
}
const power2 = pow => num => num**pow;

console.log(power(3)(4));
console.log(power2(3)(4));