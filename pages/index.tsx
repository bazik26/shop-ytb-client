// import AuthPage from '@/components/templates/AuthPage/AuthPage'
// import DashboardPage from '@/components/templates/DashboardPage/DashboardPage'
// import useRedirectByUserCheck from '@/hooks/useRedirectByUserCheck'
// import Head from 'next/head'

// function Auth() {
//   const { shouldLoadContent } = useRedirectByUserCheck(true)

//   return (
//     <>
//       <Head>
//         <title>Аква Термикс | {shouldLoadContent ? 'Авторизация' : ''}</title>
//         <meta charSet="UTF-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link rel="icon" type="image/svg" sizes="32x32" href="/img/logo.svg" />
//       </Head>
//       {shouldLoadContent && <AuthPage />}

//     </>
//   )
// }

// export default Auth

/* eslint-disable max-len */

import { NextSeo } from 'next-seo'
import Layout from '@/components/layout/Layout'
import DashboardPage from '@/components/templates/DashboardPage/DashboardPage'
import useRedirectByUserCheck from '@/hooks/useRedirectByUserCheck'
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'

function Dashboard() {
  const { shouldLoadContent } = useRedirectByUserCheck()
  const metaTitle = shouldLoadContent
    ? 'Cars Euro – Купить авто из Европы под заказ'
    : 'Cars Euro'
  const metaDescription =
    'Ваш надёжный партнёр в мире автомобилей. Предлагаем широкий выбор европейских авто по доступным ценам. Узнайте больше на нашем сайте.'

  return (
    <>
      <NextSeo
        title={metaTitle}
        description={metaDescription}
        canonical="https://cars-euro.com/"
        openGraph={{
          title: metaTitle,
          description: metaDescription,
          url: 'https://cars-euro.com/',
          type: 'website',
          locale: 'ru_RU',
          site_name: 'Cars Euro',
          images: [
            {
              url: 'https://cars-euro.com/img/logo.png',
              width: 1200,
              height: 630,
              alt: 'Cars Euro',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content:
              'авто из Европы, купить авто, автомобили, продажа авто, автопригон',
          },
          {
            name: 'author',
            content: 'Cars Euro',
          },
          {
            name: 'robots',
            content: 'index, follow',
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/apple-touch-icon.png',
          },
          {
            rel: 'manifest',
            href: '/site.webmanifest',
          },
        ]}
      />

      {shouldLoadContent && (
        <Layout>
          <main>
            <Breadcrumbs
              getDefaultTextGenerator={() => ''}
              getTextGenerator={() => ''}
            />
            <DashboardPage />
            <div className="overlay" />
          </main>
        </Layout>
      )}
    </>
  )
}

export default Dashboard
