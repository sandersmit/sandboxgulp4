


(function () {
    window.addEventListener("load", function (){
        console.log("sandbox.js loaded?");

        const hello = () => {
            return "Hello World!";
          };

          const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.includes("Mango"); // is true
        
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved?');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();





    });
})();