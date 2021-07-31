$(function(){
    $('.slider').slick({
        nextArrow: '<button class ="slick-arrow slick-next"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35 68.9062C53.7305 68.9062 68.9062 53.7305 68.9062 35C68.9062 16.2695 53.7305 1.09375 35 1.09375C16.2695 1.09375 1.09375 16.2695 1.09375 35C1.09375 53.7305 16.2695 68.9062 35 68.9062ZM19.1406 28.9844H35V19.291C35 17.8281 36.7773 17.0898 37.8027 18.1289L53.4297 33.8379C54.0723 34.4805 54.0723 35.5059 53.4297 36.1484L37.8027 51.8711C36.7637 52.9102 35 52.1719 35 50.709V41.0156H19.1406C18.2383 41.0156 17.5 40.2773 17.5 39.375V30.625C17.5 29.7227 18.2383 28.9844 19.1406 28.9844Z" fill="black"/></svg></button>',
        prevArrow: '<button class ="slick-arrow slick-prev"><svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35 1.09375C16.2695 1.09375 1.09375 16.2695 1.09375 35C1.09375 53.7305 16.2695 68.9062 35 68.9062C53.7305 68.9062 68.9062 53.7305 68.9062 35C68.9062 16.2695 53.7305 1.09375 35 1.09375ZM50.8594 41.0156H35V50.709C35 52.1719 33.2227 52.9102 32.1973 51.8711L16.5703 36.1621C15.9277 35.5195 15.9277 34.4941 16.5703 33.8516L32.1973 18.1289C33.2363 17.0898 35 17.8281 35 19.291V28.9844H50.8594C51.7617 28.9844 52.5 29.7227 52.5 30.625V39.375C52.5 40.2773 51.7617 41.0156 50.8594 41.0156Z" fill="black"/></svg></button>',
        speed:1000
    });



});
$(function(){                                   // Почему не работает без window 'load'??
    $('.slick-next svg').hover(                    
        function() {
            $('.slick-next path').css('fill','rgb(103,36,154,0.5)');
            }, function() {
            $( 'path').css('fill','black');
            }
    )
    $('.slick-prev svg').hover(                    
        function() {
            $('.slick-prev path').css('fill','rgb(103,36,154,0.5)');
            }, function() {
            $( 'path').css('fill','black');
            }
    )
});
/* $(function(){
    $('.slick-arrow svg').mouseover(function(){
        $('path').css('fill','#16bfb5')
    })
    $('.slick-arrow svg').mouseout(function(){
        $('path').css('fill','black')
    })
}) */

