// 1

let i = 3;

while (i) {
  alert( i-- );  // 1
}


//2


let i = 0;
while (++i < 5) alert(i); // от 1 о 4


let i = 0;
while (i++ < 5) alert(i);  // от 1 до 5



//3

for (let i = 0; i < 5; i++) alert(i); // от 0 до 4

for (let i = 0; i < 5; ++i) alert(i); // от 0 до 4


// 4

for (let i = 2; i < 10; i++){
	if (i % 2 === 0) {
		alert(i)
	}
}



//5

// было
for (let i = 0; i < 3; i++) {
	alert( `number ${i}!` );
}
  
// стало
let i = 0;
while (i < 3) {
	alert(`number ${i}!`);
	i++;
}



// 6

let a;

do {
  a = prompt("Введите число больше 100?", 0);
} while (a <= 100 && a);


// 7

let n = 10;


number:	
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue number; 
  }

  alert( i ); 
}

