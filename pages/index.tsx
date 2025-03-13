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

import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import DashboardPage from '@/components/templates/DashboardPage/DashboardPage'
import useRedirectByUserCheck from '@/hooks/useRedirectByUserCheck'
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'

function Dashboard() {
  const { shouldLoadContent } = useRedirectByUserCheck()
  const getDefaultTextGenerator = () => ''
  const getTextGenerator = () => ''

  return (
    <>
      <Head>
        <title>
          {shouldLoadContent
            ? 'Cars Euro – Купить авто из Европы под заказ'
            : 'Cars Euro'}
        </title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://cars-euro.com/" />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/img/logo.png" />

        {/* SEO МЕТАТЕГИ */}
        <meta
          name="description"
          content="Ваш надёжный партнёр в мире автомобилей.
          Предлагаем широкий выбор европейских авто по доступным ценам. Узнайте больше на нашем сайте."
        />
        <meta
          name="keywords"
          content="авто из Европы, купить авто, автомобили, продажа авто, автопригон"
        />
        <meta name="author" content="Cars Euro" />

        {/* Управление индексированием */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph (для соцсетей) */}
        <meta property="og:title" content="Cars Euro – Автомобили из Европы" />
        <meta
          property="og:description"
          content="Купить авто из Европы по выгодной цене с гарантией качества!"
        />
        <meta property="og:image" content="/img/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://cars-euro.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />

        {/* Twitter Card (для Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cars Euro – Продажа автомобилей из Европы"
        />
        <meta
          name="twitter:description"
          content="Надёжный автопригон и продажа авто из Европы."
        />
        <meta name="twitter:image" content="/img/logo.png" />
      </Head>

      {shouldLoadContent && (
        <Layout>
          <main>
            <Breadcrumbs
              getDefaultTextGenerator={getDefaultTextGenerator}
              getTextGenerator={getTextGenerator}
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
