import { useStore } from 'effector-react'
import { useState, useEffect } from 'react'
import { $mode } from '@/context/mode'
import styles from '@/styles/comments/index.module.scss'

interface Comment {
  name: string
  body: string
  time: number
}

const initialComments: Comment[] = [
  {
    name: 'Анна',
    body: 'Отличный сайт! Очень полезная информация.',
    time: Date.now() - 1000000,
  },
  {
    name: 'Иван',
    body: 'Спасибо за такую возможность оставить комментарий!',
    time: Date.now() - 500000,
  },
  {
    name: 'Екатерина',
    body: 'Жду новых обновлений!',
    time: Date.now() - 200000,
  },
]

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    const savedComments = localStorage.getItem('comments')
    if (savedComments) {
      setComments(JSON.parse(savedComments))
    } else {
      setComments(initialComments)
      localStorage.setItem('comments', JSON.stringify(initialComments))
    }
  }, [])

  const handleAddComment = () => {
    if (!name.trim() || !body.trim()) return

    const newComment: Comment = {
      name,
      body,
      time: Date.now(),
    }

    const updatedComments = [newComment, ...comments]
    setComments(updatedComments)
    localStorage.setItem('comments', JSON.stringify(updatedComments))

    setName('')
    setBody('')
  }

  const timeConverter = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleString()
  }

  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  return (
    <div className={`${styles.comments__block} ${darkModeClass}`}>
      <h2 className={`${styles.comments__block__title} ${darkModeClass}`}>
        Комментарии
      </h2>

      {/* Форма добавления комментариев */}
      <div className={`${styles.comments__block__inputs} ${darkModeClass}`}>
        <input
          type="text"
          placeholder="Ваше имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${styles.comments__block__inputs__input} ${darkModeClass}`}
        />
        <textarea
          placeholder="Ваш комментарий"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className={`${styles.comments__block__inputs__textarea} ${darkModeClass}`}
        />
        <button
          onClick={handleAddComment}
          className={`${styles.comments__block__inputs__button} ${darkModeClass}`}
        >
          Добавить комментарий
        </button>
      </div>

      {/* Список комментариев */}
      <div className={`${styles.comments__block__comments} ${darkModeClass}`}>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className={`${styles.comments__block__comments__body} ${darkModeClass}`}
            >
              <p
                className={`${styles.comments__block__comments__body__name} ${darkModeClass}`}
              >
                {comment.name}
              </p>
              <p
                className={`${styles.comments__block__comments__body__comment} ${darkModeClass}`}
              >
                {comment.body}
              </p>
              <p
                className={`${styles.comments__block__comments__body__time} ${darkModeClass}`}
              >
                {timeConverter(comment.time)}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Комментариев пока нет.</p>
        )}
      </div>
    </div>
  )
}

export default Comments
