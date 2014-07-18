(function(window, document, undefined)
{

    // helper functions

    var trim = function(str)
    {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g,'');
    };

    var hasClass = function(el, cn)
    {
        return (' ' + el.className + ' ').indexOf(' ' + cn + ' ') !== -1;
    };

    var addClass = function(el, cn)
    {
        if (!hasClass(el, cn)) {
            el.className = (el.className === '') ? cn : el.className + ' ' + cn;
        }
    };

    var removeClass = function(el, cn)
    {
        el.className = trim((' ' + el.className + ' ').replace(' ' + cn + ' ', ' '));
    };

    var hasParent = function(el, id)
    {
        if (el) {
            do {
                if (el.id === id) {
                    return true;
                }
                if (el.nodeType === 9) {
                    break;
                }
            }
            while((el = el.parentNode));
        }
        return false;
    };

    // normalize vendor prefixes

    var doc = document.documentElement;

    var transform_prop = window.Modernizr.prefixed('transform'),
        transition_prop = window.Modernizr.prefixed('transition'),
        transition_end = (function() {
            var props = {
                'WebkitTransition' : 'webkitTransitionEnd',
                'MozTransition'    : 'transitionend',
                'OTransition'      : 'oTransitionEnd otransitionend',
                'msTransition'     : 'MSTransitionEnd',
                'transition'       : 'transitionend'
            };
            return props.hasOwnProperty(transition_prop) ? props[transition_prop] : false;
        })();

    window.App = (function()
    {

        var _init = false, app = { };

        var inner = document.getElementById('js-inner-wrap'),

            nav_open = false,

            nav_class = 'nav-is-open';


        app.init = function()
        {
            if (_init) {
                return;
            }
            _init = true;

            var closeNavEnd = function(e)
            {
                if (e && e.target === inner) {
                    document.removeEventListener(transition_end, closeNavEnd, false);
                }
                nav_open = false;
            };

            app.closeNav =function()
            {
                if (nav_open) {
                    // close navigation after transition or immediately
                    var duration = (transition_end && transition_prop) ? parseFloat(window.getComputedStyle(inner, '')[transition_prop + 'Duration']) : 0;
                    if (duration > 0) {
                        document.addEventListener(transition_end, closeNavEnd, false);
                    } else {
                        closeNavEnd(null);
                    }
                }
                removeClass(doc, nav_class);
            };

            app.openNav = function()
            {
                if (nav_open) {
                    return;
                }
                addClass(doc, nav_class);
                nav_open = true;
            };

            app.toggleNav = function(e)
            {
                if (nav_open && hasClass(doc, nav_class)) {
                    app.closeNav();
                } else {
                    app.openNav();
                }
                if (e) {
                    e.preventDefault();
                }
            };

            // open nav with main "nav" button
            document.getElementById('nav-open-btn').addEventListener('click', app.toggleNav, false);

            // close nav with main "close" button
            document.getElementById('nav-close-btn').addEventListener('click', app.toggleNav, false);

            // close nav by touching the partial off-screen content
            document.addEventListener('click', function(e)
                {
                    if (nav_open && !hasParent(e.target, 'nav')) {
                        e.preventDefault();
                        app.closeNav();
                    }
                },
                true);

            addClass(doc, 'js-ready');

        };

        return app;

    })();

    if (window.addEventListener) {
        window.addEventListener('DOMContentLoaded', window.App.init, false);
    }

})(window, window.document);


/*
 * Detect Browser Width
*/

// On Page Load
$(window).ready(function() {
    var wi = $(window).width();
    if (wi <= 980){

       $( "li.nav__item > div" ).removeClass( "dropdown" ).addClass( "off-canvas-desk-is-collapsed" );
       //Click To Open Off Canvas Main Nav
       $( "li.nav__item > a.primary-link" ).unbind("click");
       $( "li.nav__item > a.primary-link" ).click(function(e){
       		 e.preventDefault();
           $( "li.nav__item > div" ).removeClass( "off-canvas-desk-is-open");
           $(this).siblings("div").addClass( "off-canvas-desk-is-open" );
           $(this).unbind("click");
       });

    }
    else {
        $( "li.nav__item > div" ).removeClass( "off-canvas-desk-is-open off-canvas-desk-is-collapsed" ).addClass( "dropdown" );
    }
    // On Window Resize
    $(window).resize(function() {
        var wi = $(window).width();

        if (wi <= 980){
        		console.log("<= 980)");
            $( "li.nav__item > div" ).removeClass( "dropdown" ).addClass( "off-canvas-desk-is-collapsed" );
            //Click To Open Off Canvas Main Nav
            $( "li.nav__item > a.primary-link" ).unbind("click");
						$( "li.nav__item > a.primary-link" ).click(function(e){
								e.preventDefault();
                $( "li.nav__item > div" ).removeClass( "off-canvas-desk-is-open");
                $(this).siblings("div").addClass( "off-canvas-desk-is-open" );
            });

        }
        else {
            $( "li.nav__item > div" ).removeClass( "off-canvas-desk-is-open off-canvas-desk-is-collapsed" ).addClass( "dropdown" );
            $( "li.nav__item > a.primary-link" ).unbind("click");
        }
    });
});