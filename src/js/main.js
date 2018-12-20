
/* Resize function
---------------------------------------------------------------------------*/
function resize(height, width) {
  var sectionHeight = width * (860 / 1440);
  var sectionTopPadding = width * (320 / 1440)
  $('.section.founder').css('height', sectionHeight);
  $('.section.founder .content').css('height', sectionHeight - sectionTopPadding);
  if (width > 680) {
    $('.section.founder .content').css('paddingTop', sectionTopPadding);
  }
}

function checkVisibility() {
  $body = $('body');
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($body.find(".transition-enabled"), function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
      (element_top_position <= window_bottom_position)) {
      $element.addClass('is-visible');
    } else if (window_top_position <= 120) {
      $element.removeClass('is-visible');
    }
  });
}


$(document).ready(function () {
  h = $(window).height();
  w = $(window).width();
  resize(h, w); // resize on load

  $(window).scroll(function () {
    checkVisibility(); // check visibility  
  });

  /* Trigger resize function when window dimensions change
  ---------------------------------------------------------------------------*/
  $(window).resize(function () {
    h = $(window).height();
    w = $(window).width();
    resize(h, w);
  });

  /* Keyboard triggers
  ---------------------------------------------------------------------------*/
  $(document).keyup(function (e) { // close overlay with esc key
    if (e.keyCode == 27 && $('body').hasClass('search-open')) closeSearch();
  });

  /* Mobile menu triggers
  ---------------------------------------------------------------------------*/
  $('.menu-toggle').click(function () {
    if ($(this).hasClass('menu-toggle__is-open') === true) {
      $(this).addClass('menu-toggle__is-closed').removeClass('menu-toggle__is-open');
      $(this).next().addClass('menu--is-closed').removeClass('menu--is-open');
      $(document).find('body').removeClass('fixed');

    } else if ($(this).hasClass('menu-toggle__is-closed') === true) {
      $(this).removeClass('menu-toggle__is-closed').addClass('menu-toggle__is-open');
      $(this).next().removeClass('menu--is-closed').addClass('menu--is-open');
      $(document).find('body').addClass('fixed');
    }
  });

  /* Blog Grid section
  ---------------------------------------------------------------------------*/
  var grid_item_count = 0;
  $('.section.blog_topics .grid .grid__item').each(function () {
    grid_item_count += 1;
    var style = 'transition-delay: ' + ((grid_item_count * 2.8) / 10) + 's';
    $(this).attr('style', style);
  });

  /* Recent Posts Grid section
  ---------------------------------------------------------------------------*/
  var item_count = 0;
  var item_style = '';
  $('.section.blog_posts .grid .grid__item').each(function () {
    item_count += 1;
    item_style = $(this).attr('style'); // gets existing style
    item_style += '; transition-delay: ' + ((item_count * 5) / 10) + 's;'; // concatenates styles
    $(this).attr('style', item_style);
  });

  /* Page scroll
  ---------------------------------------------------------------------------*/
  $('#scrollUp').click(function () {
    window.scroll({
      top: 0,
      behavior: 'smooth',
      duration: '3s'
    });
    return false;
  })

  $('.section.blog_topics a.link--more').click(function () {
    var parent = $(this).parent();
    if ($(parent).hasClass('open')) {
      $(parent).removeClass('open');
      $(this).text('More');
    } else {
      $(parent).addClass('open');
      $(this).text('Less');
    }
    return false;
  })

});
