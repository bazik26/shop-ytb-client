// import { useStore } from 'effector-react'
// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/router'
// import { $boilerParts, setBoilerParts } from '@/context/boilerParts'
// import { getBoilerPartsFx } from '@/app/api/boilerParts'
// import styles from '@/styles/catalog/index.module.scss'

// const InStockFilter = () => {
//   const boilerParts = useStore($boilerParts)
//   const router = useRouter()

//   // Чекбокс активен по умолчанию
//   const [isChecked, setIsChecked] = useState(true)

//   useEffect(() => {
//     loadFilteredParts(isChecked)
//   }, [isChecked, router.query])

//   const loadFilteredParts = async (filterInStock: boolean) => {
//     try {
//       const queryParams = new URLSearchParams()

//       if (filterInStock) queryParams.append('inStock', 'true')

//       if (router.query.boiler)
//         queryParams.append('boiler', String(router.query.boiler))
//       if (router.query.parts)
//         queryParams.append('parts', String(router.query.parts))
//       if (router.query.priceFrom && router.query.priceTo) {
//         queryParams.append('priceFrom', String(router.query.priceFrom))
//         queryParams.append('priceTo', String(router.query.priceTo))
//       }

//       // Исправление ошибки string | string[]
//       const offset = Array.isArray(router.query.offset)
//         ? router.query.offset[0]
//         : router.query.offset || '0'
//       queryParams.append('limit', '20')
//       queryParams.append('offset', offset)

//       const result = await getBoilerPartsFx(`/boiler-parts?${queryParams}`)
//       setBoilerParts(result)
//     } catch (error) {
//       console.error('Ошибка при загрузке товаров:', error)
//     }
//   }

//   const handleFilterChange = () => {
//     setIsChecked((prev) => !prev)
//   }

//   return (
//     <div className={styles.filter__checkbox}>
//       <input
//         type="checkbox"
//         id="inStockFilter"
//         checked={isChecked}
//         onChange={handleFilterChange}
//       />
//       <label htmlFor="inStockFilter">Только в наличии</label>
//     </div>
//   )
// }

// export default InStockFilter
