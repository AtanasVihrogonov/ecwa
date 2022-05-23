import styled from 'styled-components'
import { categories } from '../data'
import CaregoryItem from './CaregoryItem'

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CaregoryItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  padding: 1.1rem;
  justify-content: space-between;
`

export default Categories
