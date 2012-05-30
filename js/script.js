/* Author:
	Mike Rosengarten. Get real.
*/

var sites = {
	'A Day In The Pit': 'http://www.adayinthepit.com',
	'Facebook': 'http://www.facebook.com',
	'Invicta': 'http://invictashark.com',
	'Woot': 'http://www.woot.com',
	'Bens': 'http://bensbargains.net',
	'XKCLAUGH': 'http://xkcd.com/'
};
var current_window_id = 'tile_x_window';

$(document).ready(function(){
	
	$(window).resize(function() {
		if(current_window_id != null) {
			$('#'+current_window_id).css('height',$(window).height() - $('header').outerHeight());
		}
	});

	$('.first_tile').css('height',$(window).height() - $('header').outerHeight());
	
	$.each(sites,function(index,item){
		var index_id = new String(index).replace(/[^a-zA-Z]/g,'');
		var html = '<div class="tile" id="tile_'+index_id+'_window"><iframe src="'+item+'"></iframe></div>';
		$('#tiles').append(html);
		
		$('#pages').append('<li id="tile_'+index_id+'">'+index+'</li>');
	});
	
	$('#pages li').hover(function(){
		// on hover
		var window_id = this.id+"_window";
		if(current_window_id === null) {
			current_window_id = window_id;
		} else {
			if(current_window_id == window_id) {
				return true;
			}
			$('#'+current_window_id).animate({width:'0px',height:'0',left:'-9999px'});
			current_window_id = window_id;
		}
		$('#'+current_window_id).animate({
			width:'100%',
			height:$(window).height() - $('header').outerHeight(),
			left:'0px'
		});
	});
});