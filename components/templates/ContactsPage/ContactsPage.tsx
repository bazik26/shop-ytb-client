/* eslint-disable prettier/prettier */

import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import styles from '@/styles/contacts/index.module.scss'
import MailSvg from '@/components/elements/MailSvg/MailSvg'
import FeedbackForm from '@/components/modules/FeedbackForm/FeedbackForm'

const ContactsPage = ({ isWholesaleBuyersPage = false }) => {
  const mode = useStore($mode)
  const isMobile560 = useMediaQuery(560)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  return (
    <section className={styles.contacts}>
      <div className="container">
        <h2 className={`${styles.contacts__title} ${darkModeClass}`}>
          {isWholesaleBuyersPage ? 'Оптовым покупателям' : 'Контакты'}
        </h2>
        <div className={styles.contacts__inner}>
          {isWholesaleBuyersPage ? (
            <div className={`${styles.contacts__list} ${darkModeClass}`}>
              <p>
                <span>
                  Условия оптовых заказов решаются индивидуально по телефону:{' '}
                </span>
                <span> +7 (982) 334-72-25</span>
              </p>
              <p>
                Либо опишите суть заказа в форме обратной связи и мы с вами
                свяжемся.
              </p>
            </div>
          ) : (
            <ul className={`${styles.contacts__list} ${darkModeClass}`}>
              <li className={styles.contacts__list__title}>
                <h3 className={darkModeClass}>
                  Пригон авто из Европы, Сша, Кореи
                </h3>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Офис: </span>
                <span>
                  Самарская область. Тольятти. Южное шоссе, 24. 445004. Офис 202
                </span>
              </li>
              {/* <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Склад:</span>
                <span> г. Москва, ул. ... д....</span>
              </li> */}
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>График работы офиса: </span>
                <span> Без выходных</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Наш контактный телефон: </span>
                <span> +7 (982) 334-72-25</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Время приемок завок: </span>
                <span> Пн-Вс: с 8:00 до 22:00</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>Прием заказов электронным способом на сайте: </span>
                <span>Круглосуточно</span>
              </li>
              <li className={`${styles.contacts__list__item} ${darkModeClass}`}>
                <span>E-mail: </span>
                <span className={styles.contacts__list__item__mail}>
                  {!isMobile560 && <MailSvg />} <span>myeurocar@mail.ru</span>
                </span>
              </li>
            </ul>
          )}
          <FeedbackForm />
        </div>
      </div>
    </section>
  )
}

export default ContactsPage
