$(document).ready(function () {
  // Slick Slider jq
  $(".autoplay").slick({
    centerMode: true,
    centerPadding: "30px",
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 767.99,
        settings: {
          dots: true,
          slidesToShow: 1,
        },
      },
    ],
  });
});
