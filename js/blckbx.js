(function () {
    window.addEventListener("load", function () {
        console.log("blckbx loaded");
       
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

        function showNewsletterpopup() {
            // Apply setCookie
            let blckbxCookie = 'blckbx cookie';
            setCookie('blckbx.tv | blckbx.tv nieuwskanaal', blckbxCookie, 30);
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
            // if ( document.querySelectorAll(".testing").length > 0) {
            //     console.log("popuptest visible");
               
            //     } else {
            //     console.log("popuptest not visible");
               
            //     }

           
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

        
        // Set a Cookie
        function setCookie(cName, cValue, expDays) {
                let date = new Date();
                date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
                const expires = "expires=" + date.toUTCString();
                document.cookie = cName + "=" + cValue + "; " + expires + "; path=/" + "SameSite=None; Secure";
        }
        

    });




})();