/*function abc()
{
	document.getElementById('demo').innerHTML ='hello';
}
function xyz()
{
	document.getElementById('demo1').innerHTML ='world';
	abc()	
}
xyz()

var x=2,y=3;
function add(a,b)
{
	var c=a+b;
	document.getElementById('demo').innerHTML =c;
}
add(x,y)*/

function hidetext()
{
	document.getElementBYId("text").style.display='none'
	document.getElementBYId("hide").style.display='none'
	document.getElementBYId("show").style.display='block'
}

function showtext()
{
	document.getElementBYId("text").style.display='block'
	document.getElementBYId("hide").style.display='block'
	document.getElementBYId("show").style.display='none'
}