/* eslint-disable @next/next/no-img-element */
import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import Comments from '@/components/elements/Comments/Comments'
import styles from '@/styles/about/index.module.scss'

const AboutPage: React.FC = () => {
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  return (
    <section className={styles.about}>
      <div className="container">
        <h2 className={`${styles.about__title} ${darkModeClass}`}>
          О компании
        </h2>
        <div className={styles.about__inner}>
          <div className={`${styles.about__info} ${darkModeClass}`}>
            <p>
              ООО «ТЛТТРАНС» — ведущая компания в сфере импорта автомобилей из
              США, Европы и Кореи в Россию и Казахстан. Мы предоставляем полный
              спектр услуг, начиная с подбора и проверки транспортного средства,
              заканчивая его доставкой, таможенным оформлением и регистрацией.
              Наши ключевые преимущества: Профессионализм и опыт: Наша команда
              состоит из специалистов с многолетним опытом в области
              автомобильного импорта и логистики. Надежность и прозрачность: Мы
              работаем только с проверенными поставщиками и аукционами,
              обеспечивая юридическую чистоту каждой сделки. Индивидуальный
              подход: Учитываем все пожелания клиентов, подбирая автомобили,
              идеально соответствующие их требованиям и бюджету. Гарантии
              качества: Предоставляем гарантию на основные узлы и агрегаты
              приобретенных автомобилей, подтверждая их отличное техническое
              состояние.
            </p>
            <p>
              Мы стремимся сделать процесс приобретения автомобиля из-за рубежа
              максимально комфортным и безопасным для каждого клиента. Мы берем
              на себя все организационные вопросы, позволяя вам наслаждаться
              покупкой без лишних хлопот. Доверяя нам, вы выбираете качество,
              надежность и профессионализм.
            </p>
          </div>
          <div className={`${styles.about__img} ${styles.about__img__top}`}>
            <img src="/img/about-img1.jpg" alt="image-1" />
          </div>
          {/* <div className={`${styles.about__img} ${styles.about__img__bottom}`}>
            <img src="/img/about-img-2.png" alt="image-2" />
          </div> */}
        </div>
        <Comments />
      </div>
    </section>
  )
}

export default AboutPage
