import { useState, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { defaultArticleState } from './../../constants/articleProps';
import type { ArticleStateType } from './../../constants/articleProps';

import styles from './app.module.scss';

export const App = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [articleState, setArticleState] =
		useState<ArticleStateType>(defaultArticleState);
	const [formState, setFormState] =
		useState<ArticleStateType>(defaultArticleState);
	const handleToggleSidebar = () => setIsOpen((prev) => !prev);
	const handleApply = () => setArticleState(formState);
	const handleReset = () => {
		setFormState(defaultArticleState);
		setArticleState(defaultArticleState);
	};
	const handleChange = (newState: ArticleStateType) => setFormState(newState);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				isOpen={isOpen}
				onToggle={handleToggleSidebar}
				formState={formState}
				onChange={handleChange}
				onApply={handleApply}
				onReset={handleReset}
			/>
			<Article />
		</main>
	);
};
