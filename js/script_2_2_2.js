$(document).ready(function() {

    if (jQuery) {
        // jQuery is loaded  
        console.log("ready!!");
    }
//////////---slider1
    var changingnumb = 0 ;
        $(".slider1").each(function(index, value) {

            changingnumb++
            var deze = $(this);
            console.log("index is!: " + index) ;
            //var changingnumb = index++;
            console.log("changingnumb is!: " + changingnumb)
            var indexToString = toString(index);
            //console.log("indexwaarde"+indexToNumber+1);
            //console.log("indexwaarde"+indexToString+1);
            console.log(index + ": " + $(this).attr('class'));
            var slide = $(this).find('.slide');
            console.log(index + ": " + slide.attr('class'));
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
                deze.find('.sliderwrap').animate({
                    'left': (slideHuidig - slideBreedte)
                });
            }
            startpositie();

            /////mobile swipe

            var myElement = document.querySelector(".slider"+changingnumb);
            myElement.addEventListener("touchstart", startTouch, false);
            myElement.addEventListener("touchmove", moveTouch, false);
            // Swipe Up / Down / Left / Right
            var initialX = null; 
            function startTouch(e) {
              initialX = e.touches[0].clientX;
              console.log("startTouch"+initialX);
            }; 
            function moveTouch(e) {
              if (initialX === null) {
                return;
                 console.log("moveTouch"+initialX);
              }
              var currentX = e.touches[0].clientX;
              var diffX = initialX - currentX;  
                if (diffX > 0) {
                  // swiped left
                  console.log("swiped left");
                } else {
                  // swiped right
                  console.log("swiped right");
                }   
              initialX = null;  
              e.preventDefault();
            };
            //mobile swipe end 

            deze.find('.button').click(function() {
                console.log("click");
                event.preventDefault();
               var dezenav = $(this);
                console.log("this is: " + $(this).attr('class'));
                // Als op de knop 'volgende' is gedrukt...
                if ($(this).attr('class') === 'button volgende') {

                    slideHuidig = slideHuidig + 1;
                    console.log("slideHuidig" + slideHuidig);
                    // ...naar de volgende slide gaan...
                } else {
                    slideHuidig = slideHuidig - 1;
                    // ...naar de vorige slide gaan
                    console.log("slideHuidig: " + slideHuidig);
                }
                $(this).parent().parent().find('.sliderwrap').animate({
                    'left': (-slideHuidig * slideBreedte)
                });
                navigatie(slideHuidig, dezenav)
            });


            // Zorg er weer voor dat de vorige/volgende knoppen goed worden weergegeven
            // Verschuif #slides door middel van de linker margin
            // Functie die ervoor zorgt dat de vorige/volgende knoppen op de juiste momenten worden weergegeven
            function navigatie(slideHuidig, dezenav) {
                // Bij de laatste slide de 'volgende' knop weglaten..
                if (slideHuidig === 2) {
                    console.log("HIDE Volgende bij dit nummer");
                    dezenav.parent().find('.volgende').hide();
                } //...of laten zien wanneer het niet de laatste slide is
                else {
                    dezenav.parent().find('.volgende').show();
                }

                // Bij de eerste slide de 'vorige' knop weglaten..
                if (slideHuidig === 0) {
                    console.log("HIDE vorige bij nummer bij dit nummer");
                    dezenav.parent().find('.vorige').hide()
                } //...of laten zien wanneer het niet de eerste slide is
                else {
                   dezenav.parent().find('.vorige').show()
                }
            }
        });


//////////---slider2 

        $(".slider2").each(function(index) {
            var deze = $(this);
            console.log(index + ": " + $(this).attr('class'));
            var slide = $(this).find('.slide2');
            console.log(index + ": " + slide.attr('class'));
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

            deze.find('.button').click(function() {
                console.log("click");
                event.preventDefault();
                var dezenav = $(this);
                console.log("this is: " + $(this).attr('class'));
                // Als op de knop 'volgende' is gedrukt...
                if ($(this).attr('class') === 'button volgende2') {

                    slideHuidig = slideHuidig + 1;
                    console.log("slideHuidig" + slideHuidig);
                    // ...naar de volgende slide gaan...
                } else {
                    slideHuidig = slideHuidig - 1;
                    // ...naar de vorige slide gaan
                    console.log("slideHuidig: " + slideHuidig);
                }
                $(this).parent().parent().find('.sliderwrap').animate({
                    'left': (-slideHuidig * slideBreedte)
                });
                navigatie(slideHuidig, deze)
            });


            // Zorg er weer voor dat de vorige/volgende knoppen goed worden weergegeven
            // Verschuif #slides door middel van de linker margin
            // Functie die ervoor zorgt dat de vorige/volgende knoppen op de juiste momenten worden weergegeven
            function navigatie(slideHuidig, deze) {
                // Bij de laatste slide de 'volgende' knop weglaten..
                if (slideHuidig === 4) {
                    console.log("HIDE Volgende2 bij dit nummer");
                    deze.find('.volgende2').hide();
                } //...of laten zien wanneer het niet de laatste slide is
                else {
                    deze.find('.volgende2').show();
                }

                // Bij de eerste slide de 'vorige' knop weglaten..
                if (slideHuidig === 0) {
                    console.log("HIDE vorige2 bij nummer bij dit nummer");
                    deze.find('.vorige2').hide()
                } //...of laten zien wanneer het niet de eerste slide is
                else {
                    deze.find('.vorige2').show()
                }
            }
        });



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
   

});





