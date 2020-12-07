
// Part 1
function PersonA() {
	var DOB = 7;
	var name = 'Rahul'
	// in Normal Fn invocation this === Global always except Arrow Function
	// console.log(this) 
	function age() {
		console.log(DOB);
		console.log(name);
		// console.log(this)
	}

	// DOB = 10
	return (age)
}
let person1 = PersonA()
console.log(person1)
person1()

// Part 2
// function PersonB() {
// 	var weight = 29

// 	function PersonA() {
// 	var DOB = 7;
// 	var name = 'Rahul'
// 	// in Normal Fn invocation this === Global always except Arrow Function
// 	console.log(this) 
// 		function age() {
// 			console.log(weight, DOB);
// 			// console.log(this)
// 		} age()
// 	} PersonA()
// } 
// PersonB()