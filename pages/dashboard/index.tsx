import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Layout from '@/components/layout/Layout'
import DashboardPage from '@/components/templates/DashboardPage/DashboardPage'
import useRedirectByUserCheck from '@/hooks/useRedirectByUserCheck'
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'

function Dashboard({
  metaTitle,
  metaDescription,
}: {
  metaTitle: string
  metaDescription: string
}) {
  const { shouldLoadContent } = useRedirectByUserCheck()

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://cars-euro.com/" />

        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/img/logo.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Cars Euro" />
        <link rel="manifest" href="/site.webmanifest" />

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
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://cars-euro.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />

        {/* Twitter Card */}
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
export const getServerSideProps: GetServerSideProps = async () => {
  console.log('🔍 getServerSideProps вызван на сервере!')
  return {
    props: {
      metaTitle: 'Cars Euro – Купить авто из Европы под заказ',
      metaDescription:
        'Ваш надёжный партнёр в мире автомобилей. Лучшие авто по низким ценам!',
    },
  }
}
