var type = 1,
    radius = '15em',
    start = 0,
    $elements = $('.skills-list>ul>li:not(:first-child)'),
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