jQuery(document).ready(function() {
	jQuery("###GETALLSELECTORPREFIX###a[id^='###ACTIONIDPREFIX###']").each(function () {
		var idPart = this.id.substr(6);
		if(jQuery.cookie('###TOGGLEIDPREFIX###'+idPart)=='1') {
			jQuery('####TOGGLEIDPREFIX###'+idPart).slideUp();
			jQuery('#'+this.id).text('###TOGGLEOPEN###');
		} else {
			jQuery('#'+this.id).text('###TOGGLECLOSE###');
		}
		jQuery('#'+this.id).click(function() {
			if(jQuery('#'+this.id).text()=='###TOGGLECLOSE###') {
				jQuery('####TOGGLEIDPREFIX###'+idPart).slideUp();
				jQuery.cookie('###TOGGLEIDPREFIX###'+idPart,'1',{ path:'/'});
				jQuery('#'+this.id).text('###TOGGLEOPEN###');
			} else {
				jQuery('####TOGGLEIDPREFIX###'+idPart).slideDown();
				jQuery.cookie('###TOGGLEIDPREFIX###'+idPart,'0',{ path:'/'});
				jQuery('#'+this.id).text('###TOGGLECLOSE###');
			}
			return false;
		});
	});
});