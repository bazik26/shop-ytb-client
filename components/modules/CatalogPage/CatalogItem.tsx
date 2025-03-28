/* eslint-disable @next/next/no-img-element */
import { useStore } from 'effector-react'
import Link from 'next/link'
import { $mode } from '@/context/mode'
import { IBoilerPart } from '@/types/boilerparts'
import { formatPrice } from '@/utils/common'
import styles from '@/styles/catalog/index.module.scss'

const CatalogItem = ({ item }: { item: IBoilerPart }) => {
  const mode = useStore($mode)
  // const user = useStore($user)
  // const shoppingCart = useStore($shoppingCart)
  // const isInCart = shoppingCart.some((cartItem) => cartItem.partId === item.id)
  // const spinner = useStore(removeFromCartFx.pending)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  // const toggleToCart = () => toggleCartItem(user.username, item.id, isInCart)

  return (
    <Link href={`/catalog/${item.id}`} passHref legacyBehavior>
      <li className={`${styles.catalog__list__item} ${darkModeClass}`}>
        <div className={styles.catalog__list__item__imghold}>
          <img src={JSON.parse(item.images)[0]} alt={item.name} />
        </div>
        <div className={styles.catalog__list__item__inner}>
          <h3 className={styles.catalog__list__item__title}>{item.name}</h3>
          <span className={styles.catalog__list__item__stock}>
            {item.in_stock > 0 ? (
              <span className={styles.catalog__list__item__stock__success}>
                В наличии
              </span>
            ) : (
              <span className={styles.catalog__list__item__stock__not}>
                Продана
              </span>
            )}
          </span>
          <span className={styles.catalog__list__item__code}>
            VIN: {item.vendor_code}
          </span>
          <span className={styles.catalog__list__item__price}>
            {formatPrice(item.price)} P
          </span>
        </div>
        {/* <button
          className={`${styles.catalog__list__item__cart} ${
            isInCart ? styles.added : ''
          }`}
          disabled={spinner}
          onClick={toggleToCart}
        >
          {spinner ? (
            <div className={spinnerStyles.spinner} style={{ top: 6, left: 6 }} />
          ) : (
            <span>{isInCart ? <CartHoverCheckedSvg /> : <CartHoverSvg />}</span>
          )}
        </button> */}
      </li>
    </Link>
  )
}

export default CatalogItem
