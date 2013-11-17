(function($) {
    "use strict";

    var s = Snap("#nav"), 
        selectClass, 
        scrollTop,
        position, 
        eq;

    $(document).on("ready", function () {
        $(".snap-autoload").each(function () {
            var $self = $(this);
            Snap.load($self.data("src"), function (f) {
                window.f = f;
                Snap("#" + $self.attr("id")).append(f);
            });
        });
    });

    $("circle").on("click", function (e) {
        eq = Math.floor($(this).index() / 2);
        scrollTop = $("section").eq(eq).position().left + (200 * eq);
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
            s.selectAll("." + selectClass).attr({
                fill: "#006EBE",
                opacity: 1
            });
        }
    });
}(jQuery));