function RepositionNav(){var a=$(window).height();var b=$("#nav").height()/2;var c=a/2;var d=c-b;$("#nav").css({top:d})}(function(a){a.fn.parallax=function(b,c,d,e){function f(b,c){c.each(function(){var c=a(this);var d=c.offset().top;if(e==true){var f=c.outerHeight(true)}else{var f=c.height()}if(d+f>=b&&d+f-h<b){l(b,f)}if(d<=b&&d+f>=b&&d-h<b&&d+f-h>b){l(b,f)}if(d+f>b&&d-h<b&&d>b){l(b,f)}})}function k(a,b,c,d,e){return a+" "+Math.round(-(b+c-d)*e)+"px"}function l(a,e){j.css({backgroundPosition:k(b,e,a,c,d)})}var g=a(window);var h=a(window).height();var i=g.scrollTop();var j=a(this);if(b==null){b="50%"}if(c==null){c=0}if(d==null){d=.1}if(e==null){e=true}height=j.height();j.css({backgroundPosition:k(b,e,c,d)});g.bind("scroll",function(){var b=g.scrollTop();f(b,j);a("#pixels").html(b)})}})(jQuery)