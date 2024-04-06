$(document).ready(function() {
    $('.menuItem').click(function() {
        $('.menuItem').removeClass('activeMenuItem');
        $(this).addClass('activeMenuItem');
        
        let text = $(".menuItem_title", this).text();
        $(".header_title").html(text)
    });

    $('.news_item__bottom___title').each(function(){
        var text = $(this).text();
        let count = 100;

        if(text.length > count){
            text = text.substring(0, count) + '...';
            $(this).text(text);
        }
    });
});