$(document).bind("mobileinit", function () {
    $.mobile.pushStateEnabled = true;
});
var headerStatus;
function showHeader() {
	if(headerStatus) {
		return;
	}
	$('#header').showHeader();
	$.mobile.activePage.animate({
		marginTop: "80px",
	}, 300, function () {
		headerStatus = true
	});
};
function hideHeader() {
	if(!headerStatus) {
		return;
	}
	$.mobile.activePage.animate({
		marginTop: "0px",
	}, 300, function () {
		headerStatus = false
		$('#header').hideHeader();
	});
};
function toggleHeader() {
	if (!headerStatus) {
		showHeader();
	} else {
		hideHeader();
	}
	return false;
};

// showHeader/hideHeader the header
$("a.showheader").click(toggleHeader);
$('#header, .pages').live("swipeleft", hideHeader);
$('.pages').live("swiperight", showHeader);

$('div[data-role="page"]').live('pagebeforeshow', function (event, ui) {
	headerStatus = false;
	$(".pages").css("margin-left", "0");
});

// header behaviour
$("#header li a").click(function () {
	var p = $(this).parent();
	p.siblings().removeClass('active');
	p.addClass('active');
});

