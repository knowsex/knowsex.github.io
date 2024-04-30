document.querySelectorAll(".click-to-show").forEach(function (item) {
  item
    .querySelector(".show-after-click")
    .addEventListener("click", function () {
      this.style.filter = "blur(0px)";
      this.parentNode.removeChild(
        this.parentNode.querySelector(".text-hover-img"),
      );
    });
  item.querySelector(".text-hover-img").addEventListener("click", function () {
    this.parentNode.querySelector(".show-after-click").style.filter =
      "blur(0px)";
    this.parentNode.removeChild(
      this.parentNode.querySelector(".text-hover-img"),
    );
  });
});
