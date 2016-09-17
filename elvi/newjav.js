function myFunction() {
	document.getElementById('demo').innerHTML = "Hello";
	newFunction()
}

function newFunction(){
	document.getElementById('demo1').innerHTML = "hey";
}

myFunction()