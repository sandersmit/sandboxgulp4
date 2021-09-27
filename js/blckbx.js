(function () {
    window.addEventListener("load", function () {
        console.log("blckbx loaded");
         //check for concent cookie
         readCookie('blckbxNaam');
        var newsLetterPopup = document.querySelectorAll(".sqs-popup-overlay");
        var cookieCloseBtn = document.querySelectorAll(".sqs-popup-overlay-close");
        var cookieBtn = document.querySelectorAll(".sqs-cookie-banner-v2-cta");
        var cookiePopup = document.querySelectorAll(".sqs-cookie-banner-v2");
        cookieBtn[0].addEventListener("click", showNewsletterpopup);
        //cookieCloseBtn[0].addEventListener("click", showNewsletterpopup)
        newsLetterPopup[0].parentElement.classList.add("blcbxhide");
        //popup[0].style.display = "none";

        //showNewsletterpopup simulation
        setTimeout(function () {
            console.log("setting class visible + add display:block");
            newsLetterPopup[0].classList.add("visible");
            newsLetterPopup[0].style.display = "block";
        }, 3000);
        //end

        function setCookie(cname, cvalue, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires="+d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/; SameSite=None; Secure";
          }
        
        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) 
                {
                //fire payload
                var checkThis = c.substring(nameEQ.length,c.length)
                console.log("cookie found - drop payload");
                blckbxPyload(checkThis);
                return c.substring(nameEQ.length,c.length);
                }else{
                console.log("no match - do nothing")
                return;
                }
            }
            return null;
        }
        
        function blckbxPyload(checkThis){
            if (checkThis.length > 0) {
                console.log("ja");  
                let newScript1 = document.createElement("script");
                newScript1.setAttribute('async','async');
                newScript1.setAttribute("type","text/javascript");
                let newScript2 = document.createElement("script");
                newScript2.setAttribute("type","text/javascript");
                newScript1.src = "https://platform-api.sharethis.com/js/sharethis.js#property=6092ba5f18d187001189ef92&product=inline-share-buttons";
                newScript2.src = "js/blckbxTradetracker.js";
                document.body.lastElementChild.insertAdjacentElement('afterend', newScript1);
                document.body.lastElementChild.insertAdjacentElement('afterend', newScript2);
                console.log("blckbxPyload released")
            } else {
                console.log("nee"); 
            }
            
        }

        function showNewsletterpopup() {
            
            let blckbxCookieValue = 'blckbxWaarde';
            let blckbxCookieName = 'blckbxNaam';
            // Apply setCookie function
            setCookie(blckbxCookieName, blckbxCookieValue, 30);
            if (newsLetterPopup.length > 0) {
                console.log("popup visible");
                cookiePopup[0].remove() ;
                //popup[0].classList.add("anotherClassname");
                setTimeout(function () {
                    newsLetterPopup[0].parentElement.classList.remove("blcbxhide");
                    //popup[0].parentElement.remove();
                }, 5000);
            } else {
                console.log("popup not visible");
            }
        }



        // identify an element to observe
        const elementToObserve = document.querySelector(".sqs-popup-overlay");
        // create a new instance of `MutationObserver` named `observer`,
        // passing it a callback function
        const observer = new MutationObserver(function () {
            //ad some other function that is needed AFTER observer is triggerd. 
            console.log('callback that runs when observer is triggered');
        });

        // call `observe()` on that MutationObserver instance,
        // passing it the element to observe, and the options object
        observer.observe(elementToObserve, {
            subtree: true,
            childList: true,
            //check for classname attribute
            attributes: true
        });


        

    });




})();