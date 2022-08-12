var r = document.querySelector(':root');
    
function themeColor_set() {
  var rs = getComputedStyle(r);
    var colorOr = rs.getPropertyValue('--bg-color');
    
  if (colorOr == '#1A191E') {
      r.style.setProperty('--bg-color', '#F3F6F9');
      r.style.setProperty('--text-color', '#1A191E');
      r.style.setProperty('--accent-color', '#5566ff');

    } else {
      r.style.setProperty('--bg-color', '#1A191E');
      r.style.setProperty('--text-color', '#F3F6F9');
      r.style.setProperty('--accent-color', '#00e0e0');

    }
}

var tooltipSpan1 = document.getElementById('tooltip-span-1');
var tooltipSpan2 = document.getElementById('tooltip-span-2');
var tooltipSpan3 = document.getElementById('tooltip-span-3');
var tooltipSpan4 = document.getElementById('tooltip-span-4');
var tooltipSpan5 = document.getElementById('tooltip-span-5');

const isHoverableDevice = window.matchMedia('(hover: hover) and (pointer: fine)')

function isTouchDevice() {
    return ( 'ontouchstart' in window ) ||
            ( navigator.maxTouchPoints > 0 ) ||
            ( navigator.msMaxTouchPoints > 0 );
    } 

    function changeCSS(cssFile, cssLinkIndex) {
        var buttonFile = document.getElementsByTagName("link").item(cssLinkIndex);
        buttonFile.setAttribute('href', cssFile);
    }       
   
   if( isHoverableDevice.matches ) {
    
        window.onmousemove = function (e) {
            var x1 = e.clientX,
                y1 = e.clientY;
            tooltipSpan1.style.top = (y1 + 6) + 'px';
            tooltipSpan1.style.left = (x1 + 6) + 'px';

            var x2 = e.clientX,
                y2 = e.clientY;
            tooltipSpan2.style.top = (y2 + 6) + 'px';
            tooltipSpan2.style.left = (x2 + 6) + 'px';

            var x3 = e.clientX,
                y3 = e.clientY;
            tooltipSpan3.style.top = (y3 + 6) + 'px';
            tooltipSpan3.style.left = (x3 + 6) + 'px';

            var x4 = e.clientX,
                y4 = e.clientY;
            tooltipSpan4.style.top = (y4 + 6) + 'px';
            tooltipSpan4.style.left = (x4 + 6) + 'px';

            var x5 = e.clientX,
                y5 = e.clientY;
            tooltipSpan5.style.top = (y5 + 6) + 'px';
            tooltipSpan5.style.left = (x5 + 6) + 'px';
        };       
        
    } else {
        
        changeCSS('button-touch.css', 2);

    }

