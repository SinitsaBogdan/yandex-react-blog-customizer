import { useState } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'src/components/text';
import { Select } from 'src/components/select';
import { Separator } from 'src/components/separator';
import {
	ArticleStateType,
	backgroundColorOptions,
	contentWidthOptions,
	fontColorOptions,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';

import styles from '../styles/ArticleParamsForm.module.scss';
import clsx from 'clsx';

export const ArticleParamsForm = ({
	state,
	setState,
	clear,
	save,
}: {
	state: ArticleStateType;
	setState: React.Dispatch<React.SetStateAction<ArticleStateType>>;
	clear: () => void;
	save: () => void;
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const asideStyle = clsx({
		[styles.container]: true,
		[styles.container_open]: isOpen,
	});

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			/>
			<aside className={asideStyle}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>

					<Select
						title='Шрифт'
						selected={state.fontFamilyOption}
						options={fontFamilyOptions}
						placeholder='Выберете шрифт'
						onChange={(event) => {
							setState({
								...state,
								fontFamilyOption: event,
							});
						}}
					/>
					<Select
						title='Размер шрифта'
						selected={state.fontSizeOption}
						options={fontSizeOptions}
						placeholder='Выберете размер шрифта'
						onChange={(event) => {
							setState({
								...state,
								fontSizeOption: event,
							});
						}}
					/>

					<Select
						title='Цвет шрифта'
						selected={state.fontColorOption}
						options={fontColorOptions}
						placeholder='Выберете цвет шрифта'
						onChange={(event) => {
							setState({
								...state,
								fontColorOption: event,
							});
						}}
					/>

					<Separator />

					<Select
						title='Цвет фона'
						selected={state.backgroundColorOption}
						options={backgroundColorOptions}
						placeholder='Выберете цвет фона'
						onChange={(event) => {
							setState({
								...state,
								backgroundColorOption: event,
							});
						}}
					/>

					<Select
						title='Ширина контента'
						selected={state.contentWidthOption}
						options={contentWidthOptions}
						placeholder='Выберете ширину контента'
						onChange={(event) => {
							setState({
								...state,
								contentWidthOption: event,
							});
						}}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={clear} />
						<Button title='Применить' type='button' onClick={save} />
					</div>
				</form>
			</aside>
		</>
	);
};
