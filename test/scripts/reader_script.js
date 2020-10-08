var data = null;
var tale_name = document.getElementById("tale_name");
var tale_like = document.getElementById("tale_like");
var tale_writer = document.getElementById("tale_writer");
var writer_following = document.getElementById("writer_following");
var tale_like = document.getElementById("tale_like");
var tale_save = document.getElementById("tale_save");
var page_media = document.getElementById("page_media");
var next_buttons = document.getElementById("next_buttons");

function renderTale() {
	tale_name.innerHTML="<b>"+data["tale_name"]+"</b>";
	tale_writer.innerHTML = "<b>"+data["tale_writer"]+"</b>";
	tale_writer.href = "profile.html?user="+data["tale_writer"];
	
	if (data["tale_like"] == true){
		tale_like.classList.remove("fa","fa-heart-o","w3-text-white");
		tale_like.classList.add("fa","fa-heart","w3-text-red");
	} else {
		tale_like.classList.remove("fa","fa-heart","w3-text-red");	
		tale_like.classList.add("fa","fa-heart-o","w3-text-white");
	}
	if (data["writer_following"] == true){
		writer_following.innerHTML = "<b>Following</b>";
	} else {
		writer_following.innerHTML = "<b>Follow +</b>";
	}
}

function renderPage(page_no) {
	var page = data["tale"][page_no]; 
	var next_str = ''
	switch(page["type"]){
		case 0:
			page_media.innerHTML = '<div class="w3-padding" style="font-size:3.5vh;">'+page["media"]+'</div>';
			break;
		case 1:
			page_media.innerHTML = '<img src="https://ik.imagekit.io/snowglobe/'+data["tale_writer"]+'/'+page["media"]+'" style="max-height:100%;max-width:100%;" class="w3-animate-opacity">';
			break;
		case 2:
			page_media.innerHTML = '<video style="max-height:100%;max-width:100%;" class="w3-animate-opacity" id="vid" autoplay muted><source type="video/mp4" src="https://ik.imagekit.io/snowglobe/'+data["tale_writer"]+'/'+page["media"]+'"></source></video><script>document.getElementById("vid").play();</script>';
			break;
	}
	if (page["next_text"]!=null)
	{
		for(i=0;i<page["next_text"].length;i++){
			next_str += '<button onclick="renderPage('+(page['next_arr'][i]-1) +')" class="w3-button w3-padding next-button w3-hover-black" ><b>'+page["next_text"][i]+'</b></button>';
		}
		next_buttons.innerHTML = next_str;
	} else {
		next_str += '<button class="w3-button w3-hover-black w3-black w3-padding" onclick="renderPage(0)" style="width: 100%;margin-top:4px;background-color: #6f2232"><b>Replay <i id="tale_like" class="fa fa-repeat"></i></b></button>'
		next_str += '<button class="w3-button w3-hover-black w3-black" onclick="renderPage(0)" style="width: 100%;margin-top:4px;background-color: #262626"><b>Next</b><div id="nextBar"></div></button>'
		next_buttons.innerHTML = next_str;
		NextTimer()

	}
}

function NextTimer(){
	var i = 0;
	if (i == 0) {
		i = 1;
		var elem = document.getElementById("nextBar");
		var width = 1;
		var id = setInterval(frame, 50);
		function frame() {
			if (width >= 100) {
				clearInterval(id);
				i = 0;
				renderTale()
				renderPage(0)
				
			} else {
				width+=0.5;
				elem.style.width = width + "%";
			}
		}
	}
}
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('a')
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/tales/'+urlParams.get('tale'));
ourRequest.onload = function() {
	if (ourRequest.status >= 200 && ourRequest.status < 400) {
		var data = JSON.parse(ourRequest.responseText);
	} else {
		console.log("We connected to the server, but it returned an error.");
	}
}

function Load_Page(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	tale = urlParams.get('tale')
	if(tale!=null) {	
		var ourRequest = new XMLHttpRequest();
		ourRequest.open('POST', 'https://api-snowglobe.herokuapp.com/Tales/');
		ourRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		ourRequest.send(JSON.stringify({'tale_token':tale,'token':window.localStorage.getItem("Snow_Globe_User_ID")}));
		ourRequest.onload = function() {
			if (ourRequest.status >= 200 && ourRequest.status < 400) {
				var ret_data = JSON.parse(ourRequest.responseText);
				if(ret_data=="Private" || ret_data==false){
					document.getElementById("error").innerHTML = 'Tale Not Found'
				} else {
					data = ret_data
					data['tale']=JSON.parse(data['tale'])
					renderTale();
					renderPage(0);
				}
			} else {
				console.log("We connected to the server, but it returned an error.");
				return
			}
		}
	}else{
		window.location.href = "search.html"
		return	
	}
}