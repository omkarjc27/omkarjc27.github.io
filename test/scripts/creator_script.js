var data = {
	"tale_name":null,
	"hidden":true,
	"tale_writer" : "Writer Name",
	"tale" : [
		{
			"id":1,
			"type" : null,
			"media" : null,
			"next_text" : ['',''],
			"next_arr" : ['',''],
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
		space += '<div style="height: 5vh;padding: 10px;"><a class="side-buttons w3-left" onclick="DeletePage('+data['tale'][i]['id']+')" ><i class="fa fa-trash w3-xlarge w3-text-grey"></i><br>Delete Page</a><span class="w3-small w3-center page_no">Page No '+(i+1)+'</span><a class="side-buttons w3-right" onclick="AddPage('+data['tale'][i]['id']+')"><i class="fa fa-plus w3-xlarge w3-text-grey"></i><br>New Page</a></div>'

		space += '<div style="height:7vh;font-size: 2.7vh" class="w3-padding">'
		
		space += '<div style="height:36vh;font-size: 2.7vh" class="w3-padding page_media">'

		switch(data['tale'][i]['type']){
			case null:
				space += '<span class="fu-label" onclick="UpdateMedia('+data['tale'][i]['id']+',0)"><i class="fa fa-font w3-medium"></i><br>Text </span><label class="fu-label" for="'+data['tale'][i]['id']+'_0" ><i class="fa fa-image w3-medium"></i><br>Image</label><input id="'+data['tale'][i]['id']+'_0" class="fu-input" type="file" onchange="UpdateMedia('+data['tale'][i]['id']+',1)" accept="image/*"><label for="'+data['tale'][i]['id']+'_1" class="fu-label"><i class="fa fa-film w3-medium"></i><br>Video</label><input id="'+data['tale'][i]['id']+'_1" class="fu-input" type="file" onchange="UpdateMedia('+data['tale'][i]['id']+',2)" accept="video/*">'
				break;
			case 0:
				space += '<textarea placeholder="Page Text ..." class="content-text w3-medium" maxlength="144">'+data['tale'][i]['media']+'</textarea>';
				break;
			case 1:
				space += '<img src="'+data['tale'][i]['media']+'" style="max-height:100%;max-width:100%;" class="w3-animate-opacity">';
				break;
			case 2:
				space +='<video style="max-height:100%;max-width:100%;" class="w3-animate-opacity" id="vid" autoplay muted><source type="video/mp4" src="'+data['tale'][i]['media']+'"></source></video><script>document.getElementById("vid").play();</script>';
				break;
		}

		space += '</div><div style="height: 25vh"><div class="w3-margin-right w3-margin-left w3-text-grey w3-row w3-large next_buttons" style="text-align: left"></div></div></div>'
	}

	tale_space.innerHTML = space
}
function LoadNextBtns() {
	for (var i = 0; i < data['tale'].length; i++){
		var page_btns = document.getElementById(data['tale'][i]['id']).getElementsByClassName('next_buttons')[0]
		var page_no = document.getElementById(data['tale'][i]['id']).getElementsByClassName('page_no')[0]
		page_no.innerHTML = 'Page No '+(i+1);
		var add = ''
		add += '<button class="next-button w3-black w3-hover-black w3-padding"><input class="w3-left w3-medium w3-black w3-margin-bottom" style="border:none;background-color: black;border-bottom: 1px solid grey;width: 100%;" type="text" placeholder="Option message" value="'+data['tale'][i]['next_text'][0]+'">'
		add += '<select class="w3-text-grey w3-black w3-left w3-small" style="border:none;" onchange="UpdateNextB('+data['tale'][i]['id']+')">'
		if(data['tale'][i]['next_arr'][0]==''){
			add += '<option selected="selected">Go to Page No #</option>'
		}else {
			add += '<option>Go to Page No #</option>'
		}
		for (var j = 0; j < data['tale'].length; j++){
			if(data['tale'][j]['id']==data['tale'][i]['next_arr'][0]){
				add += '<option selected="selected" value="'+data['tale'][j]['id']+'">Go to Page No '+(j+1)+'</option>'
			} else {
				add += '<option value="'+data['tale'][j]['id']+'">Go to Page No '+(j+1)+'</option>'
			}
		}
		add += '</select></button>'
								

		add += '<button class="next-button w3-black w3-hover-black w3-padding"><input class="w3-left w3-medium w3-black w3-margin-bottom" style="border:none;background-color: black;border-bottom: 1px solid grey;width: 100%;" type="text" placeholder="Option message" value="'+data['tale'][i]['next_text'][1]+'">'
		add += '<select class="w3-text-grey w3-black w3-left w3-small" style="border:none;" onchange="UpdateNextB('+data['tale'][i]['id']+')">'
		if(data['tale'][i]['next_arr'][1]==''){
			add += '<option value="" selected="selected">Go to Page No #</option>'
		}else {
			add += '<option value="">Go to Page No #</option>'
		}
		for (var j = 0; j < data['tale'].length; j++){
			if(data['tale'][j]['id']==data['tale'][i]['next_arr'][1]){
				add += '<option selected="selected" value="'+data['tale'][j]['id']+'">Go to Page No '+(j+1)+'</option>'
			} else {
				add += '<option value="'+data['tale'][j]['id']+'">Go to Page No '+(j+1)+'</option>'
			}
		}
		add += '</select></button>'
		page_btns.innerHTML = add
	}
}
function EditTaleName(name){data["tale_name"]=name}

function DeletePage(id){
	var pre_page = document.getElementById(id)
	if(data['tale'].length==1){location.reload();}
	for (var i = 0; i < data['tale'].length; i++) {
		if(data['tale'][i]['id']==id){
			var index = i;
			break;
		}
	}
	pre_page.remove()
	if(index > -1){data['tale'].splice(index, 1);}
	for (var i = 0; i < data['tale'].length; i++) {
		if(data['tale'][i]['next_arr'][0]==id){
			data['tale'][i]['next_arr'][0] = ''
		}
		if(data['tale'][i]['next_arr'][1]==id){
			data['tale'][i]['next_arr'][1] = ''
		}
	}
	LoadNextBtns()
}
function AddPage(id){
	var pre_page = document.getElementById(id)
	for (var i = 0; i < data['tale'].length; i++) {
		if(data['tale'][i]['id']==id){
			var index = i;
			break;			
		}
	}
	counter += 1
	data['tale'].splice(index+1, 0,{"id":counter,"type" : null,"media" : null,"next_text" : ['',''],"next_arr" : ['',''],})
	var new_page = '';
	new_page += '<div id="'+counter+'" class="w3-black w3-round-large w3-margin" style="height:73vh;max-width: 400px;min-width: 270px;width:80vw;white-space: normal; display: inline-block;"><div style="height: 7vh;padding: 10px;"><a class="side-buttons w3-left" onclick="DeletePage('+counter+')" ><i class="fa fa-trash w3-xlarge w3-text-grey"></i><br>Delete Page</a><span class="w3-small w3-center page_no">Page No '+(index+2)+'</span><a class="side-buttons w3-right" onclick="AddPage('+counter+')"><i class="fa fa-plus w3-xlarge w3-text-grey"></i><br>New Page</a></div><div style="height:35vh;font-size: 2.7vh" class="w3-padding page_media">'

	new_page +='<span class="fu-label" onclick="UpdateMedia('+counter+',0)"><i class="fa fa-font w3-medium"></i><br>Text </span><label class="fu-label" for="'+counter+'_0" ><i class="fa fa-image w3-medium"></i><br>Image</label><input id="'+counter+'_0" class="fu-input" type="file" onchange="UpdateMedia('+counter+',1)" accept="image/*"><label for="'+counter+'_1" class="fu-label"><i class="fa fa-film w3-medium"></i><br>Video</label><input id="'+counter+'_1" class="fu-input" type="file" onchange="UpdateMedia('+counter+',2)" accept="video/*">'

	new_page += '</div><div style="height: 25vh"><div class="w3-margin-right w3-margin-left w3-text-grey w3-row w3-large next_buttons" style="text-align: left"></div></div></div>';
	pre_page.insertAdjacentHTML('afterend', new_page);
	LoadNextBtns()
}

function UpdateNextB(id){
	var page_btns = document.getElementById(id).getElementsByClassName('next-button')
	for (var i = 0; i < data['tale'].length; i++) {
		if(data['tale'][i]['id']==id){
			var index = i;
			break;
		}
	}
	data['tale'][i]['next_text'][0] = page_btns[0].getElementsByTagName('input')[0].value
	data['tale'][i]['next_arr'][0] = page_btns[0].getElementsByTagName('select')[0].value
	data['tale'][i]['next_text'][1] = page_btns[1].getElementsByTagName('input')[0].value
	data['tale'][i]['next_arr'][1] = page_btns[1].getElementsByTagName('select')[0].value
}
function UpdateMedia(id,type){
	var page_media = document.getElementById(id).getElementsByClassName('page_media')[0]
	for (var i = 0; i < data['tale'].length; i++) {
		if (data['tale'][i]['id']==id){
			data['tale'][i]['type']=type;
			break;
		}
	}
	switch(type){
		case 0:
			page_media.innerHTML = '<textarea placeholder="Page Text ..." class="content-text w3-medium" maxlength="144"></textarea>';
			
			break;
		case 1:
			var reader;
			input = document.getElementById(id).getElementsByTagName('input')[0]
			if (input.files && input.files[0]) {
				reader = new FileReader();
				reader.onload = function(e) {
					page_media.innerHTML = '<img src="'+e.target.result+'" style="max-height:100%;max-width:100%;" class="w3-animate-opacity">';
				}
				reader.readAsDataURL(input.files[0]);
			}
			break;
		case 2:
			var reader;
			input = document.getElementById(id).getElementsByTagName('input')[1]
			if (input.files && input.files[0]) {
				reader = new FileReader();
				reader.onload = function(e) {
					page_media.innerHTML = '<video style="max-height:100%;max-width:100%;" class="w3-animate-opacity" id="vid" autoplay muted><source type="video/mp4" src="'+e.target.result+'"></source></video><script>document.getElementById("vid").play();</script>';
				}
				reader.readAsDataURL(input.files[0]);
			}
			break;
	}
	
}
InitialRender()
LoadNextBtns()
window.scrollTo(0,0);