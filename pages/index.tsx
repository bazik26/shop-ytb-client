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

import Head from 'next/head'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Layout from '@/components/layout/Layout'
import DashboardPage from '@/components/templates/DashboardPage/DashboardPage'
import useRedirectByUserCheck from '@/hooks/useRedirectByUserCheck'
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'

function Dashboard({
  metaTitle,
  metaDescription,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { shouldLoadContent } = useRedirectByUserCheck()

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://cars-euro.com/" />

        {/* SEO Meta Tags */}
        <meta name="description" content={metaDescription} />
        <meta
          name="keywords"
          content="авто из Европы, купить авто, автомобили, продажа авто, автопригон"
        />
        <meta name="author" content="Cars Euro" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content="https://cars-euro.com/img/logo.png"
        />
        <meta property="og:url" content="https://cars-euro.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content="https://cars-euro.com/img/logo.png"
        />
      </Head>

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

// 🚀 Теперь страница будет рендериться на сервере (SSR)
// eslint-disable-next-line arrow-body-style
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      metaTitle: 'Купить авто из Европы под заказ – Cars Euro',
      metaDescription:
        'Ваш надёжный партнёр в мире автомобилей. Лучшие авто по низким ценам!',
    },
  }
}
