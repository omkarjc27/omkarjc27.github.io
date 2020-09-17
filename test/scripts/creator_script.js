var data = {
	"tale_name":null,
	"hidden":true,
	"tale" : [
		{
			"id":1,
			"type" : null,
			"media" : null,
			"next_text" : ['',''],
			"next_arr" : [null,null],
		},
	]
};
var tale_name = document.getElementById("tale_name");
var tale_space = document.getElementById("tale_space");
var counter = 0

function InitialRender() {
	tale_name.value = data['tale_name'];
	var space = '';
	for (var i = 0; i < data['tale'].length; i++){
		if(data['tale'][i]['id']>counter){
			counter = data['tale'][i]['id'];
		}
	}

	for (var i = 0; i < data['tale'].length; i++){
		/*Find page with ith index in page list*/
		space += '<div id="'+data['tale'][i]['id']+'" class="w3-black w3-round-large w3-margin" style="height:73vh;max-width: 400px;min-width: 270px;width:80vw;white-space: normal; display: inline-block;">';
		space += '<div style="height: 7vh;padding: 10px;"><a onclick="" ><i class="fa fa-trash w3-xlarge w3-left w3-text-grey"></i></a><span class="w3-small w3-center">Page No '+(i+1)+'</span><a onclick="AddPage('+data['tale'][i]['id']+')"><i class="fa fa-plus w3-xlarge w3-right w3-text-grey"></i></a></div>'
		space += '<div id="page_media" style="height:35vh;font-size: 2.7vh" class="w3-padding">'

		switch(data['tale'][i]['type']){
			case 0:
				space += '<div class="w3-padding w3-animate-opacity">'+data['tale'][i]['media']+'</div>';
				break;
			case 1:
				space += '<img src="'+data['tale'][i]['media']+'" style="max-height:100%;max-width:100%;" class="w3-animate-opacity">';
				break;
			case 2:
				space +=  '<video style="max-height:100%;max-width:100%;" class="w3-animate-opacity" id="vid" autoplay muted><source type="video/mp4" src="'+data['tale'][i]['media']+'"></source></video><script>document.getElementById("vid").play();</script>';
				break;
		}

		space += '</div><div style="height: 25vh"><div class="w3-margin-right w3-margin-left w3-text-grey w3-row w3-large next_buttons" style="text-align: left"></div></div></div>'
	}

	tale_space.innerHTML = space
}
function LoadNextBtns() {
	for (var i = 0; i < data['tale'].length; i++){
		var page_btns = document.getElementById(data['tale'][i]['id']).getElementsByClassName('next_buttons')[0]
		var add = ''
		add += '<button class="next-button w3-black w3-hover-black w3-padding"><input class="w3-left w3-medium w3-black w3-margin-bottom" style="border:none;background-color: black;border-bottom: 1px solid grey;width: 100%;" type="text" placeholder="Option message" value="'+data['tale'][i]['next_text'][0]+'">'
		add += '<select class="w3-text-grey w3-black w3-left w3-small" style="border:none;">'
		if(data['tale'][i]['next_arr'][0]==null){
			add += '<option disabled selected="selected">Go to Page No #</option>'
		}else {
			add += '<option disabled>Go to Page No #</option>'
		}
		for (var j = 0; j < data['tale'].length; j++){
			if(j==data['tale'][i]['next_arr'][0]){
				add += '<option selected="selected" value="'+data['tale'][j]['id']+'">Go to Page No '+j+'</option>'
			} else {
				add += '<option value="'+data['tale'][j]['id']+'">Go to Page No '+j+'</option>'
			}
		}
		add += '</select></button>'
								

		add += '<button class="next-button w3-black w3-hover-black w3-padding"><input class="w3-left w3-medium w3-black w3-margin-bottom" style="border:none;background-color: black;border-bottom: 1px solid grey;width: 100%;" type="text" placeholder="Option message" value="'+data['tale'][i]['next_text'][1]+'">'
		add += '<select class="w3-text-grey w3-black w3-left w3-small" style="border:none;">'
		if(data['tale'][i]['next_arr'][1]==null){
			add += '<option disabled selected="selected">Go to Page No #</option>'
		}else {
			add += '<option disabled>Go to Page No #</option>'
		}
		for (var j = 0; j < data['tale'].length; j++){
			if(j==data['tale'][i]['next_arr'][1]){
				add += '<option selected="selected" value="'+data['tale'][j]['id']+'">Go to Page No '+j+'</option>'
			} else {
				add += '<option value="'+data['tale'][j]['id']+'">Go to Page No '+j+'</option>'
			}
		}
		add += '</select></button>'
		page_btns.innerHTML = add
	}
}
function EditTaleName(name){data["tale_name"]=name}
function AddPage(id){
	var pre_page = document.getElementById(id)
	for (var i = 0; i < data['tale'].length; i++) {
		if(data['tale'][i]['id']==pre_page.id){
			var index = i;
		}
	}
	console.log(index)
	counter += 1
	data['tale'].splice(index+1, 0,{"id":counter,"type" : null,"media" : null,"next_text" : ['',''],"next_arr" : [null,null],})
	var new_page = '';
	new_page += '<div id="'+counter+'" class="w3-black w3-round-large w3-margin" style="height:73vh;max-width: 400px;min-width: 270px;width:80vw;white-space: normal; display: inline-block;"><div style="height: 7vh;padding: 10px;"><a onclick="" ><i class="fa fa-trash w3-xlarge w3-left w3-text-grey"></i></a><span class="w3-small w3-center">Page No '+(index+2)+'</span><a onclick="AddPage('+counter+')"><i class="fa fa-plus w3-xlarge w3-right w3-text-grey"></i></a></div><div id="page_media" style="height:35vh;font-size: 2.7vh" class="w3-padding"></div><div style="height: 25vh"><div class="w3-margin-right w3-margin-left w3-text-grey w3-row w3-large next_buttons" style="text-align: left"></div></div></div>';
	console.log(data);
	pre_page.insertAdjacentHTML('afterend', new_page);
	LoadNextBtns()
}


InitialRender()
LoadNextBtns()