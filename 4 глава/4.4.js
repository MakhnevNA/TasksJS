// 1 -будет ошибка

//2
let calculator = {

	read() {
		this.a = +prompt('введите a', "");
		this.b = +prompt('введиет b', "");
	},

	sum() {
		return this.a + this.b;
	},
  
	mul() {
		return this.a * this.b;
	}
  
	
};

	calculator.read();
	alert( calculator.sum() );
alert(calculator.mul());
	

	//3

	
	let ladder = {
		step: 0,
		up() {
		  this.step++;
		  return this;
		},
		down() {
		  this.step--;
		  return this;
		},
		showStep() {
			alert( this.step );
			return this;
		}
	};
	
	
		ladder.up().up().down().showStep().down().showStep();
	








