$(document).ready(function () {

    if (jQuery) {
        // jQuery is loaded  _2_2_2.js
        //console.log("ready!- _2_2_2.js");
    }
    //////////---slider1
    var changingnumb = 0;
    $(".slider1").each(function (index, value) {

        changingnumb++;
        var deze = $(this);
        console.log("index is!: " + index);
        //var changingnumb = index++;
        console.log("changingnumb is!: " + changingnumb);
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


        $(window).resize(function () {
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

        var myElement = document.querySelector(".slider" + changingnumb);
        myElement.addEventListener("touchstart", startTouch, false);
        myElement.addEventListener("touchmove", moveTouch, false);
        // Swipe Up / Down / Left / Right
        var initialX = null;

        function startTouch(e) {
            initialX = e.touches[0].clientX;
            console.log("startTouch" + initialX);
        }

        function moveTouch(e) {
            if (initialX === null) {
                console.log("moveTouch" + initialX);
                return;

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
        }
        //mobile swipe end 

        deze.find('.button').click(function () {
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
            navigatie(slideHuidig, dezenav);
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
                dezenav.parent().find('.vorige').hide();
            } //...of laten zien wanneer het niet de eerste slide is
            else {
                dezenav.parent().find('.vorige').show();
            }
        }
    });


    //////////---slider2 

    $(".slider2").each(function (index) {
        var deze = $(this);
        //console.log(index + ": " + $(this).attr('class'));
        var slide = $(this).find('.slide2');
       // console.log(index + ": " + slide.attr('class'));
        var slideAantal = slide.length;
        //console.log(slideAantal);
        //console.log("slidebreedte" + slide.width());
        var slideBreedte = slide.width();
        var slideHuidig = 1;
        //console.log("slideHuidig" + slideHuidig);


        $(window).resize(function () {
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

        deze.find('.button').click(function () {
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
            navigatie(slideHuidig, deze);
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
                deze.find('.vorige2').hide();
            } //...of laten zien wanneer het niet de eerste slide is
            else {
                deze.find('.vorige2').show();
            }
        }
    });



    $('.item.testimon').hover(function () {
        console.log("hover");
        //$(this).removeClass('open');
        $('.item.testimon').removeClass('open');
    });

    $('.item.review').hover(function () {
        console.log("hover");
        //$(this).removeClass('open');
        $('.item.review ').removeClass('open');

    });


    //let numberArray = [];
    let numberArray2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

    function RunrandomNumber() {

        let myrandomnumber = Math.floor(Math.random() * 22);
        runThis(myrandomnumber);
        //return myrandomnumber;
    }
    RunrandomNumber();

    function runThis(myrandomnumber) {

        console.log("myrandomnumber geeft op start: " + myrandomnumber);
        numberArray2.sort(function () {
            return 0.5 - Math.random()
        });

        while (numberArray2.length < 11) {
            //let myrandomnumber = Math.floor(Math.random() * 22);
            // console.log("randomNumber() geeft in while loop cycle: " + myrandomnumber);
            console.log("total array in while loop cycle: " + numberArray2);
            console.log("lengte array in while loop cycle: " + numberArray2.length);
            numberArray.push(myrandomnumber);
            //numberArray.sort();

            // if ($.inArray(myrandomnumber, numberArray) === -1) {
            //     console.log("nummer komt niet voor -> aanvullen");

            //     numberArray.push(myrandomnumber);

            // } else {
            //     RunrandomNumber();
            //     console.log("niets doen");
            // }
        }

        //console.log("randomNumber() geeft na while loop: " + myrandomnumber);
        // console.log("total array na while loop: " + numberArray2);
        // console.log("lengte array na while loop: " + numberArray2.length);

        // console.log("total array na while loop - gesorteerd: " + numberArray2);
        // console.log()

        setImages();
    }
    //runThis();

    function setImages() {
        $('.item.normal').each(function (index) {
            var deze = $(this);
            deze.find('img').attr('src', 'img/logos/numbers/' + numberArray2[index] + '.png');
            setTimeout(function (index) {
                deze.addClass('show');
            }, 30 * (index));
            // console.log("setImages" + numberArray2);
            //console.log("index" + index);
        });

    }




//////////sorteren
let afbeelding = '1.png';
let directory =`img/logos/numbers/`;
const root = window.location.href;
console.log('location is '+ root );

const fotoarchief = [
    { title: 'zwaag', date: '2019-06-10', url:`${root}${directory}1.png`},
    { title: 'hoorn', date: '2019-06-10', url:`${root}${directory}2.png` },
    { title: 'nibixwoud', date: '2018-06-28', url:`${root}${directory}3.png`  },
    { title: 'werfershoof', date: '2017-05-22', url:`${root}${directory}4.png`  },
    { title: 'wognum', date: '2015-05-01', url:`${root}${directory}5.png`  },
    { title: 'onderdijk', date: '2015-01-01', url:`${root}${directory}6.png`  },
    { title: 'hem', date: '2015-08-01', url:`${root}${directory}7.png`  },
    { title: 'enkhuizen', date: '2020-09-01', url:`${root}${directory}8.png`  },
    { title: 'benningbroek', date: '2015-01-01', url:`${root}${directory}9.png`  },
    { title: 'venhuizen', date: '2017-01-01', url:`${root}${directory}10.png`  },
    { title: 'haarlem', date: '2013-01-01', url:`${root}${directory}11.png`  },
    { title: 'amsterdam', date: '2012-01-01', url:`${root}${directory}12.png`  },
    { title: 'zandvoort', date: '2009-02-01', url:`${root}${directory}13.png`  }
  ]

    //const listimagesArray = [];
    //document.getElementById("demo").innerHTML = listimages;
    //console.log("check");
    //var listimages2 = document.querySelectorAll(".sorteerlijst img");   
    //console.log("aantal in query all: "+ listimages2.length )
    //const sortbtn = document.getElementsByClassName("sortingBtn");
    const listholder = document.getElementById("demo").childNodes;
    listholder[1].style.backgroundColor = "red";
    //const firstimages = listholder[1].children[0];
  

   
    //console.log('directoryPath'+ directoryPath );

    

    //fotoarchief.forEach(myFunction);
    
// function myFunction(item, index) {
//   listimagesArray.push(item.currentSrc);
//   if (index == (listimages2.length-1)) {
//     console.log("laatste item zit in de array: "+index + ":" + item.title + item.url);
//     console.log("alle items zitten in array:");
//    // listimagesArray.sort((a, b) => a - b);
//     console.log("listimagesArray"+listimagesArray);
//     listimagesArray.forEach(makeit);
//   } else {
//     console.log("bezig met vullen..")
//   }
// }



////opbouwen van een nieuwe lijst met images
// function makeit(item, index){
//     //Whem first image is = 0,  appended  all existing in existing ul, remove all initialy placed images. 
//     if (index == 0) {
//      console.log("index = "+ index);
//     //remove first displayed images after sort click
//     listholder[1].innerHTML = "";  
//      console.log(listholder);
//     }
//         console.log("plaatje"+index + "url:" + item);
//         var listitem = document.createElement("li"); 
//         var plaatje = document.createElement("img"); 
//         plaatje.setAttribute("src", item);
//         plaatje.setAttribute("data-index", index);
//         listitem.appendChild(plaatje);  
//         document.getElementById("demo").firstElementChild.appendChild(listitem);   
// }




//let numberArray3 = [9, 10, 11, 12, 6, 7, 8, 21, 22, 13, 14,0, 1, 2, 3, 4, 5 ];
//let numberArray4 = ["test/plaatje1", "test/plaatje2" , "test/plaatje3" , "test/plaatje44" , "test/plaatje22", "test/plaatje0"];
 ///////sorteer button
// console.log("klik to sort" + sortbtn[0].tagName);



//var selectvalue = document.getElementsByClassName("myselect").value;
var sortingSelector = document.getElementsByClassName("myselect")[0];
sortingSelector.addEventListener("change", sortData);
//sortbtn[0].addEventListener("click", sortData);
    

    // hello = () => {
    //     return "Hello World!";
    //   }
    //console.log("numberArray3: "+numberArray3);
    //console.log("numberArray4: "+numberArray4);
    //console.log("listimagesArray: "+listimagesArray);
    //var listimagesArrayinteger = parseFloat(listimagesArray);
    //console.log("listimagesArrayinteger:" + listimagesArrayinteger);

    ////sorteren van een nieuwe lijst met images
function sortData() {
    //this.style.backgroundColor = "red";
    test();
    
    
    console.log(`selectvalue: ${sortingSelector.value}`);
    //numberArray3.sort((a, b) => a - b);
    //numberArray4.sort(function(a, b){return a-b});
    //fotoarchief.sort();
    
   
    
    if (sortingSelector.value  == "cityac") {
        //oplopend plaatsnaam
        fotoarchief.sort((a, b) => (a.title > b.title) ? 1 : -1)
    } else if (sortingSelector.value  == "citydec") {
        //aflopend plaatsnaam
        fotoarchief.sort((a, b) => (a.title < b.title) ? 1 : -1)
    }else if (sortingSelector.value  == "dateac") {
        //oplopend datum
        fotoarchief.sort((a, b) => (a.date > b.date) ? 1 : -1)
    } else if (sortingSelector.value  == "datedec") {
        //aflopend datum.
        fotoarchief.sort((a, b) => (a.date < b.date) ? 1 : -1)
    }
    
       
    // console.log("numberArray3: "+numberArray3);
    // console.log("numberArray4: "+numberArray4);
    // console.log("listimagesArray: "+listimagesArray);

    fotoarchief.forEach(showit);

    }
    ////opbouwen van een nieuwe lijst met images
    function showit(item, index) {
        if (index == 0) {
           // console.log("index = "+ index);
           //remove first displayed images after sort click
           listholder[1].innerHTML = "";  
            console.log(listholder);
           }
       console.log("fotoarchief: "+item.title,item.date, item.url, index);
        var listitem = document.createElement("li"); 
        var thetitle = document.createElement("h2");
        var content = document.createTextNode(`${item.title}`);
        var plaatje = document.createElement("img"); 
        plaatje.setAttribute("src", item.url);
        plaatje.setAttribute("data-index", index);
        listitem.appendChild(plaatje);
        thetitle.appendChild(content);
        listitem.appendChild(thetitle);  
        document.getElementById("demo").firstElementChild.appendChild(listitem);   
        }


        async function f() {

            let promise = new Promise(function(resolve, reject) {
              setTimeout(
                  function(){ 
                      resolve("done!")
                }, 3000)
            });
          
            let result = await promise; // wait until the promise resolves (*)
          
            console.log(result); // "done!"
          }
          
          f();

  

});