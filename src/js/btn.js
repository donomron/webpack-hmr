function init() {
	const btn = document.getElementById('btn');
	btn.addEventListener('click', onClick);

	if(module.hot){
		module.hot.dispose(() => btn.removeEventListener('click', onClick));
	}
}

function onClick(){
	console.log('button clicked 🤓');
}

init();