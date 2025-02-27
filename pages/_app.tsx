import type { AppProps } from 'next/app'
import { withHydrate } from 'effector-next'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import NextNProgress from 'nextjs-progressbar'
import Script from 'next/script'
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
        {/* Подключаем пиксель Top.Mail.Ru */}
        <Script id="top-mail-ru" strategy="lazyOnload">
          {`
            var _tmr = window._tmr || (window._tmr = []);
            _tmr.push({id: "3618651", type: "pageView", start: (new Date()).getTime()});
            (function (d, w, id) {
              if (d.getElementById(id)) return;
              var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
              ts.src = "https://top-fwz1.mail.ru/js/code.js";
              var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
              if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
            })(document, window, "tmr-code");
          `}
        </Script>

        {/* Fallback для пользователей без JS */}
        <noscript>
          <div>
            <img
              src="https://top-fwz1.mail.ru/counter?id=3618651;js=na"
              style={{ position: "absolute", left: "-9999px" }}
              alt="Top.Mail.Ru"
            />
          </div>
        </noscript>

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
