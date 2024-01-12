'use strict';

///////////////////////////////////////
// Modal window

//DOM
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//Scrolling

btnScrollTo.addEventListener('click', function (e) {
  const btnCoords = e.target.getBoundingClientRect();
  const X = window.scrollX;
  const Y = window.scrollY;
  console.log('X: ' + X);
  console.log('Y: ' + Y);
});

