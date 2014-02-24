
(function($)
{
    $.fn.bookSlider =function(options)
    {
      
      var options = $.extend({
        "rotationSpeed" : 2,
        "rotationAngle": -5
      }, options);
      

      var _init = function(list) {

        for(var i = 0; i < list.length; i++) {
          var val= i * options.rotationAngle;
         
          $(list[i]).css({
            WebkitTransform: "rotateY("+val+"deg)",
            transform:  "rotateY("+ val+"deg)",
            MozTransform:  "rotateY("+val+ "deg)"
          });
        }
      };
      
       return this.each(function(key, bookSlider) {
        _init($(bookSlider).find('li'));

        $(bookSlider).find('li').each(function(key, val) {
          $(val).on('click', function() {

            $(val).css({
             transform :"rotateY(-180deg)"
            });

          });
        });
       });
    };
})(jQuery);