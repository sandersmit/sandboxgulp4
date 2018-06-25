$(document).ready(function() {

    //refresh on resize
    $(window).resize(function(){location.reload();});



    if (jQuery) {
        // jQuery is loaded  
        console.log("ready!1!");
    }

    $('.box').click(function(event) {
        //box.toggleClass('closed');
        var mutation = event.currentTarget;
        console.log("MEANING:" + mutation);
    });
    $('.box').each(function(index) {
        var box = $(this);
        box.addClass('closed');
        $(this).find('.second')
        var quote = $(this).find('quote')[index];
        var boxWidth = $(this).width();
        var quoteElement = $(this).find('.first').find('div').children('quote');
        const boxImg = $(this).find('.first').find('img').parent('div');
        var newImgPost = (boxWidth / 2) - (boxImg.width() / 2);
        var magicbox = $(this).find('.second').find('.magicbox');
        var QuoteText = $(this).find('.first').find('div').children('quote').text();



        console.log(boxImg);
        boxImg.css('border', 'solid 1px red');
        //console.log("this is the element"+ $(index));
        //console.log(quote[index]); 
        //console.log("MEANING:" + $(this).n );
        var ImgWidth = boxImg.width()
        box.click(function(event) {
            box.toggleClass('closed');
            console.log("MEANING:" + boxImg.width());

            if (box.hasClass('closed')) {
                console.log('closed');
                boxImg.animate({
                    left: newImgPost + 'px'
                }, {
                    start: function() {
                        console.log("end!!");
                        quoteElement.css('opacity', '0')
                    }
                });


            } else {
                console.log('open');
                boxImg.animate({
                    left: 0 + '%'
                }, {
                    complete: function() {
                        console.log("end!!");
                        quoteElement.css('opacity', '1')
                    }
                });
            }



            magicbox.slideToggle("fast", function() {
                magicbox.css('background-color', 'yellow');
            });



        });

    });
});