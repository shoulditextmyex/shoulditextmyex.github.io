$( document ).ready(function() {

  var tooltipSpan = document.getElementById('tooltip-span');

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    tooltipSpan.style.top = (y - 200) + 'px';
    tooltipSpan.style.left = (x - 40) + 'px';
};
});
