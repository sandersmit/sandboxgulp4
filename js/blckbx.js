
(function () {
    window.addEventListener("load", function () {
        console.log("blckbx loaded");
        //added some comment
        var popup = document.querySelectorAll(".sqs-popup-overlay");
      
        var cookieBtn = document.querySelectorAll(".sqs-cookie-banner-v2-cta");
        cookieBtn[0].addEventListener("click", showNewsletterpopup);
        popup[0].parentElement.classList.add("blcbxhide");
        
        //popup[0].style.display = "none";
        
        //showNewsletterpopup simulation
        setTimeout(function () {
            console.log("setting class visible + add display:block");
           popup[0].classList.add("testing");
        
         
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
            // if ( document.querySelectorAll(".testing").length > 0) {
            //     console.log("popuptest visible");
               
            //     } else {
            //     console.log("popuptest not visible");
               
            //     }

           
        }


                async function f() {
                     let promise = new Promise(function (resolve, reject) {
                      
                            return resolve(document.querySelectorAll(".testing")[0]);
                    
                });
                let result = await promise; // wait until the promise resolves (*)
                console.log(result); // "done!"
                }

                f();
              
              
                const promise1 = Promise.resolve(3);
                const promise2 = 42;
                const promise3 = document.querySelectorAll(".testing")[0];
               
                Promise.all([promise1, promise2, promise3]).then((values) => {
                console.log(values);
                });

                // mutationList = document.querySelectorAll(".testing")[0]

                // function callback(mutationList, observer) {
                //     mutationList.forEach( (mutation) => {
                //       if ( mutation.length > 0) {
                //         console.log("popuptest visible");
                    
                //         } else {
                //         console.log("popuptest not visible");
                    
                //         }
                //     );
                //   }

               

       
    });
   
    
})();