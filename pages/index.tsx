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
        <title> Cars Euro | {shouldLoadContent ? 'Главная' : ''}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/logo.png" />
        <meta
          name="description"
          content="Ваш надёжный партнёр в мире автомобилей.
        Предлагаем широкий выбор европейских авто по доступным ценам. Узнайте больше на нашем сайте."
        />
        {/* <script src="//code.jivosite.com/widget/gNbKuWhZqe" async></script> */}
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
