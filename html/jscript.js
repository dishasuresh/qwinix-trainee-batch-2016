
  function func()
  {
    document.getElementById('demo').innerHTML = 'Hello JavaScript!';
  }

 function funnew()
  {
    document.getElementById('new').innerHTML = 'Google';
    func()
  }

 funnew()


 function fun(){
 	funmul(15,10);
 }
 
 function funmul(a,b)
 {  
 	var c=a*b;
 	document.getElementById('dem').innerHTML='Multiplication is ' + c;
 	
  }
 fun()

