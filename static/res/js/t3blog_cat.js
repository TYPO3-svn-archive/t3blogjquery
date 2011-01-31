$(document).ready(function() {
	// helper function to toggle archive and categrory link
	function toggleLink(ul, link) {
		link.text("[+]").toggle(function() {
			link.text("[-]")
			ul.attr("aria-hidden", false).attr("aria-expanded", true).slideDown();
			return false;
		}, function() {
		link.text("[+]")
		ul.attr("aria-hidden", true).attr("aria-expanded", false).slideUp();
		return false;
		});
	}
	// category toggle
	var uls = $(".tx-t3blog-pi2 ul#togglecat0 li ul");
	uls.each(function(index){
		var ul = $(this);
		ul.attr("aria-hidden", true).attr("aria-expanded", false).hide();
		var link = ul.prevAll("a.iconbeforetext");
		toggleLink(ul, link);
	});
});