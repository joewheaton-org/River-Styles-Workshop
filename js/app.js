// Custom JS Goes HERE
$(document).ready(function (){

	$(document).foundation();

	// Create a new menu
	var $hmenu = $('div.horizontal-nav>ul')
	$hmenu.each(function(elid, el){
		var elem = new Foundation.DropdownMenu($(el));
		$(el).addClass('menu dropdown');
		$(el).find('ul').addClass('menu vertical');	
	});

	var $vmenu = $('div.vertical-nav>ul')
	$vmenu.each(function(elid, el){
		var elem = new Foundation.DropdownMenu($(el));
		$(el).addClass('menu dropdown vertical')
		$(el).find('ul').addClass('menu vertical')
	});

});

