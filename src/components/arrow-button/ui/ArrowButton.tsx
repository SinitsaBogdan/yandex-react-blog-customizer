import arrow from 'src/images/arrow.svg';

import styles from '../styles/ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export const ArrowButton = ({
	isOpen = false,
	onClick,
}: {
	isOpen?: boolean;
	onClick?: OnClick;
}) => {
	const buttonStyle = clsx({
		[styles.container]: true,
		[styles.container_open]: isOpen,
	});

	const buttonArrowStyle = clsx({
		[styles.arrow]: true,
		[styles.arrow_open]: isOpen,
	});

	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={buttonStyle}
			onClick={onClick}>
			<img src={arrow} alt='иконка стрелочки' className={buttonArrowStyle} />
		</div>
	);
};
