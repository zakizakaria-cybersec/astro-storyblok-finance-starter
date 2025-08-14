import { useStoryblokApi } from '@storyblok/astro'
const DEFAULT_LANG = import.meta.env.DEFAULT_LANG

const getLanguages = async () => {
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/spaces/me');

	// Merge default language with other languages and remove duplicates
	return Array.from(
		new Set([DEFAULT_LANG, ...data.space.language_codes])
	);
};

export { getLanguages };

const languages1 = {
	'en': 'English',
	'es': 'Español',
};

// Helper functions
function getLanguageCodes() {
	return Object.keys(languages1);
}

function getLanguageLabel(code) {
	return languages1[code];
}

function getTransLink(language, slug) {
	return language === DEFAULT_LANG ? slug : `/${language}${slug}`;
}

export { getTransLink, languages1, getLanguageCodes, getLanguageLabel };
