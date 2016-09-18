
// function total(){
// 	var m=parseInt(document.getElementById("a").value);
// 	var n=parseInt(document.getElementById("b").value);
// 	var o=parseInt(document.getElementById("c").value);
// 	var p=parseInt(document.getElementById("d").value);
// 	var q=parseInt(document.getElementById("e").value);
// 	var r=parseInt(document.getElementById("f").value);
// 	var s=parseInt(document.getElementById("g").value);
// 	var t=parseInt(document.getElementById("h").value);
// 	var u=parseInt(document.getElementById("i").value);
// 	var tot=m+n+o+p+q+r+s+t+u;
// 	alert("Your total= "+tot);
// }

// var OPTtags-master-scuba-diver = $('#OPTtags-adventure-diving:checked').val()

// console.log(m);
// function total(){
// 	if( $('.a:checked') var m= parseInt($('.a:checked').val()););
// var n= parseInt($('.b:checked').val());
// var o= parseInt($('.c:checked').val());
// var p= parseInt($('.d:checked').val());
// var q= parseInt($('.e:checked').val());
// var r= parseInt($('.f:checked').val());
// var s= parseInt($('.g:checked').val());
// var t= parseInt($('.h:checked').val());
// var u= parseInt($('.i:checked').val());
// var tot= m+n+o+p+q+r+s+t+u;

function total(){
	 
if( $('.a:checked'))  m=parseInt($('.a:checked').val());  
if( $('.b:checked'))  n=parseInt($('.b:checked').val()); 
if( $('.c:checked'))  o=parseInt($('.c:checked').val());
if( $('.d:checked'))  p=parseInt($('.d:checked').val());
if( $('.e:checked'))  q=parseInt($('.e:checked').val());
if( $('.f:checked'))  r=parseInt($('.f:checked').val());
if( $('.g:checked'))  s=parseInt($('.g:checked').val());
if( $('.h:checked'))  t=parseInt($('.h:checked').val());
if( $('.i:checked'))  u=parseInt($('.i:checked').val());
var m = m ? m : 0;
var n = n ? n : 0;
var o = o ? o : 0;
var p = p ? p : 0;
var q = q ? q : 0;
var r = r ? r : 0;
var s = s ? s : 0;
var t = t ? t : 0;
var u = u ? u : 0;
var tot= m+n+o+p+q+r+s+t+u;
alert('Your Total is : Rs'+tot);
}
