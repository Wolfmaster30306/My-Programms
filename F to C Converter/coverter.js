while(3>1){
	var unit = prompt("what is your starting unit\n1 for fahrenheit\n2 for celsius");
	 while(unit != 1 && unit !=2){
	   var unit = prompt("what is your starting unit\n1 for fahrenheit\n2 for celsius");
	 }
	var value = prompt("what is your value");
	if (unit == 1) {
	var answer = (value-32)*5/9;
	alert(answer+" Degrees Celsius");
	}
	if (unit == 2) {
	var answer = (value*9/5)+32;
	alert(answer+" Degrees Fahrenheit");
	}
}
