var baseURL = "/ux_project/revation/resources";
var include = {
  meta: function () {
    document.write('<meta charset="UTF-8">');
    document.write('<meta http-equiv="X-UA-Compatible" content="IE=edge">');
    document.write(
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
    );
  },
  title: function () {
    document.write('<title>revation</title>');
  },
  styles: function () {
    document.write(
      // '<link rel="stylesheet" href="' + baseURL + '/css/swiper.min.css" type="text/css" />'
      '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>'
    );
    document.write(
      '<link rel="stylesheet" href="' + baseURL + '/css/style.css" type="text/css" />'
    );
  },
  scripts: function () {
    // library js
    document.write(
      '<script src="' + baseURL + '/js/jquery-3.7.1.min.js"></script>'
    );
    document.write(
      // '<script src="' + baseURL + '/js/swiper.min.js"></script>'
      '<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>'
    );
    document.write(
      '<script src="' + baseURL + '/js/gsap.min.js"></script>'
    );
    document.write(
      '<script src="' + baseURL + '/js/ScrollTrigger.min.js"></script>'
    );
    
    // custom js
    document.write(
      '<script src="' + baseURL + '/js/common.js"></script>'
    );
  },
};