import type { AppProps } from 'next/app'
import { withHydrate } from 'effector-next'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import NextNProgress from 'nextjs-progressbar'
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/globals.css'

const enhance = withHydrate()

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Добавляем JivoChat динамически
    const script = document.createElement('script')
    script.src = '//code.jivosite.com/widget/gNbKuWhZqe'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script) // Очистка при размонтировании (если нужно)
    }
  }, [])

  return (
    mounted && (
      <>
        <NextNProgress />
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-right"
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          limit={1}
          theme="light"
        />
      </>
    )
  )
}

export default enhance(App as React.FC<AppProps>)
