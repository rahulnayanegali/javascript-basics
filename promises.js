const a = () => {
	return 'AAAA'
}

const b = () => {
	setTimeout(() => {
		return 'BBB'
	}, 3000);
};

const c = () => {
	return 'CCCC'
}


const doAll = () => {
	let x  = a();
	console.log(x);

	let y  = b();
	console.log(y);

	let z  = c();
	console.log(z);
}

doAll()