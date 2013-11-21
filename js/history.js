/* global Snap */
(function ($) {
    'use strict';

    var s = new Snap('#nav'),
        loadingReady,
        selectClass,
        scrollTop,
        position,
        eq;

    $(document).on('ready', function () {
        loadingReady = 0;
        $('.snap-autoload').each(function () {
            var $self = $(this);
            Snap.load($self.data('src'), function (f) {
                window.f = f;
                new Snap('#' + $self.attr('id')).append(f);
                loadingReady += 1;
                if (loadingReady === 3) {
                    runAnimations();
                }
            });
        });
    });

    var runAnimations = function () {
        // Snap('#obj_03').selectAll('g:nth-of-type(2)')[0].animate({
        //     transform: 'rotate(30deg)'
        //     transform: 'r44,44'
        // }, 5000, mina.backin);
    };

    $('circle').on('click', function () {
        eq = Math.floor($(this).index() / 2);
        scrollTop = $('section').eq(eq).position().left + (200 * eq);
        $('html, body').animate({
            scrollTop: scrollTop
        }, 400);
    });


    $.jInvertScroll(['.scroll'], {
        // height: 6000,
        onScroll: function (percent) {
            position = (Math.floor(percent * 100 / 12.5) + 1);
            position = (position < 0) ? 1 : (position > 8) ? 8 : position;
            selectClass = 'a' + (position);
            s.selectAll('circle, rect').attr({
                fill: '#666666',
                opacity: 0.5
            });
            s.selectAll('.' + selectClass).attr({
                fill: '#006EBE',
                opacity: 1
            });
        }
    });
}(jQuery));