const fade = document.querySelector('.copiedtext');

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val("github.com/gamedevCloudy/linker-er").select();
  document.execCommand("copy");
  $temp.remove();

  // changed below
  $(".copiedtext").addClass("fade")
