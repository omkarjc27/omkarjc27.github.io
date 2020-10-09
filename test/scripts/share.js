function Share(token){
	if (navigator.share) {
		navigator.share({title: 'Share this tale with everyone',url: 'https://codepen.io/ayoisaiah/index.html?tale='+token});
	} else {
		document.body.innerHTML += '<center style="position:fixed;top: 0px;height: 100%;width: 100%;background-color:rgba(0,0,0,0.5);" id="popup"><div style="height: 30vh; margin:30px;margin-top:25vh;max-width: 500px;" class="w3-round-large w3-padding back"><button class="w3-right w3-black w3-border" onclick="popup_close();"><b>X</b></button><b class="w3-large w3-left">Copy and Share Link</b><br><br><input id="share_url" class="w3-border w3-input w3-black" style="overflow: scroll;" value="https://codepen.io/ayoisaiah/pen/YbNazJ+'+token+'"><br><a class="w3-button w3-blue w3-hover-black w3-round-large" onclick="Copy()">Copy Link</a></div></center>';
		return
	}
}
function popup_close(){
	var element = document.getElementById('popup');
	element.remove(element)
}
function Copy(){
	var copyText = document.getElementById("share_url");
	copyText.select();
	copyText.setSelectionRange(0, 99999);
	document.execCommand("copy");
}