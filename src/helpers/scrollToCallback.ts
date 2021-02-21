export function scrollToCallback(
	ref: Window | HTMLElement | null,
	scrollOptions: ScrollToOptions,
	callBack: () => void
): void {
	if (ref && ref !== window) {
		ref.scrollTo(scrollOptions);
		function atTop(): void {
			if (
				(ref instanceof HTMLElement && ref.scrollTop === 0) ||
				(ref instanceof Window && window.scrollY === 0)
			) {
				setTimeout(() => {
					callBack();
				}, 0);
				return;
			}
			requestAnimationFrame(atTop);
		}
		requestAnimationFrame(atTop);
	}
}
