
(function($)
{
    $.fn.bookSlider =function(options)
    {
      
      var options = $.extend({
        "rotationSpeed" : 2,
        "rotationAngle": 45
      }, options);
      
      
       return this.each(function(key, bookSlider) {
         console.log(bookSlider);
        $(bookSlider).find('li').each(function(key, val) {
          val.css({
            '-webkit-transform': 'rotateY(2deg)'
          })
        });
       });
    };
})(jQuery);