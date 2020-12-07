console.log(`#####  Hoisting ######`)

var age = 28;
function hello () {
	console.log(`Hello Rahul`)
}
hello()
console.log(`age is ${age}`)
console.log(hello);
