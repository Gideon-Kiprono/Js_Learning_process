const colors = ["auqua", "blue", "yellow", "green", "red"];

document.addEventListener("scroll", () => {
  //console.log("function called!");
  console.log(window.scrollY);
  //document.body.style.backgroundColor = colors[Math.floor(Math.random() * 4)];

  if (window.scrollY > 400) {
    document.getElementById("scroll").style.display = "block";
  } else {
    document.getElementById("scroll").style.display = "none";
  }
});

document.getElementById("scroll").addEventListener("click", () => {
  console.log("scroll btn clicked!!");
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

let menuBtnE1 = document.querySelector(".menubtn");
let mobileNavE1 = document.querySelector(".mobile-nav");
menuBtnE1.addEventListener("click", () => {
  console.log(mobileNavE1.style.display);
  if (mobileNavE1.style.display == "none" || !mobileNavE1.style.display) {
    mobileNavE1.style.display = "block";
    //menuBtnE1.children[0].setAttribute("name","close-outline")
  } else {
    mobileNavE1.style.display = "none";
    //menuBtnE1.children[0].setAttribute("name", "grid - outline");
  }
});

document.querySelector(".closebtn").addEventListener("click", () => {
  mobileNavE1.style.display = "none";
});

//what is a falsy value and what are the examples in javascript

// stop an event from getting en element's children
document.querySelector(".mobile-nav").addEventListener("click", (event) => {
  mobileNavE1.style.display = "none";
});
