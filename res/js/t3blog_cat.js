jQuery(document).ready(function() {
	jQuery("a[id^='imgtogglecat']").each(function () {
		var catNo = this.id.substr(12);
    if(jQuery.cookie('togglecat'+catNo)=='1') {
      jQuery('#togglecat'+catNo).slideUp();
      jQuery('#'+this.id).text('[+]');
    } else {
      jQuery('#'+this.id).text('[-]');
    }
    jQuery('#'+this.id).click(function() {
      if(jQuery('#'+this.id).text()=='[-]') {
        jQuery('#togglecat'+catNo).slideUp();
        jQuery.cookie('togglecat'+catNo,'1',{ path:'/'});
        jQuery('#'+this.id).text('[+]');
      } else {
        jQuery('#togglecat'+catNo).slideDown();
        jQuery.cookie('togglecat'+catNo,'0',{ path:'/'});
        jQuery('#'+this.id).text('[-]');
      }
      return false;
    });
  });
});