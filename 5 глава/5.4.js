// 1
// длина будет 4, так как обе переменные являются ссылками на один и тот же массив


//2

const styles = ["Джаз", "Блюз"];

styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");



//4

function sumInput() {

	let numbers = [];
  
	while (true) {
  
		let value = prompt("Введите число", 0);
  
	// Прекращаем ввод?
		if (value === "" || value === null || !isFinite(value)) break;
  
		numbers.push(+value);
	}
  
	let sum = 0;
	for (let number of numbers) {
		sum += number;
	}
	return sum;
}
  
alert( sumInput() );



	//5


