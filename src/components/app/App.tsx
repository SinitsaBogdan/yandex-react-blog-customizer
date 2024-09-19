import { CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { defaultArticleState } from 'src/constants/articleProps';

import { ArticleParamsForm } from '../article-params-form/ui/ArticleParamsForm';
import { Article } from '../article/ui/Article';

import styles from './styles/index.module.scss';
import './styles/index.scss';

export const App = () => {
	const [appState, setAppState] = useState(defaultArticleState);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': appState.fontFamilyOption.value,
					'--font-size': appState.fontSizeOption.value,
					'--font-color': appState.fontColorOption.value,
					'--container-width': appState.contentWidthOption.value,
					'--bg-color': appState.backgroundColorOption.value,
				} as CSSProperties
			}>
			<ArticleParamsForm updateAppState={setAppState} />
			<Article />
		</div>
	);
};
