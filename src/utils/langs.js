let languages = ['en', 'es']

const languages1 = {
  'en': 'English',
  'es': 'Español',
}

function getTransLink(language, slug) {
  return language === 'en' ? slug : `/${language}${slug}`
}

// Helper functions
function getLanguageCodes() {
  return Object.keys(languages1)
}

function getLanguageLabel(code) {
  return languages1[code]
}

export { getTransLink, languages, languages1, getLanguageCodes, getLanguageLabel }
