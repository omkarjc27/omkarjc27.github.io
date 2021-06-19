function SignUp() {
	var form = document.getElementById("signup").getElementsByClassName("text-ip")
	var email = form[0].value
	var u_name = form[1].value
	var password = form[2].value

	var ourRequest = new XMLHttpRequest();
	ourRequest.open('POST', 'https://api-snowglobe.herokuapp.com/signup/');
	ourRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	ourRequest.send(JSON.stringify({ "email": email, "u_name": u_name, "pass": password}));
	ourRequest.onload = function() {
		if (ourRequest.status >= 200 && ourRequest.status < 400) {
			var data = JSON.parse(ourRequest.responseText);
			if (data=="E"){
				var e_disp = document.getElementById("mail_e")
				e_disp.innerHTML = "Email Address already in use."
			} else if (data=="U") {
				var e_disp = document.getElementById("name_e")
				e_disp.innerHTML = "Username already taken."
			} else {
				window.localStorage.setItem("Snow_Globe_User_ID", data);
				window.location.href = "profile.html?user="+u_name;
			}
		} else {
			error('Server Error','Our Team is working on fixing it.')
		}
	}
}

function CheckMail(inp) {
	var e_disp = document.getElementById("mail_e")

	var ourRequest = new XMLHttpRequest();
	ourRequest.open('POST', 'https://api-snowglobe.herokuapp.com/CheckMail/');
	ourRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	ourRequest.send(JSON.stringify({ "email": inp.value}));
	ourRequest.onload = function() {
		if (ourRequest.status >= 200 && ourRequest.status < 400) {
			var data = JSON.parse(ourRequest.responseText);
			if (data==false){
				e_disp.innerHTML = "Email Address already in use."
			} else {
				e_disp.innerHTML = ""
			}
		} else {
			error('Server Error','Our Team is working on fixing it.')
		}
	}
}

function CheckUname(inp) {
	var e_disp = document.getElementById("name_e")
	if (inp.value.match(/^[0-9a-zA-Z]+$/)!=true){
		e_disp.innerHTML = "Username can only contain alphabets and numbers."
		return	
	}
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('POST', 'https://api-snowglobe.herokuapp.com/CheckUname/');
	ourRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	ourRequest.send(JSON.stringify({ "u_name": inp.value}));
	ourRequest.onload = function() {
		if (ourRequest.status >= 200 && ourRequest.status < 400) {
			var data = JSON.parse(ourRequest.responseText);
			if (data==false){
				e_disp.innerHTML = "Username already taken."
			} else {
				e_disp.innerHTML = ""
			}
		} else {
			error('Server Error','Our Team is working on fixing it.');
		}
	}
}

function Login() {
	var form = document.getElementById("login").getElementsByClassName("text-ip")
	var u_name = form[0].value
	var password = form[1].value

	var ourRequest = new XMLHttpRequest();
	ourRequest.open('POST', 'https://api-snowglobe.herokuapp.com/login/');
	ourRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	ourRequest.send(JSON.stringify({ "u_name": u_name, "pass": password}));
	ourRequest.onload = function() {
		if (ourRequest.status >= 200 && ourRequest.status < 400) {
			var data = JSON.parse(ourRequest.responseText);
			if (data==false){
				var e_disp = document.getElementById("log_e")
				e_disp.innerHTML = "Wrong Username & Password Combination."
			} else {
				window.localStorage.setItem("Snow_Globe_User_ID", data);
				window.location.href = "profile.html?user="+u_name;
			}
		} else {
			error('Server Error','Our Team is working on fixing it.');
		}
	}
}