jQuery(document).ready(function($) {
    var circle = function() {
        var type = 1,
        radius = '15em',
        start = 0,
        $elements = $('.skills-window>ul>li:not(:first-child)'),
        numberOfElements = (type === 1) ?  $elements.length : $elements.length - 1, 
        slice = 360 * type / numberOfElements;
    
        $elements.each(function(i) {
            var $self = $(this),
                rotate = slice * i + start,
                rotateReverse = rotate * -1;
            
            $self.css({
                'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
            });
        }); 
    }
    
    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 900) {
            $('.skills-list').removeClass('skills-window');
            $('.skills-list').addClass('skills-mobile');
            $('.skills-list>ul>li').removeAttr('style');
        } else if (ww >= 900) {
            $('.skills-list').removeClass('skills-mobile');
            $('.skills-list').addClass('skills-window');
            circle();
        };
    };
    $(window).resize(function(){
        alterClass();
        circle();
    });
    alterClass();
});
