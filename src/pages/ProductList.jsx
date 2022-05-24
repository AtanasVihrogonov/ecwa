import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newslatter from '../components/Newsletter'
import Footer from '../components/Footer'

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement style={{ marginTop: '30px' }} />
      <Title>Equipment</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Black color</Option>
            <Option>Dark grey</Option>
            <Option>Original wood</Option>
            <Option>Middle grey</Option>
            <Option>Light grey</Option>
            <Option>Dark oak</Option>
            <Option>Brownish red</Option>
            <Option>Chocolate</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option></Option>
            <Option></Option>
            <Option></Option>
            <Option></Option>
            <Option></Option>
            <Option></Option>
            <Option></Option>
            <Option></Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newslatter />
      <Footer />
    </Container>
  )
}

const Container = styled.div``

const Title = styled.h1`
  margin: 1.1rem;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 1.1rem;
`
const FilterText = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
`

const Select = styled.select`
  
`

const Option = styled.option`

`

export default ProductList
