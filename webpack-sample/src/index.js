import {myName, myAge, myBtn} from './var';

console.log(myName)
console.log(myAge)

myBtn.addEventListener('click',change);

function change () {
    myName.innerHTML = "Anand";
    myAge.innerHTML = 55;
}
