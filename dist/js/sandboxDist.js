'use strict';
/*jshint esversion: 6 */

var _index = require("../node_modules/gsap/index.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function () {
  window.addEventListener("load", function () {
    console.log("sandbox.js loaded?");

    var hello = function hello() {
      return "Hello World!";
    };

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.includes("Mango"); // is true

    function resolveAfter2Seconds() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve('resolved?');
        }, 2000);
      });
    }

    function asyncCall() {
      return _asyncCall.apply(this, arguments);
    }

    function _asyncCall() {
      _asyncCall = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('calling');
                _context.next = 3;
                return resolveAfter2Seconds();

              case 3:
                result = _context.sent;
                console.log(result); // expected output: "resolved"

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _asyncCall.apply(this, arguments);
    }

    asyncCall(); //WITH Timelines (cleaner, more versatile)
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

    _index.gsap.from(".blockholder ul li", {
      duration: 2,
      scale: 0.5,
      opacity: 0,
      delay: 0.5,
      stagger: 0.6,
      ease: "elastic",
      force3D: true
    }); // document.querySelectorAll(".blockholder ul li").forEach(function(box) {
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