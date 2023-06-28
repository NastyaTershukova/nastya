jQuery(document).ready(function($) {
  $('.spoiler_title').click(function() {
     $(this).parents('.spoiler_wrap').find('.spoiler_content').toggleClass('open');
         $(this).parents('.spoiler_wrap').find('.spoiler_arrow').toggleClass('open');
  });
});

$(document).ready(function() {
  $('.header_burger').click(function(event) {
     $('.header_burger, .menu').toggleClass('active');
     $('body').toggleClass('lock');
  });
});



