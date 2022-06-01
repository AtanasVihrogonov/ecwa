import styled from 'styled-components'
import { mobile, tablet,laptop } from '../responsive'

const CaregoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  flex-wrap: wrap;
  margin: 5px;
  height: 70vh;
  position: relative;
  ${laptop({ height: '50vh' })}
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.9;
  background-color: #a7b9a1;
  ${mobile({ height: '20vh' })}
  ${tablet({ height: '30vh' })}
  ${laptop({ height: '50vh' })}
`

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  color: #fff;
  margin-bottom: 1.1rem;
  ${laptop({ fontSize: '1.8rem',letterSpacing: 'normal' })}
`

const Button = styled.button`
  text-transform: uppercase;
  border: none;
  padding: 10px 20px;
  background-color: #fff;
  color: gray;
  font-weight: bold;
  font-weight: 600;
`

export default CaregoryItem
