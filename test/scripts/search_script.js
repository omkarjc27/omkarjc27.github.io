var search = document.getElementById("search-bar");
var disp = document.getElementById("disp");
var data = {
	"users" : [
		{
			"name" : "pappu",
			"data" : 25,
		},
		{
			"name" : "tappu",
			"data" : 25,
		},
		{
			"name" : "gappu",
			"data" : 25,
		},
		{
			"name" : "happu",
			"data" : 25,
		},
	],
	"tales" : [
		{
			"name" : "pappu",
			"data" : 25,
		},
		{
			"name" : "tappu",
			"data" : 25,
		},
		{
			"name" : "gappu",
			"data" : 25,
		},
		{
			"name" : "happu",
			"data" : 25,
		},
	],
};

function Search(val){
	if (val==''){
		disp.innerHTML = ''	
	} else {
		var op = '';
		op+="<a class='typename'><b>Tales</b></a><br>"
		for (var i = 0; i < data['tales'].length; i++) {
			op+="<a class='item'>"+data['tales'][i]['name']+"<span class='data'>"+data['tales'][i]['data']+" Likes</span></a><br>"		
		}
		if(data['tales'].length == 0){
			op+="<a class='item'><span>No Tales Found.</span></a><br>"
		}
		op+="<br><a class='typename'><b>Users</b></a><br>"
		for (var i = 0; i < data['users'].length; i++) {
			op+="<a class='item'>"+data['users'][i]['name']+"<span class='data'>"+data['tales'][i]['data']+" Followers</span></a><br>"		
		}
		if(data['users'].length == 0){
			op+="<a><span class='data'>No Users Found.</span></a><br>"
		}
		disp.innerHTML = op;
	}
	
}
