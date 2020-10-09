function error(head,message){
	var div = document.getElementById("error")
	div.style.display='block'
	div.innerHTML ='<h1 class="w3-margin w3-text-red">'+head+'</h1><h5 class="w3-margin" style="height: 50vh">'+message+'</h5><button class="w3-button w3-blue w3-text-black w3-padding w3-xlarge" onclick="Back()">Go Back</button>';
}
function Back(){
	window.history.go(-1);
	return false;
}
function Follow(){
	
}