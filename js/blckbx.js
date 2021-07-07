
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
           // popup[0].classList.add("visible");
            popup[0].style.display = "block";
        }, 3000);
        //end

        function showNewsletterpopup() {
            if (popup.length > 0) {
                console.log("popup visible");
               setTimeout(function () {
                popup[0].parentElement.classList.remove("blcbxhide");
            }, 5000);
            } else {
                console.log("popup not visible");
            }
        }
       
    });
   
    
})();