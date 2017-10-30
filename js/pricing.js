$(document).ready(function() {
  $('#price-monthly').hide();
  $('#switcher').change(function() {
    if(this.checked) {
      $('#price-monthly').hide(300)
      $('#price-yearly').show(300);
    }
    else {
      $('#price-yearly').hide(300);
      $('#price-monthly').show(300);
    }
  });
});
