$(document).ready( function(){
	
	generateButtons(boxArray,'searchButton','#buttonArea');
})
var boxArray= ['Food','Cars','Art'];

function generateButtons(boxArray,addSomeClass,placeToAdd){

$(placeToAdd).empty();
for (var i=0; i<boxArray.length; i++){
	
	var a = $('<button>');
	a.addClass(addSomeClass);
	a.attr('data-type',boxArray[i]);
	a.text(boxArray[i]);
	$(placeToAdd).append(a);
}

}
$(document).on('click','.searchButton',function(){
	$('#searches').empty();
	var type= $(this).data();

	var queryURL = 'https://api.giphy.com/v1/gifs/search?q='+type+'&api_key=8aXAx6k4WjWlOAP38X525fn2wTYO5xb1&limit=5';
	$.ajax({url:queryURL,method:'GET'})
		.done(function(response){
			for(var i=0; i< response.data.length;i++){
				var search = $('<div>');
				var ratings = response.data[i].rating;
				var h1 = $('<p>').text('rating:'+ratings);
				var animated = response.data[i].images.fixed_height.url;
				var still = response.data[i].images.fixed_height_still.url;
				var image = $('<img>');
				image.attr('src',still);
				image.attr('data-still',still);
				image.attr('data-animated',animated);
				image.attr('data-state','still');
				image.addClass('searchImage');
				search.append(h1);
				search.append(image);
				$('#searches').append(search);
				console.log(search);
			}

		})

	
	})





//https://api.giphy.com/v1/






