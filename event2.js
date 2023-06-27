const colors = ["auqua", "green", "yellow", "purple", "red"];

document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  //   document.body.style.backgroundColor = colors[Math.floor(Math.random() * 4)];
  if (window.scrollY > 400) {
    document.getElementById("scrollbtn").style.display = "block";
  } else {
    document.getElementById("scrollbtn").style.display = "none";
  }
});

document.getElementById("scrollbtn").addEventListener("click", () => {
  console.log("Scroll btn clicked!!!");
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

let menuBtnEl = document.querySelector(".menubtn");
let mobileNavEl = document.querySelector(".mobile-nav");

// what is a falsy value and what are the examples in javascript
menuBtnEl.addEventListener("click", () => {
  if (mobileNavEl.style.display == "none" || !mobileNavEl.style.display) {
    mobileNavEl.style.display = "block";
    // menuBtnEl.children[0].setAttribute("name", "close-outline");
  } else {
    mobileNavEl.style.display = "none";
    // menuBtnEl.children[0].setAttribute("name", "grid-outline");
  }
});

document.querySelector(".closebtn").addEventListener("click", () => {
  mobileNavEl.style.display = "none";
});

// event propagation event delegation in javascript -- event bubbling

// stop an event from getting en element's children
document.querySelector(".mobile-nav").addEventListener("click", (event) => {
  mobileNavEl.style.display = "none";
});

// forms
