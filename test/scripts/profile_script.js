var data = {
	"me":true,
	"following":true,
	"username" : "false",
	"followers" : "237M",
	"tales" : [
		{
			"name":"tale_name1",
			"views" : "34",
			"likes" : "12",
			"public" : true,
		},
		{
			"name":"tale_name2",
			"views" : "13",
			"likes" : "0",
			"public" : true,
		},
		{
			"name":"tale_name3",
			"views" : "233M",
			"likes" : "100k",
			"public" : false,
		},
		{
			"name":"tale_name4",
			"views" : "89",
			"likes" : "14",
			"public" : true,
		},
		{
			"name":"tale_name5",
			"views" : "78",
			"likes" : "22",
			"public" : false,
		},
		{
			"name":"tale_name6",
			"views" : "18",
			"likes" : "14",
			"public" : true,
		},
	]
};
var username = document.getElementById("username");
var n_tales = document.getElementById("n_tales");
var followers = document.getElementById("followers");
var f_button = document.getElementById("f_button");
var tales = document.getElementById("tales");

function LoadProfile() {
	username.innerHTML = data["username"]
	n_tales.innerHTML = data["n_tales"]
	followers.innerHTML = data["followers"]
	if(data["following"]) {
		f_button.innerHTML = "Following"
	} else {
		f_button.innerHTML = "Follow +"
	}
	n_tales.innerHTML = data["tales"].length
	var tales_html = ''
	for (var i = 0; i < data["tales"].length; i++) {
		if(data['tales'][i]['public']==false && data['me']){
			tales_html += '<div class="w3-card w3-padding w3-round-large w3-black w3-margin"><span class="w3-large">'+data["tales"][i]["name"]+'<span class="w3-text-grey w3-medium"> (hidden)</span>'
		} else {
			tales_html += '<div class="w3-card w3-padding w3-round-large w3-black w3-margin"><span class="w3-large">'+data["tales"][i]["name"]
		}
		tales_html += '</span><br><span class="w3-small w3-text-grey" style="border:none;padding: 0px">'+data["tales"][i]["views"]+' views</span><span style="font-size: 15px;margin-left: 2px;margin-right: 2px;" class="w3-text-grey"><b> &#183; </b></span><span class="w3-small w3-text-grey" style="padding: 0px">'+data["tales"][i]["likes"]+' likes</span>'
		if(data["me"]) {
			tales_html += '<br><a href=""><i class="fa fa-share-alt w3-medium w3-margin-top w3-text-grey"></i> Share</a>'
			tales_html+='<a href=""><i class="fa fa-pencil w3-medium w3-margin-left w3-margin-top w3-text-grey"></i> Edit</a>'
			if(data["tales"][i]["public"]){
				tales_html+='<a href=""><i class="fa fa-eye-slash w3-medium w3-margin-left w3-margin-top w3-text-grey"></i> Hide</a>'
			} else {
				tales_html+='<a href=""><i class="fa fa-eye w3-medium w3-margin-left w3-margin-top w3-text-grey"></i> Unhide</a>'
			}
		} else {
			tales_html += '<br><a href=""><i class="fa fa-share-alt w3-medium w3-margin-top"></i> Share</a>'
		}
		
		tales_html += '</div>'
	}
	if (data["tales"].length==0){
		tales_html = '<div class="w3-center"><span>You have not written any Tales</span><br><a href="create.html" class="w3-button next-button w3-hover-black w3-round-large w3-xlarge" style="padding: 0px 4px;margin-top: 10px;width:70%;"><b> Create A Tale</b></a></div>'
	}
	tales.innerHTML = tales_html
}
LoadProfile()
window.scrollTo(0,0);