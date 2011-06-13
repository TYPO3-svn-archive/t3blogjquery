jQuery(document).ready(function() {
	jQuery("#archive_ a[id^='toggle']").each(function () {
		var year = this.id.substr(6);
		if(jQuery.cookie('archive_'+year)=='1') {
			jQuery('#archive_'+year).slideUp();
			jQuery('#'+this.id).text('[+]');
		} else {
			jQuery('#'+this.id).text('[-]');
		}
		jQuery('#'+this.id).click(function() {
			if(jQuery('#'+this.id).text()=='[-]') {
				jQuery('#archive_'+year).slideUp();
				jQuery.cookie('archive_'+year,'1',{ path:'/'});
				jQuery('#'+this.id).text('[+]');
			} else {
				jQuery('#archive_'+year).slideDown();
				jQuery.cookie('archive_'+year,'0',{ path:'/'});
				jQuery('#'+this.id).text('[-]');
			}
			return false;
		});
	});
});