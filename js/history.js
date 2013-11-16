(function($) {
    "use strict";

    var s = Snap("#nav"), selectClass, position, totalWidth;

    $([document, window]).on("ready, resize", function () {
        // 8 = Number of sections
        totalWidth = $("#step_1").width() * 8;
    });

    $("circle").on("click", function (e) {
        var eq = Math.floor($(this).index() / 2);
        var scrollTop = $("section").eq(eq).position().left + (200 * eq);
        $(document).scrollTop(scrollTop);
    });


    $.jInvertScroll([".scroll"], {
        // height: 6000,
        onScroll: function (percent) {
            position = (Math.floor(percent * 100 / 12.5) + 1)
            position = (position < 0) ? 1 : (position > 8) ? 8 : position; 
            selectClass = "a" + (position);
            s.selectAll("circle, rect").attr({
                fill: "#666666",
                opacity: 0.5
            });
            s.selectAll('.' + selectClass).attr({
                fill: '#006EBE',
                opacity: 1
            });
        }
    });
}(jQuery));