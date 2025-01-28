import { useCallback, useEffect, useState } from 'react'
import { useStore } from 'effector-react'
import Link from 'next/link'
import CrumbArrowSvg from '@/components/elements/CrumbArrowSvg/CrumbArrowSvg'
import { ICrumbProps } from '@/types/common'
import { $mode } from '@/context/mode'
import styles from '@/styles/breadcrumbs/index.module.scss'

const Crumb = ({
  text: defaultText,
  textGenerator,
  href,
  last = false,
}: ICrumbProps) => {
  const [text, setText] = useState(defaultText)
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  const handleTextGenerate = useCallback(async () => {
    if (!Boolean(textGenerator)) {
      return
    }

    try {
      const finalText = await textGenerator() // Асинхронный вызов генератора текста
      setText(finalText) // Установка текста
    } catch (error) {
      console.error('Ошибка при генерации текста:', error)
    }
  }, [textGenerator]) // Указываем textGenerator как зависимость

  useEffect(() => {
    handleTextGenerate()
  }, [handleTextGenerate]) // Используем стабильную функцию как зависимость

  // const handleTextGenerate = async () => {
  //   if (!Boolean(textGenerator)) {
  //     return
  //   }

  //   const finalText = await textGenerator()
  //   setText(finalText)
  // }

  // useEffect(() => {
  //   handleTextGenerate()
  // }, [handleTextGenerate,textGenerator])

  if (last) {
    return (
      <a>
        <span
          className={`${styles.breadcrumbs__item__icon} ${darkModeClass}`}
          style={{ marginRight: 13 }}
        >
          <CrumbArrowSvg />
        </span>
        <span className={`last-crumb ${styles.breadcrumbs__item__text}`}>
          {text}
        </span>
      </a>
    )
  }

  return (
    <Link href={href} passHref legacyBehavior>
      <a>
        <span
          className={`${styles.breadcrumbs__item__icon} ${darkModeClass}`}
          style={{ marginRight: 13 }}
        >
          <CrumbArrowSvg />
        </span>
        <span className={styles.breadcrumbs__item__text}>{text}</span>
      </a>
    </Link>
  )
}

export default Crumb
