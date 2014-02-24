
(function($)
{
    $.fn.bookSlider =function(options)
    {
      
      var options = $.extend({
        "rotationSpeed" : 2,
        "rotationAngle": 45
      }, options);
      
      
       return this.each(function(key, bookSlider) {
        
        $(bookSlider).find('li').each(function(key, val) {
          $(val).on('click', function() {
            console.log("la");
            $(val).css({
             transform :"rotateY(-180deg)"
            });

            console.log($(val).css('transform'));
          });
        });
       });
    };
})(jQuery);