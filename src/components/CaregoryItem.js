import styled from 'styled-components'

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
  margin: 5px;
  height: 70vh;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.8;
  background-color: #a7b9a1;
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
