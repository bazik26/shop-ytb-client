// /* eslint-disable @next/next/no-img-element */
// import { useStore } from 'effector-react'
// import Link from 'next/link'
// import { useEffect } from 'react'
// import { useRouter } from 'next/router'
// import { $mode } from '@/context/mode'
// import SearchInput from '@/components/elements/Header/SearchInput'
// import ModeToggler from '@/components/elements/ModeToggler/ModeToggler'
// import CartPopup from './CartPopup/CartPopup'
// import { useMediaQuery } from '@/hooks/useMediaQuery'
// import { setDisableCart } from '@/context/shopping-cart'
// import styles from '@/styles/header/index.module.scss'

// const HeaderBottom = () => {
//   const isMedia950 = useMediaQuery(950)
//   const isMedia580 = useMediaQuery(580) // Проверяем ширину экрана
//   const mode = useStore($mode)
//   const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''
//   const router = useRouter()

//   useEffect(() => {
//     if (router.pathname === '/order') {
//       setDisableCart(true)
//       return
//     }
//     setDisableCart(false)
//   }, [router.pathname])

//   const logoSrc = isMedia580
//     ? '/img/logo1.png'
//     : mode === 'dark'
//     ? '/img/logo1.png'
//     : '/img/logo.png'

//   return (
//     <div className={styles.header__bottom}>
//       <div className={`container ${styles.header__bottom__container}`}>
//         <h1 className={styles.header__logo}>
//           <Link href="/dashboard" legacyBehavior passHref>
//             <a className={styles.header__logo__link}>
//               <img src={logoSrc} alt="logo" />
//               <span
//                 className={`${styles.header__logo__link__text} ${darkModeClass}`}
//               >
//                 My Euro Car Автопригон
//               </span>
//             </a>
//           </Link>
//         </h1>
//         <div className={styles.header__search}>
//           <SearchInput />
//         </div>
//         <div className={styles.header__shopping_cart}>
//           {!isMedia950 && <ModeToggler />}
//           <CartPopup />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HeaderBottom

/* eslint-disable @next/next/no-img-element */
import { useStore } from 'effector-react'
import Link from 'next/link'
import { useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { $mode } from '@/context/mode'
import SearchInput from '@/components/elements/Header/SearchInput'
import ModeToggler from '@/components/elements/ModeToggler/ModeToggler'
import CartPopup from './CartPopup/CartPopup'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { setDisableCart } from '@/context/shopping-cart'
import styles from '@/styles/header/index.module.scss'

const HeaderBottom = () => {
  const isMedia950 = useMediaQuery(950)
  const isMedia580 = useMediaQuery(580) // Проверяем ширину экрана
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''
  const router = useRouter()

  // Функция для управления корзиной
  const handleCartState = useCallback(() => {
    if (router.pathname === '/order') {
      setDisableCart(true)
    } else {
      setDisableCart(false)
    }
  }, [router.pathname])

  useEffect(() => {
    handleCartState()
  }, [handleCartState])

  let logoSrc = '/img/logo.png'

  if (isMedia580) {
    logoSrc = '/img/logo1.png'
  } else if (mode === 'dark') {
    logoSrc = '/img/logo1.png'
  }

  return (
    <div className={styles.header__bottom}>
      <div className={`container ${styles.header__bottom__container}`}>
        <h1 className={styles.header__logo}>
          <Link href="/dashboard" legacyBehavior passHref>
            <a className={styles.header__logo__link}>
              <img src={logoSrc} alt="logo" />
              <span
                className={`${styles.header__logo__link__text} ${darkModeClass}`}
              >
                CARS <br /> EURO
              </span>
            </a>
          </Link>
        </h1>
        <div className={styles.header__search}>
          <SearchInput />
        </div>
        <div className={styles.header__shopping_cart}>
          {!isMedia950 && <ModeToggler />}
          {/* <CartPopup /> */}
        </div>
      </div>
    </div>
  )
}

export default HeaderBottom
