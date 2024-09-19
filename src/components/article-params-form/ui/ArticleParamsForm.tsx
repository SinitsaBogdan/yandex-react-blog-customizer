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
	defaultArticleState,
	fontColorOptions,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';

import styles from '../styles/ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { useToggleFormActiv } from '../hooks/useToggleFormActiv';

export const ArticleParamsForm = ({
	updateAppState,
}: {
	updateAppState: (value: ArticleStateType) => void;
}) => {
	const [articleState, setArticleState] = useState(defaultArticleState);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const asideStyle = clsx({
		[styles.container]: true,
		[styles.container_open]: isOpen,
	});

	useToggleFormActiv(onClose, 'article', isOpen);

	function onClose() {
		setIsOpen(false);
	}

	function handleFormClear(): void {
		setArticleState(defaultArticleState);
		updateAppState(defaultArticleState);
	}

	function handleFormSubmit(event: React.FormEvent): void {
		event.preventDefault();
		updateAppState(articleState);
	}

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			/>
			<aside className={asideStyle}>
				<form className={styles.form} onSubmit={handleFormSubmit}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>

					<Select
						title='Шрифт'
						selected={articleState.fontFamilyOption}
						options={fontFamilyOptions}
						placeholder='Выберете шрифт'
						onChange={(event) => {
							setArticleState({
								...articleState,
								fontFamilyOption: event,
							});
						}}
					/>
					<Select
						title='Размер шрифта'
						selected={articleState.fontSizeOption}
						options={fontSizeOptions}
						placeholder='Выберете размер шрифта'
						onChange={(event) => {
							setArticleState({
								...articleState,
								fontSizeOption: event,
							});
						}}
					/>

					<Select
						title='Цвет шрифта'
						selected={articleState.fontColorOption}
						options={fontColorOptions}
						placeholder='Выберете цвет шрифта'
						onChange={(event) => {
							setArticleState({
								...articleState,
								fontColorOption: event,
							});
						}}
					/>

					<Separator />

					<Select
						title='Цвет фона'
						selected={articleState.backgroundColorOption}
						options={backgroundColorOptions}
						placeholder='Выберете цвет фона'
						onChange={(event) => {
							setArticleState({
								...articleState,
								backgroundColorOption: event,
							});
						}}
					/>

					<Select
						title='Ширина контента'
						selected={articleState.contentWidthOption}
						options={contentWidthOptions}
						placeholder='Выберете ширину контента'
						onChange={(event) => {
							setArticleState({
								...articleState,
								contentWidthOption: event,
							});
						}}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={handleFormClear} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
