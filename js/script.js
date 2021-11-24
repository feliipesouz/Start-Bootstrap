
var form = document.querySelector(".form-one");

var input = document.querySelector(".input-one");

var button = document.querySelector(".btn1");



button.addEventListener("click", (event) => {
	
	var value = input.value;
	form.setAttribute(
		"action", 
		`https://formsubmit.co/${value}`)
	console.log(value)
	
});