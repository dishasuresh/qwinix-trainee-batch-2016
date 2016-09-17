function email(){

	debugger;
	// a=document.getElementsByClassName("contactName").value
	if(!document.getElementsByClassName("name")[0].value){
		alert("Please Enter name");
	}
	else if(!document.getElementsByClassName("email")[0].value){
		alert("Please Enter email Id");
	}
		else alert("Email is sent successfully ");
}
