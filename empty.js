var a = 10

function b() {
	console.log(this)
}

let d = {
	x: () => {
	console.log(this)
}
}

console.log(d.x())
