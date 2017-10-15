//sticky add to cart buttons on scroll
(function($) {
  $.fn.visible = function(partial) {

    var $t = $(this), //get elemt
    $w = $(window), //get windows height
    viewTop = $w.scrollTop(), //get windows scroll
    viewBottom = viewTop + $w.height(), //to get bottom window scroll + height of the window
    _top = $t.offset().top + 60, //get elemt top position and '60' is the height of elemt
    _bottom = _top + $t.height(), //get bottom position
    compareTop = partial === true ? _bottom : _top, //compair top if true or false
    compareBottom = partial === true ? _top : _bottom; //compair bottom if true or false

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };

})(jQuery);
