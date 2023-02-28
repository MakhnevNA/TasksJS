// 1 отличий нет

// 2


const checkAge = (age) => (age > 18) ? true : confirm('Родители разрешили?')

function checkAge(age) {
	return (age > 18) || confirm('Родители разрешили?');
}
  


//3

function min(a, b) {
	return (a > b) ? a : b
}

// 4

function pow() {
	let x = +prompt("введите число", "");
	let n = +prompt("введите cтепень для числа", "");
	let number;

	for (let i = 1; i < n; i++){
		number *= x;
	}
	return number
}


