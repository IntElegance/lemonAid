$(document).bind("mobileinit", function () {
    $.mobile.pushStateEnabled = true;
});
var menuStatus;
function show() {
	if(menuStatus) {
		return;
	}
	$('#menu').show();
	$('#logo').show();
	$('#content').css( "width", "71%" );
	$('#content').css( "max-width", "71%" );
	$.mobile.activePage.animate({
		marginLeft: "165px",
	}, 300, function () {
		menuStatus = true
	});
};
function hide() {
	if(!menuStatus) {
		return;
	}
	$.mobile.activePage.animate({
		marginLeft: "0px",
	}, 300, function () {
		menuStatus = false
		$('#menu').hide();
		$('#logo').hide();
		$('#content').css( "width", "95%" );
		$('#content').css( "max-width", "95%" );
	});
};
function toggle() {
	if (!menuStatus) {
		show();
	} else {
		hide();
	}
	return false;
};

// Show/hide the menu
$("a.showMenu").click(toggle);
$('#menu, .pages').live("swipeleft", hide);
$('.pages').live("swiperight", show);

$('div[data-role="page"]').live('pagebeforeshow', function (event, ui) {
	menuStatus = false;
	$(".pages").css("margin-left", "0");
});

// Menu behaviour
$("#menu li a").click(function () {
	var p = $(this).parent();
	p.siblings().removeClass('active');
	p.addClass('active');
});

