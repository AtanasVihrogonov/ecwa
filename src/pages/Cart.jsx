import { Add, Remove } from '@mui/icons-material'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div``

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton type='left'>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your wishlist(0)</TopText>
          </TopTexts>
          <TopButton type='filled'>Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='https://sc04.alicdn.com/kf/Ha1f7920446b442c0b6821b1840fab870p.png' />
                <Details>
                  <ProductName>
                    <b>Product:</b> Plastic Material
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 8765432
                  </ProductId>
                  <ProductColor color='#a28679' />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>

              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>£ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src='https://sc04.alicdn.com/kf/H42d552a4750c4f01aa06a0372de480c3g.jpg' />
                <Details>
                  <ProductName>
                    <b>Product:</b> WPC Material
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 3335548
                  </ProductId>
                  <ProductColor color='#31332f' />
                  <ProductSize>
                    <b>Size:</b> 32.2
                  </ProductSize>
                </Details>
              </ProductDetail>

              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>3</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>£ 40</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>£ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>£ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>£ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>£ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

const Wrapper = styled.div`
  padding: 1.1rem;
`
const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.1rem;
`
const TopButton = styled.button`
  text-transform: uppercase;
  padding: 10px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? '#4a5a45' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
  color: ${(props) => props.type === 'left' && '#4a5a45'};
`
const TopTexts = styled.div``

const TopText = styled.span`
  margin: 0 10px;
  text-decoration: underline;
  cursor: pointer;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
`
const Hr = styled.hr`
  background-color: lightgray;
  border: none;
  height: 1px;
  margin: 10px 0;
`
const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`
const Image = styled.img`
  width: 200px;
  height: 200px;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.1rem;
  justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 10%;
  background-color: ${(props) => props.color};
`
const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.1rem;
`
const ProductAmount = styled.span`
  font-size: 1.2rem;
  margin: 5px;
`
const ProductPrice = styled.span`
  font-size: 1.3rem;
  font-weight: 200;
`
const Summary = styled.div`
  flex: 1;
  padding: 1.1rem;
  margin: 10px;
  height: 50vh;
  /* height: 1px; */
  border: 0.5px solid lightgray;
`
const SummaryTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.5rem;
`
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`
const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  text-transform: uppercase;
  width: 100%;
  padding: 10px;
  background-color: #4a5a45;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: 500;
`

export default Cart
