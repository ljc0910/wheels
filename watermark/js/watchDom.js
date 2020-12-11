 export default function watchDom(dom,cb){
	const targetNode = document.getElementById(dom);
	// 观察器的配置（需要观察什么变动）
	const config = { attributes: true, childList: true, subtree: true };
	// 当观察到变动时执行的回调函数
	const callback = function(mutationsList, observer) {
		// Use traditional 'for loops' for IE 11
		for(let mutation of mutationsList) {
			if (mutation.type === 'childList') {
				console.log('A child node has been added or removed.');
				cb()
			}
			else if (mutation.type === 'attributes') {
				console.log('The ' + mutation.attributeName + ' attribute was modified.');
				cb()
			}
		}
	};
	// 创建一个观察器实例并传入回调函数
	const observer = new MutationObserver(callback);
	// 以上述配置开始观察目标节点
	observer.observe(targetNode, config);
}
