/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);

/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2012 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.7.2
 *
 */
(function(a,b){$window=a(b),a.fn.lazyload=function(c){function f(){var b=0;d.each(function(){var c=a(this);if(e.skip_invisible&&!c.is(":visible"))return;if(!a.abovethetop(this,e)&&!a.leftofbegin(this,e))if(!a.belowthefold(this,e)&&!a.rightoffold(this,e))c.trigger("appear");else if(++b>e.failure_limit)return!1})}var d=this,e={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return c&&(undefined!==c.failurelimit&&(c.failure_limit=c.failurelimit,delete c.failurelimit),undefined!==c.effectspeed&&(c.effect_speed=c.effectspeed,delete c.effectspeed),a.extend(e,c)),$container=e.container===undefined||e.container===b?$window:a(e.container),0===e.event.indexOf("scroll")&&$container.bind(e.event,function(a){return f()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,c.one("appear",function(){if(!this.loaded){if(e.appear){var f=d.length;e.appear.call(b,f,e)}a("<img />").bind("load",function(){c.hide().attr("src",c.data(e.data_attribute))[e.effect](e.effect_speed),b.loaded=!0;var f=a.grep(d,function(a){return!a.loaded});d=a(f);if(e.load){var g=d.length;e.load.call(b,g,e)}}).attr("src",c.data(e.data_attribute))}}),0!==e.event.indexOf("scroll")&&c.bind(e.event,function(a){b.loaded||c.trigger("appear")})}),$window.bind("resize",function(a){f()}),f(),this},a.belowthefold=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.height()+$window.scrollTop():e=$container.offset().top+$container.height(),e<=a(c).offset().top-d.threshold},a.rightoffold=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.width()+$window.scrollLeft():e=$container.offset().left+$container.width(),e<=a(c).offset().left-d.threshold},a.abovethetop=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.scrollTop():e=$container.offset().top,e>=a(c).offset().top+d.threshold+a(c).height()},a.leftofbegin=function(c,d){var e;return d.container===undefined||d.container===b?e=$window.scrollLeft():e=$container.offset().left,e>=a(c).offset().left+d.threshold+a(c).width()},a.inviewport=function(b,c){return!a.rightofscreen(b,c)&&!a.leftofscreen(b,c)&&!a.belowthefold(b,c)&&!a.abovethetop(b,c)},a.extend(a.expr[":"],{"below-the-fold":function(c){return a.belowthefold(c,{threshold:0,container:b})},"above-the-top":function(c){return!a.belowthefold(c,{threshold:0,container:b})},"right-of-screen":function(c){return a.rightoffold(c,{threshold:0,container:b})},"left-of-screen":function(c){return!a.rightoffold(c,{threshold:0,container:b})},"in-viewport":function(c){return!a.inviewport(c,{threshold:0,container:b})},"above-the-fold":function(c){return!a.belowthefold(c,{threshold:0,container:b})},"right-of-fold":function(c){return a.rightoffold(c,{threshold:0,container:b})},"left-of-fold":function(c){return!a.rightoffold(c,{threshold:0,container:b})}})})(jQuery,window)

$(function() {
     $("img").lazyload({
         threshold : 400,
         effect : "fadeIn"

     });
 });
