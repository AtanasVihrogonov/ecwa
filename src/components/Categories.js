import styled from 'styled-components'
import { categories } from '../data'
import CaregoryItem from './CaregoryItem'
import { mobile, tablet, laptopXL } from '../responsive'

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
  padding: 1.1rem 1.1rem 0 1.1rem;
  justify-content: space-between;
  ${mobile({
    flexDirection: 'column',
    padding: '0px',
    letterSpacing: 'normal',
  })}
  ${tablet({ flexDirection: 'column' })}
  ${laptopXL({
    width: '100%',
    margin: '0 auto',
    maxWidth: '1770px',
    padding: '1.1rem 0',
  })}
`

export default Categories
