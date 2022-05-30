import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Description, Remove } from '@mui/icons-material'

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src='https://sc04.alicdn.com/kf/H1b32553a755b4bdfbfac67b60e292133Q.jpg' />
        </ImgContainer>
        <InfoContainer>
          <Title>WPC Decking </Title>
          <Desc>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
            voluptates distinctio quaerat debitis consectetur? Et nam voluptatum
            libero assumenda iste, commodi eligendi vel, cum sint consectetur
            aliquid aspernatur, explicabo nemo.
          </Desc>
          <Price>£ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color='#986e5a' />
              <FilterColor color='#8e786c' />
              <FilterColor color='#424242' />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>134x24mm</FilterSizeOption>
                <FilterSizeOption>134x26mm</FilterSizeOption>
                <FilterSizeOption>140x30mm</FilterSizeOption>
                <FilterSizeOption>150x35mm</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

const Container = styled.div``

const Wrapper = styled.div`
  display: flex;
  padding: 3rem;
`

const ImgContainer = styled.div`
  flex: 1;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 3rem;
`

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: contain;
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 1.1rem 0;
`

const Price = styled.span`
  font-size: 1.8rem;
  font-weight: 100;
`

const FilterContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 0;
  cursor: pointer;
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`

const FilterTitle = styled.span`
  font-size: 1.1rem;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 5%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
`

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`

const Amount = styled.span`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 10px;
  border: 2px solid #4a5a45;
  /* background-color: #a7b9a1; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`

const Button = styled.button`
  /* text-transform: uppercase; */
  padding: 10px;
  border: 2px solid #4a5a45;
  background-color: #a7b9a1;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #95ab8e;
  }
`

export default Product
