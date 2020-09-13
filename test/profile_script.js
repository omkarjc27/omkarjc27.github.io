var data = {
	"me":false,
	"following":false,
	"username" : "false",
	"n_tales" : "100K",
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


	var tales_html = ''
	for (var i = 0; i < data["tales"].length; i++) {	
		tales_html += '<div class="w3-card w3-padding w3-round-xlarge w3-black w3-margin"><span class="w3-xlarge">'+data["tales"][i]["name"]+'</span><br><span class="w3-small w3-text-grey" style="border:none;padding: 0px">'+data["tales"][i]["views"]+' views</span><span style="font-size: 15px;margin-left: 2px;margin-right: 2px"><b> &#183; </b></span><span class="w3-small w3-text-grey" style="padding: 0px">'+data["tales"][i]["likes"]+' likes</span>'
		if(data["me"]) {
			tales_html += '<br><a href=""><i class="fa fa-share-alt w3-medium w3-margin-top"></i> Share</a>'
			tales_html+='<a href=""><i class="fa fa-pencil w3-medium w3-margin-left w3-margin-top"></i> Edit</a>'
			if(data["tales"][i]["public"]){				
				tales_html+='<a href=""><i class="fa fa-eye-slash w3-medium w3-margin-left w3-margin-top"></i> Make Private</a>'
			} else {
				tales_html+='<a href=""><i class="fa fa-eye w3-medium w3-margin-left w3-margin-top"></i> Make Public</a>'
			}
		} else {
			tales_html += '<br><a href=""><i class="fa fa-share-alt w3-medium w3-margin-top"></i> Share</a>'
		}
		
		tales_html += '</div>'
	}
	tales.innerHTML = tales_html
}
LoadProfile()