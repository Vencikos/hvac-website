document.querySelector(window).on("beforeunload", function () {
  document.querySelector("body").hide();
  document.querySelector(window).scrollTop(0);
});
