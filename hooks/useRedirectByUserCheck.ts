import { checkUserAuthFx } from '@/app/api/auth'
import { setUser } from '@/context/user'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

const useRedirectByUserCheck = (isAuthPage = false) => {
  const [shouldLoadContent, setShouldLoadContent] = useState(false)
  const router = useRouter()
  const shouldCheckAuth = useRef(true)

  useEffect(() => {
    if (shouldCheckAuth.current) {
      shouldCheckAuth.current = false
      checkUser()
    }
  }, [])

  // const checkUser = async () => {
  //   const user = await checkUserAuthFx('/users/login-check')

  //   if (isAuthPage) {
  //     if (!user) {
  //       setShouldLoadContent(true)
  //       return
  //     }

  //     router.push('/dashboard')
  //     return
  //   }

  //   if (user) {
  //     setUser(user)
  //     setShouldLoadContent(true)
  //     return
  //   }

  //   router.push('/')
  // }

  const checkUser = async () => {
    const user = await checkUserAuthFx('/users/login-check')

    if (user?.guest) {
      setShouldLoadContent(true) // ✅ Разрешаем загрузку каталога без входа
      return
    }

    if (user) {
      setUser(user)
      setShouldLoadContent(true)
      return
    }

    setShouldLoadContent(true) // ✅ Позволяем гостям пользоваться сайтом
  }

  return { shouldLoadContent }
}

export default useRedirectByUserCheck
