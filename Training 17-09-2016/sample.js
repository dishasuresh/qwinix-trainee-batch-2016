/*
function f(){
	document.getElementById("demo").innerHTML="Hello";
	FN();
}

function FN(){
	
	mul(2,5);
}

function mul(a,b){
var c=a*b;
document.getElementById("demo1").innerHTML="Hello YOU, the value is = "+c;
}

f();
*/


/***********************************************************
document.getElementById('show').style.display="none";
function changetoshow(){

document.getElementById('text').style.display="block";
document.getElementById('Hide').style.display="block";
document.getElementById('show').style.display="none";

}

function changetohide(){
document.getElementById('text').style.display="none";
document.getElementById('show').style.display="block";
document.getElementById('Hide').style.display="none";

***********************************************************/
function fn(){
	debugger;
	if(document.getElementById('btn').innerHTML=="Show"){
		document.getElementById('btn').innerHTML="Hide";
		document.getElementById('text').style.display="block";

	}
	else
	{
		document.getElementById('text').style.display="none";
		document.getElementById('btn').innerHTML="Show";
	}	
}
/*
function onSubmit(){
	
	document.getElementById('form').style.display="none";
	document.write("Name :"+document.getElementById('name').value);
	//document.write("company :"+document.getElementById('company').value);
	document.write("designation :"+document.getElementById('designation').value);
	document.write("age :"+document.getElementById('age').value);
	

}

document.getElementById('form1').style.display="none";
function onSubmit(){
	debugger;
	document.getElementById('name1').innerHTML=document.getElementById('name').value;
	document.getElementById('company1').innerHTML=document.getElementById('company').value;
	document.getElementById('designation1').innerHTML=document.getElementById('company').value;
	document.getElementById('age1').innerHTML=document.getElementById('age').value;
document.getElementById('form').style.display="none";
document.getElementById('form1').style.display="block";
document.getElementById('formsubmit').style.display="none";


}
 function changeCall(){
 	document.getElementById('cars').innerHTML= document.getElementById('select').value;
 	document.getElementById('body').style.backgroundColor=document.getElementById('select').value;
 }
function imageChange(x){
	x.src="b.jpg";
	x.style.width="500px";
	x.style.height="500px";
}

function imagec(x){
	x.src="a.jpg";
	x.style.width="200px";
	x.style.height="200px";
	
}
function toUpper(){
	debugger;
	var m=document.getElementById('name');
	m.value=m.value.toUpperCase();
}

function toc(){
	var m=document.getElementById('para');
	m.value=m.value.replace('hai');
}
*/

function showMessage(i){
	if(i==1){
		console.log('in');
	}
	else{
		console.log('out');
	}
	for(i=0;i<10;i++){
		console.log(i);
	}

}