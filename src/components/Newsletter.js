import { Send } from '@mui/icons-material'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { laptopXL } from '../responsive'

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  )
}

const Container = styled.div`
  height: 40vh;
  background-color: #a7b9a1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${laptopXL({
    width: '100%',
    margin: '0 auto',
    maxWidth: '1770px',
  })}
`
const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.1rem;
  ${mobile({ fontSize: '3rem' })}
`
const Description = styled.div`
  font-size: 1.3rem;
  font-weight: 300;
  margin-bottom: 1.1rem;
  ${mobile({ textAlign: 'center', padding: '10px' })}
`
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 2px solid #4a5a45;
  ${mobile({ width: '80%' })}
`
const Input = styled.input`
  border: none;
  outline: none;
  flex: 8;
  padding-left: 1.1rem;
  letter-spacing: 1px;
`
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #4a5a45;
  color: #fff;
  &:hover {
    background-color: #62775b;
  }
`

export default Newsletter
