const userName = "Вася Пупкин";

console.log(userName);
console.log(userName[0]+userName[2]);
console.log(userName.charAt(2));
console.log(userName.length);
console.log(userName.indexOf("уп"));
console.log(userName.lastIndexOf("а"));
console.log(userName.includes("уп"));
console.log(userName.slice(5));
console.log(userName.slice(5,8));

const user = "Ivan Robo Cop Topychkanov";

const name = user.slice(0,4)+user.slice(13,user.length)
console.log(name)
const fullName = user.slice(0,user.indexOf(" "))
    +user.slice(user.lastIndexOf(" "),user.length);
console.log(fullName)

const nameOfMe= "Ivan Topychkanov Aleksandrovich ";

console.log(nameOfMe.startsWith("T"));
console.log(nameOfMe.endsWith("h"));
console.log(String ("Ivan Topychkanov").includes("a"));
console.log(nameOfMe.toLowerCase());
console.log(nameOfMe.toLocaleUpperCase());
console.log(nameOfMe.repeat( 2));
console.log(nameOfMe.replace(" ","/"));
console.log(nameOfMe.replaceAll(" ","/"));
console.log(nameOfMe.replace(/ /g,"/"));
console.log(nameOfMe.trim())

// work telephon

const num1 = "891032335356";
const num2 = "+891032335356";
const num3 = "+8(910) 323-35-56";
const num4 = " +8(910) 323-35-56 ";

const num1Error = "+89103233";
const num2Error = "+8d910d323-34-45";
const num3Error = "8+9103233445";
const num4Error = "89103g23344";

function verif(arg) {

    let verification = arg.trim();
          verification = verification.replace(" ","");

          if (verification.slice(1,verification.length).includes("+")){
               console.log("Write is not correct");
              return;
          }
    let num = [];

          for (let char of verification){
              if (!isNaN(char)) {

                  let el =  char.slice();
                  num.push(el);
              }
          }
          let number = num.join("");
    console.log(number);
    console.log(verification)
}

verif(num2Error);


const film = "star wars"
console.log(film.padStart(50,"+"),film.padEnd(50,"+"));
console.log(film.repeat(10));

const numberOfCard = "235656378596757678";
console.log(numberOfCard.slice(-4).padStart(14,"*"));











