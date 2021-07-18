(function () {
    window.addEventListener("load", function () {
        console.log("blckbx loaded");
        var popup = document.querySelectorAll(".sqs-popup-overlay");
        var cookieBtn = document.querySelectorAll(".sqs-cookie-banner-v2-cta");
        cookieBtn[0].addEventListener("click", showNewsletterpopup)
        popup[0].parentElement.classList.add("blcbxhide");
        //popup[0].style.display = "none";

        //showNewsletterpopup simulation
        setTimeout(function () {
            console.log("setting class visible + add display:block");
            popup[0].classList.add("visible");
            popup[0].style.display = "block";
        }, 3000);
        //end

        function showNewsletterpopup() {
            if (popup.length > 0) {
                console.log("popup visible");
                popup[0].classList.add("anotherClassname");
                setTimeout(function () {
                    popup[0].parentElement.classList.remove("blcbxhide");
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