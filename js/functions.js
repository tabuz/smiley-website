$(document).ready(function(){
  testimStuff();
    $('#team-carousel').owlCarousel({
      items: 3,
    });
    $('#clients').owlCarousel({
      navigation: true,
      pagination: false,
      navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    });

  function testimStuff(){
    $('.testim-unit').first().next().addClass('active-testim');
    var i = 2,
        content = $('.active-testim p').html();
    $('.testimonials-caption p').html(content);

      $('.next, .prev').click(function(){
        var $this = $(this);

            if($this.hasClass('next')){
              if(i < 3){
                $('.active-testim').removeClass('active-testim').next().addClass('active-testim');
                content = $('.active-testim p').html();
                i++;
                }else{
                  $('.testim-unit').removeClass('active-testim').first().addClass('active-testim');
                  content = $('.active-testim p').html();
                  i=1;
                }
              }else{
                  $('.active-testim').removeClass('active-testim').prev().addClass('active-testim');
                  content = $('.active-testim p').html();
                  i--;
                  if(i <= 0){
                    $('.testim-unit').removeClass('active-testim').last().addClass('active-testim');
                    content = $('.active-testim p').html();
                    i=3;
                  }
              }
            $('.testimonials-caption p').html(content);
      });
  }
});
