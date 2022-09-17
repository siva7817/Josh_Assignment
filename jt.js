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
