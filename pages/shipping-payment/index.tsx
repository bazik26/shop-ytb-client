import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import ShippingPayment from '@/components/templates/ShippingPayment/ShippingPayment'
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
import { useCallback } from 'react'

function ShippingPaymentPage() {
  const getDefaultTextGenerator = useCallback(() => 'Доставка и оплата', [])
  const getTextGenerator = useCallback((param: string) => ({}[param]), [])

  return (
    <>
      <Head>
        <title> Cars Euro | Доставка и оплата</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/logo.png" />
      </Head>
      <Layout>
        <main>
          <Breadcrumbs
            getDefaultTextGenerator={getDefaultTextGenerator}
            getTextGenerator={getTextGenerator}
          />
          <ShippingPayment />
          <div className="overlay" />
        </main>
      </Layout>
    </>
  )
}

export default ShippingPaymentPage
