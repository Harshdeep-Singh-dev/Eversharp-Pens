// The purpose ofthe javascript is to change background Color of products section when specific product is hovered upon
// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  
  // Listen for the scroll event and log the event data
  lenis.on('scroll', (e) => {
    console.log(e);
  });

let products = document.querySelector("#products");
let boxes = document.querySelectorAll(".box figure");


// Setting background color
const setBackgroundColor = (i) => {
  var style = window.getComputedStyle(boxes[i]);
  var backGroundColor = style.backgroundColor;
  products.style.backgroundColor = backGroundColor;
};

// Resetting Background Color

const resetBackgroundColor = () => {
  products.style.backgroundColor = "#fff";
};

for (let i = 0; i < Math.min(8, boxes.length); i++) {
  boxes[i].addEventListener("mouseenter", () => setBackgroundColor(i));
  boxes[i].addEventListener("mouseleave", resetBackgroundColor);
}

// Hamburg logo for mobile phones
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

