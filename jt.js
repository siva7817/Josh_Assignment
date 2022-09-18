let cardContainers = [...document.querySelectorAll(".popular__items")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

var cart_modal = document.getElementById("cart__modal");
var cart_btn = document.getElementById("cart__modal_open_btn");
var cart_close = document.getElementById("close");
var body = document.querySelector("body");

cart_btn.addEventListener("click", () => {
  cart_modal.style.display = "block";
  body.style.overflow = "hidden";
});

cart_close.addEventListener("click", () => {
  cart_modal.style.display = "none";
  body.style.overflow = "visible";
});

window.addEventListener("click", (e) => {
  if (e.target == cart_modal || e.target == dr_modal) {
    cart_modal.style.display = "none";
    body.style.overflow = "visible";
    dr_modal.style.display = "none";
  }
});

var dr_modal = document.getElementById("dish__request_modal");
var dr_btn = document.getElementById("dish__request");
var dr_cancel = document.getElementById("dr__close");
var dr_submit = document.getElementById("dr__submit");

dr_btn.addEventListener("click", () => {
  dr_modal.style.display = "block";
  body.style.overflow = "hidden";
});

dr_cancel.addEventListener("click", () => {
  dr_modal.style.display = "none";
  body.style.overflow = "visible";
});

dr_submit.addEventListener("click", () => {
  dr_modal.style.display = "none";
  body.style.overflow = "visible";
});
