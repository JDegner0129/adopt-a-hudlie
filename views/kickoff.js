// Use this JS file for prototyping with kickoff.
// TODO make sure this syncs up with layout-main.js (and SVG replacer, etc in /code)

// Modernizr
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-flexbox-flexboxlegacy-opacity-rgba-cssanimations-csstransforms-csstransforms3d-csstransitions-input-inputtypes-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-forms_placeholder-load
 */

;window.Modernizr=function(a,b,c){function A(a){j.cssText=a}function B(a,b){return A(n.join(a+";")+(b||""))}function C(a,b){return typeof a===b}function D(a,b){return!!~(""+a).indexOf(b)}function E(a,b){for(var d in a){var e=a[d];if(!D(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function F(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:C(f,"function")?f.bind(d||b):f}return!1}function G(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return C(b,"string")||C(b,"undefined")?E(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),F(e,b,c))}function H(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)t[c[d]]=c[d]in k;return t.list&&(t.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),t}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),s[a[d]]=!!e;return s}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={},s={},t={},u=[],v=u.slice,w,x=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},y={}.hasOwnProperty,z;!C(y,"undefined")&&!C(y.call,"undefined")?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=v.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(v.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(v.call(arguments)))};return e}),r.flexbox=function(){return G("flexWrap")},r.flexboxlegacy=function(){return G("boxDirection")},r.rgba=function(){return A("background-color:rgba(150,255,150,.5)"),D(j.backgroundColor,"rgba")},r.opacity=function(){return B("opacity:.55"),/^0.55$/.test(j.opacity)},r.cssanimations=function(){return G("animationName")},r.csstransforms=function(){return!!G("transform")},r.csstransforms3d=function(){var a=!!G("perspective");return a&&"webkitPerspective"in g.style&&x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},r.csstransitions=function(){return G("transition")};for(var I in r)z(r,I)&&(w=I.toLowerCase(),e[w]=r[I](),u.push((e[w]?"":"no-")+w));return e.input||H(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)z(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},A(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.testProp=function(a){return E([a])},e.testAllProps=G,e.testStyles=x,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+u.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("placeholder",function(){return"placeholder"in(Modernizr.input||document.createElement("input"))&&"placeholder"in(Modernizr.textarea||document.createElement("textarea"))});

var svgReplace = function() {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');
};

var selectors = {
    doc: 'html',
    svgs: 'img[src$=".svg"]',
    mobileMenuButton: '.ko-nav-mobile-menu-button',
    navLink: '.ko-nav-main-item a',
    navLabel: '.ko-nav-label',
    navIcon: '.ko-nav-icon',
    teamSwitcher: '.ko-nav-team',
    teamName: '.ko-nav-team-name',
    subNavHeading: '.ko-sub-nav-heading',
    subNavHeadingTeam: '.ko-sub-nav-heading-current-team',
    // Checkboxes & Radios
    checkbox: '.ko-checkboxes li',
    radio: '.ko-radios li',
    mark: '.ko-choice-mark',
    checkboxGroup: '.ko-checkboxes',
    radioGroup: '.ko-radios',
};

var classes = {
    android: 'android-stock',
    windows: 'windows-phone',
    leftMenuIsOpen: 'ko-sidemenu-left-is-open',
    subNavActive: 'ko-nav-sub-is-active',
    teamSwitcherActive: 'ko-nav-teamswitcher-is-active',
    checked: 'ko-checked',
};

var directions = {
    left: 'left',
    right: 'right',
};

// A Few extra classes added to <html> element
var nua = navigator.userAgent;
// Android stock browser can't translateX with percentages, so we need a class to reference in the CSS
var isAndroidStock = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
var isWindowsPhone = nua.indexOf('IEMobile') > -1;

if (isAndroidStock) {
    $(selectors.doc).addClass(classes.android);
}

if (isWindowsPhone) {
    $(selectors.doc).addClass(classes.windows);
}

// Fix IE10 Mobile's handling of device-width viewports (which is a bug (self they're fixing (?))).
//  Via: http://timkadlec.com/2013/01/windows-phone-8-and-device-width/
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement('style');
    msViewportStyle.appendChild(
        document.createTextNode(
            '@-ms-viewport{width:auto!important}'
        )
    );
    document.getElementsByTagName('head')[0].
        appendChild(msViewportStyle);
}

$(document).ready(function () {

    // Run SVG Replacer on all the SVGs
    $(selectors.svgs).each(svgReplace);

    // Click the main menu button and show the menu
    $(selectors.mobileMenuButton).click(function () {
        $(selectors.doc).toggleClass(classes.leftMenuIsOpen);
    });

    // Function for shuttling the nav left and right.
    // heading = the selector with the text you want for the heading of the subnav
    // headingSelector = the class of the header at the top of the submenu list
    // self = a little trick to maintain context with the click event
    var shuttleNav = function(heading, classToAdd, headingSelector, leftOrRight, self){
        var headingText = $(self).children(heading).html(); // get the text from the top level nav item
        var theList = $(self).parent().children('ul'); // get the relevant subnav <ul>

        $(selectors.doc).addClass(classToAdd);

        theList.addClass(classToAdd);

        if (leftOrRight === directions.left) {
            theList.prepend('<a href="#" class="ko-sub-nav-heading"><img class="ko-nav-icon" src="/code/content/content/kickoff/icons/chevronleft.svg">' + headingText + '</a>');
        } else if (leftOrRight === directions.right) {
            theList.prepend('<a href="#" class="ko-sub-nav-heading-current-team">' + headingText + '<img class="ko-nav-icon" src="/code/content/content/kickoff/icons/chevronright.svg"></a>');
        }

        theList.find(selectors.navIcon).each(svgReplace);

        theList.one('click', headingSelector, function () {
            $(selectors.doc).removeClass(classToAdd);
            theList.removeClass(classToAdd);
            // remove the back label after the animation is done. animation duration is $t-quick in _variables.scss
            $(headingSelector).delay(200).queue(function (next) {
                $(this).remove();
                next();
            });
        });
    };

    // Actually run the function on the appropriate buttons
    $(selectors.navLink).click(function(){
        var self = this;
        shuttleNav(selectors.navLabel, classes.subNavActive, selectors.subNavHeading, directions.left, self);
    });

    // Actually run the function on the appropriate buttons
    $(selectors.teamSwitcher).click(function(){
        var self = this;
        shuttleNav(selectors.teamName, classes.teamSwitcherActive, selectors.subNavHeadingTeam, directions.right, self);
    });

    ////////////////////////
    // Forms and things
    ////////////////////////

    function showFieldLabels(e) {
        var field = $(e.target);
        if (field.val() || $('html').hasClass('trident')) {
            field.siblings('label').addClass('ko-active');
        } else {
            field.siblings('label').removeClass('ko-active');
        }
    }

    // Detect IE(8-11) - Even though it supports placeholder to the spec, it doesn't behave like the others
    //      currently and we can't force it, so we'll behave a little different.
    // if (navigator.userAgent.match(/Trident/i)) $('html').addClass('trident');

    // Add class on focus
    $('.ko-field input').focus(showFieldLabels);
    $('.ko-field input').keyup(showFieldLabels);
    $('.ko-field textarea').focus(showFieldLabels);
    $('.ko-field textarea').keyup(showFieldLabels);

    // Remove class on blur
    // Leave the label behind if they filled something out
    $('.ko-field input').blur(function () {
        if ($(this).val()) {
            $(this).siblings('label').removeClass('ko-active');
        } else {
            $(this).siblings('label').removeClass('ko-active');
        }
    });

    // Checkboxes & Radios

    // Put a checkbox in all the checkboxes
    $(selectors.checkbox).each(function(){
        $(this).find(selectors.mark).html('<svg viewBox="0 0 612 792"><polygon points="0,416.4 81.6,334.8 211,472 510,151.2 612,232.8 204,640.8 "/></svg>');
    });

    $(selectors.checkbox).click(function(){
        if ($(this).hasClass('disabled')) return;

        $(this).toggleClass(classes.checked);
    });

    // Radios - mutually exclusive
    $(selectors.radio).click(function(){
        if ($(this).hasClass('disabled')) return;

        $(this).siblings().removeClass(classes.checked);
        $(this).addClass(classes.checked);
    });

    // EVERYTHING AFTER THIS SPECIFIC TO THE DOCS

    var icons = [
        "accountsettings",
        "achievement",
        "activity",
        "add-fill",
        "add",
        "album",
        "annotation",
        "arrowdown-fill",
        "arrowdown",
        "arrowleft-fill",
        "arrowleft",
        "arrowright-fill",
        "arrowright",
        "arrowup-fill",
        "arrowup",
        "audio",
        "baseball",
        "basketball",
        "beginning",
        "blank-avatar",
        "blogpost",
        "browse",
        "calendar",
        "call",
        "cancel",
        "chat",
        "cheer",
        "chevronleft",
        "chevronright",
        "circle-empty",
        "circle",
        "circleempty",
        "clip",
        "clipboard",
        "clips",
        "close-fill",
        "close",
        "coach",
        "coed",
        "comment",
        "copy",
        "cricket",
        "css",
        "dance",
        "data",
        "delete",
        "diagram",
        "document",
        "doublearrowdown",
        "doublearrowleft",
        "doublearrowright",
        "doublearrowup",
        "doublechevrondown",
        "doublechevronleft",
        "doublechevronright",
        "doublechevronup",
        "download",
        "drawer",
        "dropdown",
        "dvd",
        "edit-fill",
        "edit",
        "end",
        "envelope",
        "exchange",
        "exitfullscreen",
        "export",
        "facebook",
        "fastforward",
        "ff15sec",
        "ff30sec",
        "ff5sec",
        "fieldhockey",
        "filter",
        "first",
        "flag",
        "folder",
        "fontsize",
        "football",
        "fullscreen",
        "fundraising",
        "github",
        "golf",
        "google+",
        "googleplus",
        "gridview",
        "group",
        "gymnastics",
        "hd",
        "help-fill",
        "help",
        "highlight",
        "hockey",
        "home",
        "html",
        "import",
        "info-fill",
        "info",
        "install",
        "javascript",
        "js",
        "lacrosse",
        "last",
        "launch",
        "lightbulb",
        "linechevronleft",
        "linechevronright",
        "lineclose",
        "linkedin",
        "listview",
        "livetag",
        "location",
        "lock",
        "logo",
        "logomark",
        "logotype",
        "logout",
        "message-open",
        "message",
        "messageopen",
        "modify-fill",
        "modify",
        "move",
        "music",
        "next",
        "nike",
        "pause",
        "peoplelist",
        "phone",
        "photo",
        "play",
        "playbook",
        "playcard",
        "playlist",
        "presentation",
        "previous",
        "print",
        "profilepic",
        "redo",
        "remote",
        "remove-fill",
        "remove",
        "rewind",
        "rugby",
        "rw15sec",
        "rw30sec",
        "rw5sec",
        "save-fill",
        "save",
        "sd",
        "search",
        "settings",
        "share",
        "soccer",
        "softball",
        "sort",
        "sortdown",
        "sortup",
        "sound",
        "spreadsheet",
        "stackoverflow",
        "swimming",
        "sync",
        "tennis",
        "thumbsdown",
        "thumbsup",
        "topplay",
        "trackandfield",
        "tutorial",
        "twitter",
        "undo",
        "unlock",
        "unshare",
        "upload",
        "useradded",
        "userf",
        "userlist",
        "userm",
        "video",
        "view",
        "volleyball",
        "waterpolo",
        "wrestling",
        "zoomin",
        "zoomout"
    ];

    $.each(icons, function(key, val) {
        $('.all-the-icons').append(
            "<div class='ko-icon-container'>"
            + "<img src='icons/"
            + val + ".svg'>" + "<div>" + val + "</div></div>"
        );
    });

    $(selectors.svgs).each(svgReplace);

});
