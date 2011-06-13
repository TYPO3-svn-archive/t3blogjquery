jQuery(document).ready(function() {
	jQuery("a[id^='togglecat']").each(function () {
		var catId = this.id.substr(6);
		if(jQuery.cookie(catId)=='1') {
			jQuery('#'+catId).slideUp();
			jQuery('#'+this.id).text('[+]');
		} else {
			jQuery('#'+this.id).text('[-]');
		}
		jQuery('#'+this.id).click(function() {
			if(jQuery('#'+this.id).text()=='[-]') {
				jQuery('#'+catId).slideUp();
				jQuery.cookie(catId,'1',{ path:'/'});
				jQuery('#'+this.id).text('[+]');
			} else {
				jQuery('#'+catId).slideDown();
				jQuery.cookie(catId,'0',{ path:'/'});
				jQuery('#'+this.id).text('[-]');
			}
			return false;
		});
	});
});