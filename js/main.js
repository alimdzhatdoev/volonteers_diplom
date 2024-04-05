$(document).ready(function() {
    $('.menuItem').click(function() {
        $('.menuItem').removeClass('activeMenuItem');
        $(this).addClass('activeMenuItem');
        
        let text = $(".menuItem_title", this).text();
        $(".header_title").html(text)
    });
});