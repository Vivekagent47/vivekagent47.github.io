jQuery(document).ready(function($) {
    // This function is used to arrange the all skills imgs in the circular manner. Where slice defines that in how many parts the cicle is divided and arrange images in that part of the slice. You can define radius by your own.In this case I want to make it fit according to me. But you can cange it dynamically by using responsive widht value.
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

    // This fuction used to remove the inline style of the element that was given by the circle fucntion and add moile classs to arrange them in the way I want to.
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

    // Here I call the function that I define avobe when the width of the page or window (thats mean responsive widht) changes for arranging the items in my own manner.
    $(window).resize(function(){
        alterClass();
    });
    alterClass();
});
