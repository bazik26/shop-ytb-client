/* eslint-disable @next/next/no-img-element */

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

    // Добавляем JivoChat динамически, если еще не загружен
    if (!document.getElementById('jivo-chat')) {
      const script = document.createElement('script')
      script.src = '//code.jivosite.com/widget/gNbKuWhZqe'
      script.async = true
      script.id = 'jivo-chat'
      document.body.appendChild(script)
    }

    return () => {
      const jivoScript = document.getElementById('jivo-chat')
      if (jivoScript) {
        jivoScript.remove() // Очистка при размонтировании (если нужно)
      }
    }
  }, [])

  return (
    mounted && (
      <>
        {/* Яндекс.Метрика */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; 
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) 
            { if (document.scripts[j].src.includes("mc.yandex.ru")) return; }
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(100105008, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
            });
          `}
        </Script>

        {/* Fallback для пользователей без JS */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/100105008"
              style={{ position: 'absolute', left: '-9999px' }}
              alt="Yandex Metrika"
            />
          </div>
        </noscript>

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
              style={{ position: 'absolute', left: '-9999px' }}
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
