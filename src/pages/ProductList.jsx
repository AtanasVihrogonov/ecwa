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
          <Label>
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
          </Label>

          <Label>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>134x24mm</Option>
              <Option>138x23mm</Option>
              <Option>134x26mm</Option>
              <Option>140x21mm</Option>
              <Option>140x25mm</Option>
              <Option>140x30mm</Option>
              <Option>150x25mm</Option>
              <Option>150x35mm</Option>
              <Option>157x22mm</Option>
              <Option>200x24mm</Option>
              <Option>customized</Option>
            </Select>
          </Label>

          <Label>
            <Select>
              <Option disabled selected>
                Thickness
              </Option>
              <Option>Option 1 - 20mm</Option>
              <Option>Option 2 - 22mm</Option>
              <Option>Option 3 - 24mm</Option>
              <Option>Option 4 - 26mm</Option>
              <Option>Option 5 - 28mm</Option>
              <Option>Option 6 - 30mm</Option>
              <Option>Option 7 - 32mm</Option>
              <Option>Option 8 - 35mm</Option>
              <Option>Option 9 - 50mm</Option>
            </Select>
          </Label>
        </Filter>

        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Label>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Label>
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
  margin-right: 1.1rem;
`

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 5px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  background: #fff;
  margin: 0 5px 5px 0;
`

const Label = styled.div`
  position: relative;
  display: inline-block;
  &:before {
    content: '';
    height: ($height - 5) + px;
    position: absolute;
    right: 7px;
    top: 3px;
    width: 22px;
    background: #fff; //for Firefox in Android
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    pointer-events: none;
    display: block;
  }
  &:after {
    content: ' ';
    position: absolute;
    right: 15px;
    top: 46%;
    margin-top: -3px;
    z-index: 2;
    pointer-events: none;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6.9px 4px 0 4px;
    border-color: #aaa transparent transparent transparent;
    pointer-events: none;
  }
  //fix for ie 10 later
  select::-ms-expand {
    display: none;
  }
`

const Option = styled.option``

export default ProductList
