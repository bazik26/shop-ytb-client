import { generateSitemap } from 'next-sitemap'

;(async () => {
  try {
    await generateSitemap()
    console.log('✅ Sitemap успешно создан!')
  } catch (error) {
    console.error('❌ Ошибка генерации Sitemap:', error)
  }
})()
