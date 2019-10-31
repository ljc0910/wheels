export function Scrollbaranimation(dom, num) {
  if (dom) {
    num = document.getElementById(dom).offsetTop;
  }
  var T = setTimeout(() => {
    if (document.body.scrollTop + document.documentElement.scrollTop < num) {
      document.body.scrollTop = document.body.scrollTop + num / 40;
      document.documentElement.scrollTop =
        document.documentElement.scrollTop + num / 40;
      if (document.body.scrollTop + document.documentElement.scrollTop > num) {
        document.body.scrollTop = num;
        document.documentElement.scrollTop = num;
      }
      Scrollbaranimation(null, num);
    } else {
      clearTimeout(T);
    }
  }, 5);
}
/*
  auther:jc
  verson:1.0
  introduce:锚点滚动条动画，兼容H5（android和ios）、web
*/
