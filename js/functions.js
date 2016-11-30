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

  var vidPlay = $('.btn-play')
    vidPlay.click(function(){
      $('#video').get(0).play();
      $('.btn-play').hide();
    });
    $('#video').on('ended', function(){
      $('.btn-play').show();
    });

    /**
     * This part does the "fixed navigation after scroll" functionality
     * We use the jQuery function scroll() to recalculate our variables as the
     * page is scrolled/
     */
    $(window).scroll(function(){
        var window_top = $(window).scrollTop() - 115; // the "12" should equal the margin-top value for nav.stick
        var div_top = $('header').offset().top;
            if (window_top > div_top) {
                $('nav').addClass('stick');
                $('#home').css('margin-top', '115px');
            } else {
                $('nav').removeClass('stick');
                $('#home').css('margin-top', '0');
            }
    });

    /**
     * This part causes smooth scrolling using scrollto.js
     * We target all a tags inside the nav, and apply the scrollto.js to it.
     */
    $("nav a").click(function(evn){
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash, {offset:-140});
    });

    /**
     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and
     * manipulation, class adding and class removing, and conditional testing
     */
    var aChildren = $("nav li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top - 140; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("active");
            } else {
                $("a[href='" + theID + "']").removeClass("active");
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$("nav li:last-child a").hasClass("active")) {
                var navActiveCurrent = $(".nav-active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("active");
                $("nav li:last-child a").addClass("active");
            }
        }
    });
});

    var filterizd = $('.filtr-container').filterizr({
       layout: 'sameSize',
       filter: 'all'
});
