import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from '../styles/ArticleParamsForm.module.scss';
import { useState } from 'react';
import { Select } from 'src/components/select';
import { fontFamilyOptions, OptionType } from 'src/constants/articleProps';

export const ArticleParamsForm = () => {
	const [selectedFonts, setselectedFonts] = useState<OptionType | null>(null);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const classNameAside = `${styles.container} ${
		isOpen && styles.container_open
	}`;

	function handlerOnClick(): void {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handlerOnClick} />
			<aside className={classNameAside}>
				<form className={styles.form}>
					<Select
						selected={selectedFonts}
						options={fontFamilyOptions}
						placeholder='Выберете шрифт'
						onChange={(event) => {
							setselectedFonts(event);
						}}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handlerOnClick} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
