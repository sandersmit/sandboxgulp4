'use strict';
/*jshint esversion: 6 */
import {
  gsap
} from '../node_modules/gsap/index.js';

(function () {
  window.addEventListener("load", function () {
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

    //WITH Timelines (cleaner, more versatile)
    // var tl = gsap.timeline({repeat: 2, repeatDelay: 1, repeat:0});
    // tl.to(".een", {x: -1000 , duration: 1});
    // tl.to(".een", {x: 0, duration: 1});
    //tl.to(".een", {opacity: 0, duration: 1});

    // then we can control the whole thing easily...
    //tl.pause();
    //tl.resume();
    //tl.seek(1.5);
    //tl.reverse();

    // tl.kill();

    // HTML CSS JSResult Skip Results Iframe
    // EDIT ON
    gsap.from(".blockholder ul li", {
      duration: 2,
      scale: 0.5,
      opacity: 0,
      delay: 0.5,
      stagger: 0.6,
      ease: "elastic",
      force3D: true
    });

    // document.querySelectorAll(".blockholder ul li").forEach(function(box) {
    //  // box.addEventListener("click", function() {
    //     gsap.to(".blockholder ul li", {
    //       duration: 0.5, 
    //       //opacity: 0, 
    //       //y: 200, 
    //       stagger: 0.2,
    //       ease: "back.in"
    //     });
    //   //});
    // });

    //clipTween1 = TweenLite.from(box1, 1, {clip:"rect(50px 100px 50px 0px)", paused:true});

    // gsap.effects.explode(".blockholder ul li", {
    //   direction: "up", //can reference any properties that the author decides - in this case "direction".
    //   duration: 3
    // });
  });
})();