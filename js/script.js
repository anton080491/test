$(document).ready(function(){


    $('.block__item__content__more').each(function(i){
        $(this).on('click',function(e){
            e.preventDefault();
            $('.block__item__content').eq(i).toggleClass('block__item__content__active');
            $('.block__item__list').eq(i).toggleClass('block__item__list__active');
        })
    })

    $('.block__item__list__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.block__item__content').eq(i).toggleClass('block__item__content__active');
            $('.block__item__list').eq(i).toggleClass('block__item__list__active');
        })
    })

    $('.menu').on('click', function(e){
        e.preventDefault();
        $(this). toggleClass('menu__active');
        $('.block1__list'). toggleClass('block1__list__active');
    })

    



      $('.slicks-slider').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        fade: true,
        cssEase: 'linear'
      });

      
  

    $('.modal__close').on('click', function(){
        $('.overflow').toggleClass('overflow__active');
    })

    $('.block__item__footer__btn').each(function(i) {
        $(this).on('click', function() {
            $('.modal__title').text($('.block__item__title').eq(i).text());
            $('.overflow').toggleClass('overflow__active');
        })
    });




    $('.modal__form').validate({
        rules: {
            // simple rule, converted to {required:true}
            name: "required",
            number: "required",
            // compound rule
            email: {
              required: true,
              email: true
            }
          }
      });


    $('input[name=phone]').mask("(999) 999-9999");


    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.skroll').fadeIn();
        } else {
            $('.skroll').fadeOut();
        }
    });





    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    
    
    // $('form').submit(function(e) {
    //     e.preventDefault();  //cancel a standard browser behavior
    //     $.ajax({                ////indicate where to send data
    //       type: "POST",
    //       url: "mailer/smart.php",
    //       data: $(this).serialize()
    //     }).done(function() {                                       
    //       $(this).find("input").val("");              //clear the input field
    //       $('.overflow').fadeOut();                  //open the gratitude window, slowly
    //       $('form').trigger('reset');
    //     });
    //     return false;
    // });


    
  var errorTxt = 'Ошибка отправки';
  $("#sendform").validate({
    submitHandler: function(form){
      var form = document.forms.sendform,
        formData = new FormData(form),
        xhr = new XMLHttpRequest();

      xhr.open("POST", "/send.php");
      
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if(xhr.status == 200) {
            $("#sendform").html('<p class="thank">Данные отправлены!<p>');
          }
        }
      };
      xhr.send(formData);
    }
  }); 



    

    new WOW().init();
  

});