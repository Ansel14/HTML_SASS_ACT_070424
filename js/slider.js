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
  navPosition: "bottom",
  controls: false,
  swipeAngle: false,
  speed: 400,
});

let slider3 = tns({
  container: ".servicesBanner__slider",
  mode: "carousel",
  items: 3,
  gutter: 10,
  nav: true,
  navPosition: "bottom",
  // controls: false,
  swipeAngle: false,
  speed: 400,
});
