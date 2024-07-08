let slider1 = tns({
  container: ".homeBanner__slider",
  items: 1,
  speed: 200,
  slideBy: "page",
  autoplay: true,
  navPosition: "bottom",
  axis: "vertical",
  controls: false,
});

let slider2 = tns({
  container: ".services__slider",
  items: 3,
  controlsPosition: "bottom",
  gutter: 30,
  controls: true,
  controlsContainer: "#controls",
  prevButton: ".prev",
  nextButton: ".next",
  speed: 400,
});
