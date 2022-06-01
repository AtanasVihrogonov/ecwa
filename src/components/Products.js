import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import { laptopXL } from '../responsive'

const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 1.1rem;
  flex-wrap: wrap;
  justify-content: space-between;
  ${laptopXL({ width: '100%', margin: '0 auto', maxWidth: '1770px', padding: '0 0 1.1rem 0' })}
`

export default Products
