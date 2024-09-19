import { CSSProperties, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { defaultArticleState } from 'src/constants/articleProps';

import { ArticleParamsForm } from '../article-params-form/ui/ArticleParamsForm';
import { Article } from '../article/ui/Article';

import styles from './styles/index.module.scss';
import './styles/index.scss';

export const App = () => {
	const dom = useRef<HTMLDivElement | null>(null);
	const [isClear, setClear] = useState(false);
	const [articleState, setArticleState] = useState(defaultArticleState);

	useEffect(() => {
		if (isClear) {
			handlerOnClickToSave();
			setClear(false);
		}
	});

	function handlerOnClickToClear(): void {
		setArticleState(defaultArticleState);
		setClear(true);
	}

	function handlerOnClickToSave(): void {
		dom.current?.style.setProperty(
			'--font-family',
			articleState.fontFamilyOption.value
		);
		dom.current?.style.setProperty(
			'--font-size',
			articleState.fontSizeOption.value
		);
		dom.current?.style.setProperty(
			'--font-color',
			articleState.fontColorOption.value
		);
		dom.current?.style.setProperty(
			'--container-width',
			articleState.contentWidthOption.value
		);
		dom.current?.style.setProperty(
			'--bg-color',
			articleState.backgroundColorOption.value
		);
	}

	return (
		<div
			className={clsx(styles.main)}
			ref={dom}
			style={
				{
					'--font-family': defaultArticleState.fontFamilyOption.value,
					'--font-size': defaultArticleState.fontSizeOption.value,
					'--font-color': defaultArticleState.fontColorOption.value,
					'--container-width': defaultArticleState.contentWidthOption.value,
					'--bg-color': defaultArticleState.backgroundColorOption.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				state={articleState}
				setState={setArticleState}
				clear={handlerOnClickToClear}
				save={handlerOnClickToSave}
			/>
			<Article />
		</div>
	);
};
