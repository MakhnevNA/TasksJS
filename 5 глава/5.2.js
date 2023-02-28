//1

let x = +prompt("Введите первое число", "");
let y = +prompt("Введите второе число", "");

alert(x + y );


//2

alert( Math.round(6.35 * 10) / 10 ); // правильная запись


//3

function readNumber(){

	for(let i = 0; i < 1; i++){
		a = +prompt('введите число', '');

		if(typeof a == 'number'){
			return a;
		} else if(a === '' || a === null){
			return null;
		} else {
			i--;
		}
	}
}







//4 - десятичные дроби в js не всегда равны тому сколько мы думаем, по этому 10 никогда бы не получилось



//5

function random(min, max) {
	return min + Math.random() * (max - min);
}

alert( random(50, -50) );



//6


function randomInteger(min, max) {
	let num = min + Math.random() * (max - min);
	return Math.round(num);
}

alert(randomInteger(5, 15));







