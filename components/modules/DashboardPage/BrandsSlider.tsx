/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick'
import { useStore } from 'effector-react'
import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { $mode } from '@/context/mode'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import BrandsSliderNextArrow from '@/components/elements/BrandsSliderNextArrow/BrandsSliderNextArrow'
import BrandsSliderPrevArrow from '@/components/elements/BrandsSliderPrevArrow/BrandsSliderPrevArrow'
import styles from '@/styles/dashboard/index.module.scss'

const BrandsSlider = () => {
  const isMedia768 = useMediaQuery(768)
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  const brandItems = [
    {
      id: 1,
      img: '/img/brands/AUDI.png',
      darkImg: '/img/brands/AUDI1.png',
      alt: 'brand-1',
    },
    {
      id: 2,
      img: '/img/brands/BMW.png',
      darkImg: '/img/brands/BMW.png',
      alt: 'brand-2',
    },
    {
      id: 3,
      img: '/img/brands/CHERY.png',
      darkImg: '/img/brands/CHERY.png',
      alt: 'brand-3',
    },
    {
      id: 4,
      img: '/img/brands/CHEVROLET.png',
      darkImg: '/img/brands/CHEVROLET.png',
      alt: 'brand-4',
    },
    {
      id: 5,
      img: '/img/brands/CITROEN.png',
      darkImg: '/img/brands/CITROEN1.png',
      alt: 'brand-5',
    },
    {
      id: 6,
      img: '/img/brands/FORD.png',
      darkImg: '/img/brands/FORD.png',
      alt: 'brand-6',
    },
    {
      id: 7,
      img: '/img/brands/GEELY.png',
      darkImg: '/img/brands/GEELY.png',
      alt: 'brand-7',
    },
    {
      id: 8,
      img: '/img/brands/HAVAL.png',
      darkImg: '/img/brands/HAVAL1.png',
      alt: 'brand-8',
    },
    {
      id: 9,
      img: '/img/brands/HONDA.png',
      darkImg: '/img/brands/HONDA.png',
      alt: 'brand-9',
    },
    {
      id: 10,
      img: '/img/brands/HYUNDAI.png',
      darkImg: '/img/brands/HYUNDAI.png',
      alt: 'brand-10',
    },
    {
      id: 11,
      img: '/img/brands/KIA.png',
      darkImg: '/img/brands/KIA.png',
      alt: 'brand-11',
    },
    {
      id: 12,
      img: '/img/brands/LAND_ROVER.png',
      darkImg: '/img/brands/LAND_ROVER.png',
      alt: 'brand-12',
    },
    {
      id: 13,
      img: '/img/brands/LEXUS.png',
      darkImg: '/img/brands/LEXUS1.png',
      alt: 'brand-13',
    },
    {
      id: 14,
      img: '/img/brands/MAZDA.png',
      darkImg: '/img/brands/MAZDA.png',
      alt: 'brand-14',
    },
    {
      id: 15,
      img: '/img/brands/MERCEDES.png',
      darkImg: '/img/brands/MERCEDES.png',
      alt: 'brand-15',
    },
    {
      id: 16,
      img: '/img/brands/MITSUBISHI.png',
      darkImg: '/img/brands/MITSUBISHI.png',
      alt: 'brand-16',
    },
    {
      id: 17,
      img: '/img/brands/NISSAN.png',
      darkImg: '/img/brands/NISSAN1.png',
      alt: 'brand-17',
    },
    {
      id: 18,
      img: '/img/brands/OPEL.png',
      darkImg: '/img/brands/OPEL1.png',
      alt: 'brand-18',
    },
    {
      id: 19,
      img: '/img/brands/PEUGEOT.png',
      darkImg: '/img/brands/PEUGEOT1.png',
      alt: 'brand-19',
    },
    {
      id: 20,
      img: '/img/brands/PORSCHE.png',
      darkImg: '/img/brands/PORSCHE.png',
      alt: 'brand-20',
    },
    {
      id: 21,
      img: '/img/brands/RENAULT.png',
      darkImg: '/img/brands/RENAULT1.png',
      alt: 'brand-21',
    },
    {
      id: 22,
      img: '/img/brands/SKODA.png',
      darkImg: '/img/brands/SKODA.png',
      alt: 'brand-22',
    },
    {
      id: 23,
      img: '/img/brands/SUBARU.png',
      darkImg: '/img/brands/SUBARU.png',
      alt: 'brand-23',
    },
    {
      id: 24,
      img: '/img/brands/SUZUKI.png',
      darkImg: '/img/brands/SUZUKI.png',
      alt: 'brand-24',
    },
    {
      id: 25,
      img: '/img/brands/TOYOTA.png',
      darkImg: '/img/brands/TOYOTA1.png',
      alt: 'brand-25',
    },
    {
      id: 26,
      img: '/img/brands/VOLKSWAGEN.png',
      darkImg: '/img/brands/VOLKSWAGEN.png',
      alt: 'brand-26',
    },
    {
      id: 27,
      img: '/img/brands/VOLVO.png',
      darkImg: '/img/brands/VOLVO1.png',
      alt: 'brand-27',
    },
  ]

  useEffect(() => {
    const slider = document.querySelector(
      `.${styles.dashboard__brands__slider}`
    )

    const list = slider?.querySelector('.slick-list') as HTMLElement

    list.style.height = isMedia768 ? '160px' : '220px'
  }, [isMedia768])

  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    speed: 500,
    nextArrow: <BrandsSliderNextArrow modeClass={darkModeClass} />,
    prevArrow: <BrandsSliderPrevArrow modeClass={darkModeClass} />,
  }

  return (
    <Slider {...settings} className={styles.dashboard__brands__slider}>
      {brandItems.map((item) => (
        <div
          className={`${styles.dashboard__brands__slide} ${darkModeClass}`}
          key={item.id}
          style={{ width: isMedia768 ? 124 : 180 }}
        >
          <img src={mode === 'dark' ? item.darkImg : item.img} alt={item.alt} />
        </div>
      ))}
    </Slider>
  )
}

export default BrandsSlider
