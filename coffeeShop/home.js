var index = 0;
	slideShow();
	
	function slideShow(){
	
	var slide1=document.getElementsByClassName("slideImage");
	var text1=document.getElementsByClassName("homeTextValue");
	for(var i=0;i<slide1.length;i++){
		slide1[i].style.display="none";
		text1[i].style.display="none";

	}

	
	var slide2=document.getElementsByClassName("slideImage");
	var text2=document.getElementsByClassName("homeTextValue");
	if(index+1>slide1.length){
		index=0;
	}

	slide2[index].style.display="block";
	text2[index].style.display="block";
	index++;
	setTimeout(slideShow, 4000);

	
}





/****************************************************************************/


function submitContactForm(){
	var confirm = window.confirm("Are you sure want to submit the form");
	

	if(confirm==true){

	document.getElementById("contactForm").style.display="none";
	document.getElementById("submitSuccess").style.display="block";
	setTimeout(changeSubmit, 2000);
	}
}
function changeSubmit(){
	document.getElementById("contactForm").style.display="block";
	document.getElementById("submitSuccess").style.display="none";
}

 
function messageCall(){
	var svalue=document.getElementById("messageType").value;
	if(svalue=="details"){
		

		document.getElementById("otherMessage").style.display="block";	
		document.getElementById("textArea").style.display="block";
		document.getElementById("textArea").placeholder="Enter other details here... "
		document.getElementById("submit").style.display="block";
	
	}
	else if(svalue=="message"){
		document.getElementById("otherMessage").style.display="none";	
		document.getElementById("textArea").style.display="block";
		document.getElementById("textArea").placeholder="Enter the message here... "
		document.getElementById("submit").style.display="block";

	}

	else if(svalue=="suggestion"){
		document.getElementById("otherMessage").style.display="none";	
		document.getElementById("textArea").style.display="block";
		document.getElementById("textArea").placeholder="Enter the suggestion here... "
		document.getElementById("submit").style.display="block";

	}
	else if(svalue=="enquiry"){
		document.getElementById("otherMessage").style.display="none";	
		document.getElementById("textArea").style.display="block";
		document.getElementById("textArea").placeholder="write your quries here... "
		document.getElementById("submit").style.display="block";

	}
	else {
		document.getElementById("otherMessage").style.display="none";	
		document.getElementById("textArea").style.display="none";
		document.getElementById("submit").style.display="none";
	}
	
}

function toCaps(){
	var x=document.getElementById("name");
	x.value=x.value.toUpperCase();
}

function buttonColorChange1(){
	document.getElementById("submit").style.color="white";
	document.getElementById("submit").style.backgroundColor="black";
	
}
function buttonColorChange2(){
	document.getElementById("submit").style.color="black";
	document.getElementById("submit").style.backgroundColor="white";
	
}

function changePage(w){
	
	debugger;
	var htmlValue=w.innerHTML;
	if(htmlValue=="Contact"){
		debugger;
		document.getElementById("contact").style.display="block";
		document.getElementById("coffee").style.display="none";
		document.getElementById("home").style.display="none";
		document.getElementById("aboutUsc").style.display="none";
		document.getElementById("snacks").style.display="none";

	}

	else if(htmlValue=="Coffee"){
		document.getElementById("home").style.display="none";
		document.getElementById("contact").style.display="none";
		
		document.getElementById("coffee").style.display="block";	
		document.getElementById("submitSuccess").style.display="none";
		document.getElementById("snacks").style.display="none";
		document.getElementById("aboutUsc").style.display="none";
		

	}
	else if (htmlValue=="Home"){
		document.getElementById("contact").style.display="none";
		document.getElementById("coffee").style.display="none";
		document.getElementById("home").style.display="block";
		document.getElementById("submitSuccess").style.display="none";
		document.getElementById("snacks").style.display="none";
		document.getElementById("aboutUsc").style.display="none";
	}

	else if (htmlValue=="Snacks"){
		
		document.getElementById("contact").style.display="none";
		document.getElementById("coffee").style.display="none";
		document.getElementById("home").style.display="none";
		document.getElementById("submitSuccess").style.display="none";
		document.getElementById("snacks").style.display="block";
		document.getElementById("aboutUsc").style.display="none";
	}


	else if (htmlValue=="AboutUs"){
		
		document.getElementById("contact").style.display="none";
		document.getElementById("coffee").style.display="none";
		document.getElementById("home").style.display="none";
		document.getElementById("submitSuccess").style.display="none";
		document.getElementById("snacks").style.display="none";
		document.getElementById("aboutUsc").style.display="block";
	}


}



