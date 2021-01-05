function findItemIndex (data, field) {
	//console.log(field);
	return data.findIndex(item => item.field === field); //findIndex: es6的方法
}

function scrollToPosition (target) {
	const offsetLeft = target.offsetLeft,
	      scrollEl = target.parentNode.parentNode;

	scrollEl.scrollTo(offsetLeft, 0);
}

export {
	findItemIndex,
	scrollToPosition
}