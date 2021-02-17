export function scrollToCallback(scrollOptions: ScrollToOptions, callBack: () => void): void {
	window.scrollTo(scrollOptions);
	function atTop() {
		if (window.scrollY === 0) {
			setTimeout(() => {
				callBack();
			}, 100);
			return;
		}
		requestAnimationFrame(atTop);
	}
	requestAnimationFrame(atTop);
}
