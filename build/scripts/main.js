!function(a){"use strict";var b;a(document).on("ready",function(){b=["img/bg/02.jpg"],a("#home").css("background-image","url("+b[Math.floor(Math.random()*b.length)]+")")}),a(document).on("scroll",function(){var b=a(document).scrollTop(),c=b/(a(document).height()-140)*4;a(".nav ul li").each(function(b){b===Math.floor(c)?a(this).addClass("active"):a(this).removeClass("active")}),b>300?a("#logo").addClass("hide"):a("#logo").removeClass("hide"),a("#home").css("background-position-y",b/2)}),a("#menu_mob").on("click",function(b){b.preventDefault(),a(".nav").toggleClass("visible")}),a("#btn-history").on("click",function(b){b.preventDefault(),a(".txt-history").toggleClass("visible")}),a("a[href*=#]").on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b,c=a(this.hash);if(c=c.length&&c||a("[name="+this.hash.slice(1)+"]"),c.length)return b=c.offset().top,a("html, body").animate({scrollTop:b},400),!1}})}(jQuery);