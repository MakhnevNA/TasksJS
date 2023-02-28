//1

let d = new Date(2012, 1, 20, 3, 12);
alert(d);


//2

function getWeekDay(date) {
	let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

	return days[date.getDay()];
}

let date = new Date(2020, 10, 23); 
alert(getWeekDay(date)); 


//3

function getLocalDay(date) {

	let day = date.getDay();
  
	if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
	  day = 7;
	}
  
	return day;
}
  

//4


//5

function getLastDayOfMonth(year, month) {
	let date = new Date(year, month + 1, 0);
	return date.getDate();
  }
  
alert(getLastDayOfMonth(2022, 5)); 
  


//6

function getSecondsToday() {
	let d = new Date();
	return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}
  

//7

function getSecondsToTomorrow() {
	let now = new Date();
	let hour = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
	let totalSecondsInADay = 86400;
  
	return totalSecondsInADay - totalSecondsToday;
  }


