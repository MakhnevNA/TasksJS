
alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // 2
alert(1 && null && 2); // null
alert( alert(1) && alert(2) ); // undefined
alert(null || 2 && 3 || 4); // 3

//6

let age;
if (age >= 14 && age <= 90);

//7

if (!(age >= 14 && age <= 90));

if (age < 14 || age > 90)
	
	
//8

if (-1 || 0) alert( 'first' );  // выполнится if будет -1
if (-1 && 0) alert( 'second' );	// не выполнится if будет 0
if (null || -1 && 1) alert('third'); // выполнится if будет 1



// 8

let login = prompt("введите логин", '');

if (login == 'Админ') {

	let password = prompt('Введите пароль', '');

	if (password == 'Я главный') {
		alert('Здравствуйте!')
	} else if (password == null || password == "") {
		alert('Отменено')
	} else {
		alert('Неверный пароль')
	}

} else if (login == null || login == "") {
	alert('Отменено')
} else {
	alert('Я вас не знаю')
}







