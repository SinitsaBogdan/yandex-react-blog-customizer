import { useEffect } from 'react';

export function useToggleFormActiv(
	callback: React.EffectCallback,
	element: string,
	deps: boolean
) {
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			e.key == 'Escape' && callback();
		};

		const handleClickOverlay = (e: MouseEvent) => {
			const result = e
				.composedPath()
				.find(
					(item) =>
						item === document.querySelector(`[data-element="${element}"`)
				);

			if (deps && result !== undefined) {
				callback();
			}
		};

		document.addEventListener('keydown', handleEscape);
		document.addEventListener('click', handleClickOverlay);

		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.removeEventListener('click', handleClickOverlay);
		};
	}, [deps]);
}
