var search = document.getElementById("search-bar");
var disp = document.getElementById("disp");
var data = {};

function LoadResult(){
	var op = '';
	op+="<a class='typename'><b>Tales</b></a><br>"
	for (var i = 0; i < data['tales'].length; i++) {
		op+="<a class='item' href='index.html?tale="+data['tales'][i]['token']+"'>"+data['tales'][i]['name']+"<span class='data'>"+data['tales'][i]['data']+" Likes</span></a><br>"		
	}
	if(data['tales'].length == 0){
		op+="<a  class='data'><span>No Tales Found.</span></a><br>"
	}
	op+="<br><a class='typename'><b>Users</b></a><br>"
	for (var i = 0; i < data['users'].length; i++) {
		op+="<a class='item' href='profile.html?user="+data['users'][i]['name']+"'>"+data['users'][i]['name']+"<span class='data'>"+data['users'][i]['data']+" Followers</span></a><br>"		
	}
	if(data['users'].length == 0){
		op+="<a><span class='data'>No Users Found.</span></a><br>"
	}
	disp.innerHTML = op;
}

function Search(val){
	if (val==''){
		disp.innerHTML = ''	
	} else {
		var ourRequest = new XMLHttpRequest();
		ourRequest.open('POST', 'https://api-snowglobe.herokuapp.com/Search/');
		ourRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		ourRequest.send(JSON.stringify({ 'queryString': val,'token':window.localStorage.getItem("Snow_Globe_User_ID")}));
		ourRequest.onload = function() {
			if (ourRequest.status >= 200 && ourRequest.status < 400) {
				var ret_data = JSON.parse(ourRequest.responseText);
				if (ret_data=="BadLogin"){
					window.location.href = "entry.html"
					return
				} else {
					data = ret_data
					LoadResult()
				}
			} else {
				error('Server Error','Our Team is working on fixing it.');
			}
		}
	}	
}

if ((window.localStorage.getItem("Snow_Globe_User_ID"))==null) {
	window.location.href = "entry.html"
}
