//1

const user = {};

user.name = "john";
user.surname = "smith";
user.name = "pete";
delete user.name;



//2

function isEmpty(obj) {
	for (let j in obj) {
		// если тело цикла начнет выполняться - значит в объекте есть свойства
		return false;
	}
	return true;
}


//3
// содержимое объекта можно будет изменить, а самое название переменной нет


//4

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}


let sum = 0;

for (let item in salaries) {
	sum += salaries[item];
}

console.log(sum);



//5

function ultiplyNumeric(obj){
	for (let item in obj) {
		if (typeof obj.item == 'number') {
			obj.item = item * 2;
		}
		
	}
}



