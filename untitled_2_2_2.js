$(document).ready(function() {

    if (jQuery) {
        // jQuery is loaded  
        console.log("ready!!");
        // let myrandomnumber = Math.floor(Math.random() * 9);
        // console.log("randomnumber"+ myrandomnumber)
        //$('.tertiary .item:nth-child('+myrandomnumber+')').css('background-color', 'red');

        // var slide = $('.slide');
        // var slideAantal = slide.length;
        // console.log(slideAantal);
        // console.log("slidebreedte" + slide.width());
        // var slideBreedte = slide.width();
        // var slideHuidig = 2;
        // console.log("slideHuidig" + slideHuidig);

        // $(window).resize(function() {
        //     console.log("resize!");
        //     slideBreedte = slide.width();
        //     console.log("resize!");
        //     console.log("nieuwe slide slideBreedte" + slideBreedte);
        //     startpositie(slideBreedte);


        // });

        // function startpositie(slidebreedte) {
        //     console.log("startpositie");
        //     $('.slider .sliderwrap').animate({
        //         'left': (-1 - slideBreedte)
        //     });
        // }
        // startpositie();

        // $('nav a').click(function() {
        //     console.log("click");
        //     event.preventDefault();
        //     // Als op de knop 'volgende' is gedrukt...
        //     if ($(this).attr('class') == 'volgende') {
        //         // ...naar de volgende slide gaan...
        //         slideHuidig = slideHuidig + 1;
        //         console.log("slideHuidig" + slideHuidig);
                 
        //     }
            
        //     else {
        //         // ...naar de vorige slide gaan
        //         slideHuidig = slideHuidig - 1;
        //         console.log("slideHuidig" + slideHuidig);

               
        //     }

        //     // Zorg er weer voor dat de vorige/volgende knoppen goed worden weergegeven
        //     navigatie(slideHuidig);
        //      // Verschuif #slides door middel van de linker margin
        //         $('.slider .sliderwrap').animate({
        //             'left': (slideHuidig * slideBreedte)
        //         });

            
        // });

        // // Functie die ervoor zorgt dat de vorige/volgende knoppen op de juiste momenten worden weergegeven
        // function navigatie(slideHuidig) {
        //     // Bij de laatste slide de 'volgende' knop weglaten..
        //     if (slideHuidig == -2) {
        //         $('.volgende').hide()
        //     } //...of laten zien wanneer het niet de laatste slide is
        //     else {
        //         $('.volgende').show()
        //     }

        //     // Bij de eerste slide de 'vorige' knop weglaten..
        //     if (slideHuidig == 0) {
        //         $('.vorige').hide()
        //     } //...of laten zien wanneer het niet de eerste slide is
        //     else {
        //         $('.vorige').show()
        //     }
        // }

////////////////////




$( ".slider2" ).each(function( index ) {
    deze = $(this);
  console.log( index + ": " + $( this ).attr('class') );
    var slide = $( this ).find('.slide2');
    console.log( index + ": " + slide.attr('class'));
    var slideAantal = slide.length;
        console.log(slideAantal);
        console.log("slidebreedte" + slide.width());
        var slideBreedte = slide.width();
        var slideHuidig = 1;
        console.log("slideHuidig" + slideHuidig);


        $(window).resize(function() {
            console.log("resize!");
            slideBreedte = slide.width();
            console.log("resize!");
            console.log("nieuwe slide slideBreedte" + slideBreedte);
            startpositie(slideBreedte);


        });

        function startpositie(slidebreedte) {
            console.log("startpositie");
            $('.slider2 .sliderwrap').animate({
                'left': (slideHuidig - slideBreedte)
            });
        }
        startpositie();

        $( this ).find('.button').click(function() {
            console.log("click");
            event.preventDefault();
            console.log("this is: " + $(this).attr('class'));
            // Als op de knop 'volgende' is gedrukt...
            if ($(this).attr('class') === 'button volgende2') {
                
                slideHuidig = slideHuidig +  1;
                console.log("slideHuidig" + slideHuidig );
                // ...naar de volgende slide gaan...
                
            }
            
            else {
                
               
                slideHuidig = slideHuidig - 1;
                // ...naar de vorige slide gaan
                console.log("slideHuidig: " + slideHuidig);
                
               
            }
            
             $('.slider2 .sliderwrap').animate({
                    'left': (-slideHuidig * slideBreedte)
                });
              navigatie(slideHuidig );
            
        });


               // Zorg er weer voor dat de vorige/volgende knoppen goed worden weergegeven
           
             // Verschuif #slides door middel van de linker margin
                
             // Functie die ervoor zorgt dat de vorige/volgende knoppen op de juiste momenten worden weergegeven
        function navigatie(slideHuidig ) {
            // Bij de laatste slide de 'volgende' knop weglaten..
            if (slideHuidig == 2) {
                console.log("HIDE Volgende bij dit nummer");
               $( this ).find('.button').addClass('class_name_test');
            } //...of laten zien wanneer het niet de laatste slide is
            else {
               $( this ).find('.volgende2').show()
            }

            // Bij de eerste slide de 'vorige' knop weglaten..
            if (slideHuidig == 0) {
                console.log("HIDE vorige bij nummer bij dit nummer");
               $( this ).find('.vorige2').hide()
            } //...of laten zien wanneer het niet de eerste slide is
            else {
                $( this ).find('.vorige2').show()
            }
        }
});
        

        

        

        










        var aantal;

        let numberArray = [];


        // for (var i = 0; i <= 22; i++) {
        //     if (numberArray.length !== 22) {
        //         console.log("tellen");
        //     let myrandomnumber = Math.floor(Math.random() * 15);
        //     console.log("new randomnumber: " + myrandomnumber);
        //     if ($.inArray(myrandomnumber, numberArray) === -1) {
        //         console.log("in array positie: " + $.inArray(myrandomnumber, numberArray))
        //         console.log("mist, dus aanvullen");
        //         numberArray.push(myrandomnumber);
        //     } else {
        //         console.log("zit al in array op positie: " + $.inArray(myrandomnumber, numberArray))
        //         console.log("skippen");


        //         console.log("niew aantal: "+ aantal);
        //         // numberArray.push(myrandomnumber);
        //     }
        //     console.log("total array na check: " + numberArray);

        //     } else {

        //     }

        // }


        //  $('.item').each(function(index) {

        //  //for (var i = 0; i <= 22; i++) {
        //      if (numberArray.length !== 22) {
        //          console.log("array vullen");
        //      let myrandomnumber = Math.floor(Math.random() * 15);
        //      console.log("new randomnumber: " + myrandomnumber);
        //      if ($.inArray(myrandomnumber, numberArray) === -1) {
        //          console.log("in array positie: " + $.inArray(myrandomnumber, numberArray))
        //          console.log("mist, dus aanvullen");
        //          numberArray.push(myrandomnumber);
        //      } else {
        //          console.log("zit al in array op positie: " + $.inArray(myrandomnumber, numberArray))
        //          console.log("skippen");
        //          console.log("niew aantal: "+ aantal);
        //          // numberArray.push(myrandomnumber);
        //      }
        //      console.log("total array na check: " + numberArray);
        //      } else {
        //          console.log("array vol");
        //      }

        // // }

        //  });


    }


    let numberArray = [];
    let numberArray2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

    function RunrandomNumber() {

        let myrandomnumber = Math.floor(Math.random() * 22);
        runThis(myrandomnumber);
        //return myrandomnumber;

    }

    //RunrandomNumber();




    function runThis(myrandomnumber) {

        // console.log("myrandomnumber geeft op start: " + myrandomnumber);
        numberArray2.sort(function() { return 0.5 - Math.random() });

        // while (numberArray2.length < 11) {
        //     //let myrandomnumber = Math.floor(Math.random() * 22);
        //    // console.log("randomNumber() geeft in while loop cycle: " + myrandomnumber);
        //     console.log("total array in while loop cycle: " + numberArray2);
        //     console.log("lengte array in while loop cycle: " + numberArray2.length);
        //     numberArray.push(myrandomnumber);
        //     //numberArray.sort();


        //     // if ($.inArray(myrandomnumber, numberArray) === -1) {
        //     //     console.log("nummer komt niet voor -> aanvullen");

        //     //     numberArray.push(myrandomnumber);

        //     // } else {
        //     //     RunrandomNumber();
        //     //     console.log("niets doen");
        //     // }
        // }

        //console.log("randomNumber() geeft na while loop: " + myrandomnumber);
        // console.log("total array na while loop: " + numberArray2);
        // console.log("lengte array na while loop: " + numberArray2.length);

        // console.log("total array na while loop - gesorteerd: " + numberArray2);
        // console.log()

        setImages();


    }
    runThis();

    function setImages() {
        $('.item').each(function(index) {

            var deze = $(this);
            //deze.find('img').attr('src', 'img/logos/numbers/' + numberArray2[index] + '.png');

            setTimeout(function(index) {

                deze.addClass('show');
            }, 30 * (index));


            // console.log("setImages" + numberArray2);
            // console.log("index" + index);




        });

    }


    $('.item.testimon').hover(function() {
            console.log("hover");
            //$(this).removeClass('open');
            $('.item.testimon').removeClass('open');
        });

        $('.item.review').hover(function() {
            console.log("hover");
            //$(this).removeClass('open');
            $('.item.review ').removeClass('open');

        });
    // window.onresize = function(){ location.reload(); }



    // $(".box").each(function(index) {
    //     const heightBox1 = $(this).find('.first').height();
    //     console.log("heightBox1:"+heightBox1);
    //     $(this).find('.second').css('height', heightBox1+'px');
    //     $(this).hover(function() {
    //         $(this).find('.first').fadeToggle('fast', function() {

    //         });
    //         console.log("hover and fade it!");
    //     });
    // });



    $('.box').click(function(event) {
        //console.log(event.target);
        //console.log($(this).find('quote')[0]);
        //console.log("MEANING:" + event.target);
        $('this').find('.first').css('background-color', 'yellow');
        //console.log($('this').find('.first'));
        //console.log($('this').next());
    });


    $('.box2').each(function(index) {
        var quote = $(this).find('quote')[index];
        var boxWidth = $(this).width();
        var quoteElement = $(this).find('.first').find('div').children('quote')[0];
        var newImgPost = (boxWidth / 2) - 60;

        var QuoteText = $(this).find('.first').find('div').children('quote').text();
        //console.log("this is the element"+ $(index));
        //console.log(quote[index]); 
        //console.log("MEANING:" + $(this).n );

        $(this).click(function(event) {
            // console.log("MEANING:");
            $(this).find(".magicbox").slideToggle("fast", function() {

            });

            //console.log($(this).find('.first').find('div').children('quote')[0]);
            //$(this).find(".first").find('div').animate({left:'-'+newImgPost},350, function(quoteElement) {
            // Animation complete.

            //  console.log("this is"+ $(event.target));
            //$(this).find('.first').find('div').children('quote')[0].css('opacity', '1');
        });


        //console.log("deze:"+ $(this));


        //console.log("QuoteText" + QuoteText.toString());
        //console.log($(this).find('.first').find('div').children('quote')[0]);

        // var typed = new Typed($(this).find('.first').find('div').children('quote')[0], {
        //     strings: ["First sentence.", QuoteText.toString()],
        //     typeSpeed: 30,
        //     onComplete: function(self, event) {
        //         console.log("ending!!" + $(event.target));
        //         //testing(boxWidth);
        //     }
        // });



    });


});