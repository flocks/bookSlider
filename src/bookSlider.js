
(function($)
{
    $.fn.bookSlider =function(options)
    {
      
      var options = $.extend({
        "rotationSpeed" : 2,
        "rotationAngle": -3
      }, options);
      
      var angles = {};
      var rotated = {};
      var nbRotated = 0;
      var nbSide = 0;

      var _init = function(list) {

        for(var i = 0; i < list.length; i++) {
          nbSide++;
          var val= (i+1) * options.rotationAngle;
          $(list[i]).attr('id', "bookSlide"+i);
          $(list[i]).css({
            WebkitTransform: "rotateY("+val+"deg)",
            transform:  "rotateY("+ val+"deg)",
            MozTransform:  "rotateY("+val+ "deg)"
          });

          angles["bookSlide"+i] = val;
        }
      };
      
       return this.each(function(key, bookSlider) {
        _init($(bookSlider).find('li'));

        $(bookSlider).find('li').each(function(key, val) {
          var desc = $(val).find('p');

          $(val).on('mouseenter', function() {
            desc.show('slow');
          });

          $(val).on('mouseleave', function() {
            desc.hide();
          });

          $(val).on('click', function() {
            var idElement = $(val).attr('id');
            var angle = -180;
            if (typeof rotated[idElement] === "undefined") {
              angle =  angle - (nbRotated+1) * options.rotationAngle;
              nbRotated++;
              rotated[idElement] = true;

            }
            else {
              angle = angles[idElement];
              nbRotated--;
              delete rotated[idElement];
            }

            $(val).css({
             transform :"rotateY("+angle+"deg)"
            });

          });
        });
       });
    };
})(jQuery);