function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val("github.com/gamedevCloudy").select();
  document.execCommand("copy");
  $temp.remove();
}