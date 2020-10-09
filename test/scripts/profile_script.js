var data = null
var username = document.getElementById("username");
var n_tales = document.getElementById("n_tales");
var followers = document.getElementById("followers");
var f_button = document.getElementById("f_button");
var tales = document.getElementById("tales");

function LoadProfile(data) {
	username.innerHTML = data["username"]
	n_tales.innerHTML = data["n_tales"]
	followers.innerHTML = data["followers"]
	if(data["following"]) {
		f_button.innerHTML = "Following"
	} else {
		f_button.innerHTML = "Follow +"
	}

	if(data["me"]){
		f_button.innerHTML = "Settings"
	}
	n_tales.innerHTML = data["tales"].length
	var tales_html = ''
	for (var i = 0; i < data["tales"].length; i++) {
		if(data['tales'][i]['hidden']==true && data['me']){
			tales_html += '<div class="w3-card w3-padding w3-round-large w3-black w3-margin"><a class="w3-large" href="reader.html?tale='+data["tales"][i]["token"]+'">'+data["tales"][i]["name"]+'<span class="w3-text-grey w3-medium"> (hidden)</span>'
		} else {
			tales_html += '<div class="w3-card w3-padding w3-round-large w3-black w3-margin"><a class="w3-large" href="reader.html?tale='+data["tales"][i]["token"]+'">'+data["tales"][i]["name"]
		}
		tales_html += '</a><br><span class="w3-small w3-text-grey" style="border:none;padding: 0px">'+data["tales"][i]["views"]+' views</span><span style="font-size: 15px;margin-left: 2px;margin-right: 2px;" class="w3-text-grey"><b> &#183; </b></span><span class="w3-small w3-text-grey" style="padding: 0px">'+data["tales"][i]["likes"]+' likes</span>'
		if(data["me"]) {
			tales_html += '<br><a href=""><i class="fa fa-share-alt w3-medium w3-margin-top w3-text-grey"></i> Share</a>'
			tales_html+='<a href="create.html?tale='+data["tales"][i]["token"]+'"><i class="fa fa-pencil w3-medium w3-margin-left w3-margin-top w3-text-grey"></i> Edit</a>'
		} else {
			tales_html += '<br><a href=""><i class="fa fa-share-alt w3-medium w3-margin-top"></i> Share</a>'
		}
		
		tales_html += '</div>'
	}
	if (data["tales"].length==0){
		tales_html = '<div class="w3-center" style="margin-top:50px;"><span>You have not written any Tales</span><br><a href="create.html" class="w3-button next-button w3-hover-black w3-round-large w3-xlarge" style="padding: 0px 4px;margin-top: 10px;width:70%;"><b> Create A Tale</b></a></div>'
	}
	tales.innerHTML = tales_html
	return 
}

function Load_Page(){
	document.getElementById("loading").style.display="block";

	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	var u_name = urlParams.get('user')
	if(u_name==null){
		if ((window.localStorage.getItem("Snow_Globe_User_ID"))!=null) {
			u_name=((window.localStorage.getItem("Snow_Globe_User_ID")).split("|"))[0]
		} else {
			window.location.href = "entry.html"
		}
	}
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('POST', 'https://api-snowglobe.herokuapp.com/Users/');
	ourRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	ourRequest.send(JSON.stringify({ "u_name": u_name,'token':window.localStorage.getItem("Snow_Globe_User_ID")}));
	ourRequest.onload = function() {
		if (ourRequest.status >= 200 && ourRequest.status < 400) {
			var ret_data = JSON.parse(ourRequest.responseText);
			if (ret_data=="BadLogin"){
				window.location.href = "entry.html"
				return
			} else if (ret_data==false){
				error('Not Found','The User your are searching does not exist.')
			} else {
				LoadProfile(ret_data)
				document.getElementById("loading").style.display="none";
			}
		} else {
			error('Server Error','Our Team is working on fixing it.')
		}
	}
}