import { useParams } from 'react-router-dom'

import { Burgers } from '../../components/Burgers'
import { Basket } from '../../pages/Basket'
import { Text } from '../../components/Text'

export const CatalogPage = () => {
  const params = useParams()

  return (
    <div>
      <h1>Category: {params.category}</h1>
      <p>Catalog</p>

      <Basket />
      <Burgers />
      <Text />

    </div>
  )
}