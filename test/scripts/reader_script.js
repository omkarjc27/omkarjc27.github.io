var data = {
	"tale_name":"Tale_Name",
	"tale_like" : false,
	"hidden":true,
	"tale_writer" : "Writer Name",
	"writer_following" : false,
	"tale" : [
		{
			"type" : 0,
			"media" : "Denny JA: Denny Dengan RT ini,Denny a anda ikut memenangkan Jokowi-JK. Pilih pemimpin yg bisa dipercaya (Jokowi) dan pengalaman (JK). #DJoJK.as yg bisa dipercaya (Jokowi) a dan pengalaman (JK). #DJoJK",
			"next_text" : ["goto 1","goto 2"],
			"next_arr" : [1,2],
		},
		{
			"type" : 1,
			"media" : "media/hor.jpg",
			"next_text" : ["goto 2","goto 3"],
			"next_arr" : [2,3],
		},
		{
			"type" : 1,
			"media" : "media/ver.jpg",
			"next_text" : ["goto 1","goto 3"],
			"next_arr" : [1,3],
		},
		{
			"type" : 2,
			"media" : "media/vid.mp4",
			"next_text" : null,
			"next_arr" : null,
		},
	]
};
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
			page_media.innerHTML = '<div class="w3-padding w3-animate-opacity">'+page["media"]+'</div>';
			break;
		case 1:
			page_media.innerHTML = '<img src="'+page["media"]+'" style="max-height:100%;max-width:100%;" class="w3-animate-opacity">';
			break;
		case 2:
			page_media.innerHTML = '<video style="max-height:100%;max-width:100%;" class="w3-animate-opacity" id="vid" autoplay muted><source type="video/mp4" src="'+page["media"]+'"></source></video><script>document.getElementById("vid").play();</script>';
			break;
	}
	if (page["next_text"]!=null)
	{
		for(i=0;i<page["next_text"].length;i++){
			next_str += '<button onclick="renderPage('+page['next_arr'][i] +')" class="w3-button w3-animate-opacity w3-padding next-button w3-hover-black" ><b>'+page["next_text"][i]+'</b></button>';
		}
		next_buttons.innerHTML = next_str;
	} else {
		next_str += '<button class="w3-button w3-animate-opacity w3-hover-black w3-black w3-padding" onclick="renderPage(0)" style="width: 100%;margin-top:4px;background-color: #6f2232"><b>Replay <i id="tale_like" class="fa fa-repeat"></i></b></button>'
		next_str += '<button class="w3-button w3-animate-opacity w3-hover-black w3-black" onclick="renderPage(0)" style="width: 100%;margin-top:4px;background-color: #262626"><b>Next</b><div id="nextBar"></div></button>'
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
renderTale();
renderPage(0);
window.scrollTo(0,0);
