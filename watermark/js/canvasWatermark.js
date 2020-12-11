import watchDom from './watchDom.js'
function cssHelper(el, prototype) {
  for (let i in prototype) {
	el.style[i] = prototype[i]
  }
}
function createWaterMark() {
  const angle = -20;
  const txt = 'canvas水印'
  const canvas = document.createElement('canvas');
  canvas.width = 180;
  canvas.height = 100;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 180, 100);
  ctx.fillStyle = '#000';
  ctx.globalAlpha = 0.2;
  ctx.font = `16px serif`
  ctx.rotate(Math.PI / 180 * angle);
  ctx.fillText(txt, 0, 50);
  return canvas.toDataURL();
}
function initWatermakr(){
	if(document.getElementById('watermark')){
		document.getElementById('watermark').remove()
	}
	const watermakr = document.createElement('div');
	watermakr.id = 'watermark';
	cssHelper(watermakr, {
	  position: 'fixed',
	  top: '0px',
	  right: '0px',
	  bottom: '0px',
	  left: '0px',
	  pointerEvents: 'none',
	  backgroundRepeat: 'repeat'
	})
	watermakr.style.backgroundImage = `url(${createWaterMark()})`
	document.body.appendChild(watermakr);
	watchDom('watermark',initWatermakr)
}
initWatermakr()