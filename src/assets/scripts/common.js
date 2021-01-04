// http://txcourse.jsplusplus.com/
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';

window.addEventListener('load', function () {
  FastClick.attach(document.body);
}, false);

/**
 * 阻止多指触控事件
 */
document.documentElement.addEventListener('touchmove', function (e) {
  if (e.touches.length > 1) {//e.touches.length > 1表示不止一个手指在屏幕上滑动
   	e.preventDefault();
  }
}, false);