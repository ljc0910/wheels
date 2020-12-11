function cssHelper(el, prototype) {
  for (let i in prototype) {
	el.style[i] = prototype[i]
  }
}
const waterHeight = 100;
const waterWidth = 180;
const { clientWidth, clientHeight } = document.documentElement || document.body;
const column = Math.ceil(clientWidth / waterWidth);
const rows = Math.ceil(clientHeight / waterHeight);
for(let i = 0; i<rows;i++){
	for(let j = 0;j<column;j++){
		const item = document.createElement('div')
		item.innerHTML = 'dom水印'
		cssHelper(item, {
		  pointerEvents:'none',
		  position: 'fixed',
		  top: `${100*i+30}px`,
		  left: `${180*j}px`,
		  fontSize: `16px`,
		  color: '#000',
		  lineHeight: 1.5,
		  opacity: 0.2,
		  transform: `rotate(-25deg)`,
		  transformOrigin: '0 0',
		  userSelect: 'none',
		  whiteSpace: 'nowrap',
		  overflow: 'hidden',
		})
		document.body.appendChild(item)
	}
}