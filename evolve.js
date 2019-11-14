$("form").submit(function(event) {
    var inText = $("#inText");
    var inTextVal = inText.val();

    if(inTextVal.length === 0) {
        event.preventDefault();

        alert("输入不能为空");

        return false;
    }
})

  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });