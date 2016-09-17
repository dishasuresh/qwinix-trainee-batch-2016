<!DOCTYPE HTML>
<html>
<head>
<title></title>
<link rel="stylesheet" type="text/css" href="add.css" media="all">
</head>
<body class="register">
<h1 align="center" style="color:red">CREATE PROFILE</h1><marquee direction="right"><img src="ad.jpg" heigth="100" width="120" align="left"><p style="font-size:80px;color:black">me</p></img></marquee>
<pre>
<form class="about" align="center" style="color:purple;">
<label>Enter Username</label>     <input type="text" text="name"/>
<label>Enter Phone number</label> <input type="text" text="name"/>
<label>Enter password</label>     <input type="password" text="name"/>
<label>Renter-password</label>    <input type="password" text="name"/></br>
<input type="button" value="SUBMIT" style="font-size:15px;"/></br>
<a href="register.html">Already user?Sign in</a>
</form>
</pre>