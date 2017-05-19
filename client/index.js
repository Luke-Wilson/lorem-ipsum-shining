angular.module('heresJohnny', [
  'heresJohnny.hjController',
  'heresJohnny.hjFactory'
]);

document.getElementById('copyBtn').addEventListener('click', () => {
  copyToClipboard(document.getElementById('result'));
})

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}
