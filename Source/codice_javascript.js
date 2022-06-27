function valida(){
	
	var nome = document.getElementById("nome").value;
	var cognome = document.getElementById("cognome").value;
	var username = document.getElementById("username").value;
	var pwd = document.getElementById("pwd").value;
	var cfpwd = document.getElementById("cfpwd").value;
	var num1 = document.getElementById("num1").innerText;
	var num2 = document.getElementById("num2").innerText;
	var captcha = document.getElementById("captcha").value;
	
	var esito = true;
		
	if(nome == ""){
		
		document.getElementById("msg_nome").style.display = "inline";
		esito = false;
	}else{
		document.getElementById("msg_nome").style.display = "none";
	}
	
	if(cognome == ""){
		
		document.getElementById("msg_cognome").style.display = "inline";
		esito = false;
	}else{
		document.getElementById("msg_cognome").style.display = "none";
	}
	if(username == ""){
		
		document.getElementById("msg_username1").style.display = "inline";
		esito = false;
	}else{
		document.getElementById("msg_username1").style.display = "none";
	}
	if(username.length < 6){
		
		document.getElementById("msg_username2").style.display = "inline";
		esito = false;
	}else{
		document.getElementById("msg_username2").style.display = "none";
	}
	if(pwd == ""){
		
		document.getElementById("msg_pwd1").style.display = "inline";
		esito = false;
	}else{
		document.getElementById("msg_pwd1").style.display = "none";
	}
	if(pwd.length < 8){
		
		document.getElementById("msg_pwd2").style.display = "inline";
		esito = false;
	}else{
		document.getElementById("msg_pwd2").style.display = "none";
	}
	if(cfpwd == ""){
		
		document.getElementById("msg_cfpwd1").style.display = "inline";
		esito = false;
	}else{
		document.getElementById("msg_cfpwd1").style.display = "none";
	}
	if(cfpwd != pwd){
		
		document.getElementById("msg_cfpwd2").style.display = "inline";
		esito = false;
	}else{
		document.getElementById("msg_cfpwd2").style.display = "none";
	}
	
	if(Number(captcha) != Number(num1)+Number(num2)){
		
		document.getElementById("msg_captcha").style.display = "inline";
		esito = false;
	}else{
		document.getElementById("msg_captcha").style.display = "none";
	}
	
	return esito;
}