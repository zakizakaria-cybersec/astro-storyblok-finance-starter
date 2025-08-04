import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import tailwind from '@astrojs/tailwind'
import basicSsl from '@vitejs/plugin-basic-ssl'
const env = loadEnv('', process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      apiOptions: {
        region: '',
      },
      bridge: {
        customParent: 'https://app.storyblok.com',
      },
      components: {
        page: 'storyblok/Page',
        button: 'storyblok/Button',
        heading: 'storyblok/Heading',
        partners_section: 'storyblok/PartnersSection',
        hero: 'storyblok/Hero',
        banner_split: 'storyblok/BannerSplit',
        features_section: 'storyblok/FeaturesSection',
        stats_section: 'storyblok/StatsSection',
        reports_section: 'storyblok/ReportsSection',
        reports_list: 'storyblok/ReportsList',
        report: 'storyblok/Report',
        team_section: 'storyblok/TeamSection',
        testimonials_section: 'storyblok/TestimonialsSection',
        advisers_section: 'storyblok/AdvisersSection',
        banner_cta: 'storyblok/BannerCta',
      },
    }),
    tailwind(),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
})
