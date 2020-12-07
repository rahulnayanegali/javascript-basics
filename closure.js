// case 1
console.log('###Case 1### ')
function a() {
	var age = 29;
	function b() {
		console.log(`age of a is ${age}`)
	}
	b()
}
a()
// function b(){} along with its lexical scope is closure

// case 2
console.log('###Case 2### ')
function c() {
	let age = 30;
	function d() {
		console.log(`age of c is ${age}`)
	}
	return d;
}
// here c() gets invoked and stores the return value(d()) in e
// but along with d(), d()'s lexical scope is also returned in e.
// e not only has code of d(), also remembers the its lexical scope
let e = c();
console.log(e)
e(); // 30

// case 3
console.log('###case 3###')
function f() {
	let first = 'first'
	function g() {
		let second = "second"
		console.log(first, second)
		function h() {
			let third = "third"
			console.log(first, second, third)
		}
		return h;
	}
	return g;
}
// i = g() + access to first variable
let i = f();
// j = h() + access to first and second variable
let j = i();
j()
