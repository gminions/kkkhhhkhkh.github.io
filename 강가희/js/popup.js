$(function(){
    function popupClose() {
        $(this).parent().hide();
    }
    $('.popup button').on('click', popupClose);
})