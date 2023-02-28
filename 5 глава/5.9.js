//1


let salaries = {
	"John": 330,
	"Pete": 650,
	"Mary": 560
  };

function sum(salaries) {

	let sum = 0;
	for (let salary of Object.values(salaries)) {
	  sum += salary;
	}
  
	return sum; 
  }
  
  
  
alert(sum(salaries)); 
  

//2


const count = (obj) => Object.keys(obj).length;
