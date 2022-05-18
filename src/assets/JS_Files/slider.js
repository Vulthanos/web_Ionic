window.addEventListener('load', function(){
  new Glider(document.querySelector('.slider_list'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.slider_idicators',
    arrows: {
      prev: '.slider_back',
      next: '.slider_next'
    }
  });
});
