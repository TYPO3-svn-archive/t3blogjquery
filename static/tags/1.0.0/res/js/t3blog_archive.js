$(document).ready(function() {
	$("a[id^='toggle']").each(function () {
		var year = this.id.substr(6);
    if($.cookie('archive_'+year)=='1') {
      $('#archive_'+year).slideUp('fast');
      $('#'+this.id).text('[+]');
    } else {
      $('#'+this.id).text('[-]');
    }
    $('#'+this.id).click(function() {
      if($('#'+this.id).text()=='[-]') {
        $('#archive_'+year).slideUp('fast');
        $.cookie('archive_'+year,'1',{ path:'/'});
        $('#'+this.id).text('[+]');
      } else {
        $('#archive_'+year).slideDown('fast');
        $.cookie('archive_'+year,'0',{ path:'/'});
        $('#'+this.id).text('[-]');
      }
      return false;
    });
  });
});