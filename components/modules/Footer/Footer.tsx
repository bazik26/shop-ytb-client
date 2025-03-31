/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

import styles from '@/styles/footer/index.module.scss'
import FooterLogo from './FooterLogo'
import OnlineStoreContent from './OnlineStoreContent'
import CompanyContent from './CompanyContent'
import MarkerSvg from '@/components/elements/MarkerSvg/MarkerSvg'
import PhoneSvg from '@/components/elements/PhoneSvg/PhoneSvg'
import MailSvg from '@/components/elements/MailSvg/MailSvg'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Accordion from '@/components/elements/Accordion/Accordion'

const Footer = () => {
  const isMedia750 = useMediaQuery(750)
  const isMedia500 = useMediaQuery(500)

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__top}>
          {!isMedia750 && <FooterLogo />}
          <div className={styles.footer__top__inner}>
            <div className={styles.footer__top__item}>
              {!isMedia500 && (
                <>
                  <h3 className={styles.footer__top__item__title}>Авто</h3>
                  <OnlineStoreContent />
                </>
              )}
              {isMedia500 && (
                <Accordion
                  title="Авто"
                  titleClass={styles.footer__top__item__title}
                  arrowOpenClass={styles.open}
                >
                  <OnlineStoreContent />
                  <div style={{ height: 17 }} />
                </Accordion>
              )}
            </div>
            <div className={styles.footer__top__item}>
              {!isMedia500 && (
                <>
                  <h3 className={styles.footer__top__item__title}>Компания</h3>
                  <CompanyContent />
                </>
              )}
              {isMedia500 && (
                <Accordion
                  title="Компания"
                  titleClass={styles.footer__top__item__title}
                  arrowOpenClass={styles.open}
                >
                  <CompanyContent />
                  <div style={{ height: 17 }} />
                </Accordion>
              )}
            </div>
          </div>
          <div className={styles.footer__top__item}>
            <h3 className={styles.footer__top__item__title}>Контакты</h3>
            <ul
              className={`${styles.footer__top__item__list} ${styles.footer__top__item__contacts}`}
            >
              <li className={styles.footer__top__item__list__item}>
                <a
                  href="https://yandex.ru/maps/-/CHafFJnl"
                  className={styles.footer__top__item__list__item__linkd}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Наш адрес:</span>
                  <span>
                    Самарская обл. Тольятти. Южное шоссе, 24. 445004. Офис 202
                  </span>
                  <span>
                    <MarkerSvg />
                  </span>
                </a>
                <a
                  href="https://yandex.ru/maps/-/CHB-7N4M"
                  className={styles.footer__top__item__list__item__linkd}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Партнеры:</span>
                  <span>
                    Мурманская обл. Мурманск. Книповича, 23. 183025. Офис 119
                  </span>
                  <span>
                    <MarkerSvg />
                  </span>
                </a>
              </li>
              <li className={styles.footer__top__item__list__item}>
                <a
                  href="tel:+79823347225"
                  className={styles.footer__top__item__list__item__linkd}
                >
                  <span>Наш контактный телефон:</span>
                  <span>+7 (982) 334-72-25</span>
                  <span>
                    <PhoneSvg />
                  </span>
                </a>
              </li>
              <li className={styles.footer__top__item__list__item}>
                <a
                  href="mailto:myeurocar@mail.ru"
                  className={styles.footer__top__item__list__item__linkd}
                >
                  <span>E-mail:</span>
                  <span>myeurocar@mail.ru</span>
                  <span>
                    <MailSvg />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles.footer__bottom__block}>
            <div className={styles.footer__bottom__block__left}>
              <h3 className={styles.footer__bottom__block__title}>
                Мы принимаем к оплате:
              </h3>
              <ul className={styles.footer__bottom__block__pay}>
                {/* <li className={styles.footer__bottom__block__pay__item}>
                  <img src="/img/pay.png" alt="apple-pay" />
                </li> */}
                <li className={styles.footer__bottom__block__pay__item}>
                  <img src="/img/pay/mir-svgrepo-com.svg" alt="master-card" />
                </li>
                <li className={styles.footer__bottom__block__pay__item}>
                  <img
                    src="/img/pay/mastercard-svgrepo-com.svg"
                    alt="master-card"
                  />
                </li>
                <li className={styles.footer__bottom__block__pay__item}>
                  <img src="/img/pay/visa-svgrepo-com.svg" alt="visa" />
                </li>
              </ul>
            </div>
            <div className={styles.footer__bottom__block__right}>
              <h3 className={styles.footer__bottom__block__title}>
                Мы в соцсети:
              </h3>
              <ul className={styles.footer__bottom__block__social}>
                <li className={styles.footer__bottom__block__social__item}>
                  <a
                    href="https://t.me/cars_euro"
                    target="_blank"
                    className={styles.footer__bottom__block__social__item_vk}
                  >
                    <img src="/img/telegram.png" alt="visa" />
                  </a>
                </li>
                {/* <li className={styles.footer__bottom__block__social__item}>
                  <a
                    href="#"
                    className={styles.footer__bottom__block__social__item_fb}
                  />
                </li>
                <li className={styles.footer__bottom__block__social__item}>
                  <a
                    href="#"
                    className={styles.footer__bottom__block__social__item_inst}
                  />
                </li>
                <li className={styles.footer__bottom__block__social__item}>
                  <a
                    href="#"
                    className={styles.footer__bottom__block__social__item_ytb}
                  />
                </li> */}
              </ul>
            </div>
          </div>
          {isMedia750 && <FooterLogo />}
          <div className={styles.footer__bottom__block}>
            <p className={styles.footer__bottom__block__copyright}>
              © ООО «ТЛТТРАНС» 2019. Партнер ООО «АВТО-С»
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
