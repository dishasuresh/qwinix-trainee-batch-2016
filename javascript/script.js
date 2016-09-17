function myFunction(){
	document.getElementById("demo").innerHTML="hello world";

}

function newFunction(){
	document.getElementById("new").innerHTML="hello world";
	myFunction()

}

myFunction()