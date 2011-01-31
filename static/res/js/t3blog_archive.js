jQuery(document).ready(function() {
	jQuery("a[id^='toggle']").each(function () {
		var year = this.id.substr(6);
    if(jQuery.cookie('archive_'+year)=='1') {
      jQuery('#archive_'+year).slideUp('fast');
      jQuery('#'+this.id).text('[+]');
    } else {
      jQuery('#'+this.id).text('[-]');
    }
    jQuery('#'+this.id).click(function() {
      if(jQuery('#'+this.id).text()=='[-]') {
        jQuery('#archive_'+year).slideUp('fast');
        jQuery.cookie('archive_'+year,'1',{ path:'/'});
        jQuery('#'+this.id).text('[+]');
      } else {
        jQuery('#archive_'+year).slideDown('fast');
        jQuery.cookie('archive_'+year,'0',{ path:'/'});
        jQuery('#'+this.id).text('[-]');
      }
      return false;
    });
  });
});