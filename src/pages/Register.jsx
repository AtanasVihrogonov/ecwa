import styled from 'styled-components'

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder='name' />
          <Input placeholder='last name' />
          <Input placeholder='username' />
          <Input placeholder='email' />
          <Input placeholder='password' />
          <Input placeholder='confirm password' />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(105, 159, 81);
  background: linear-gradient(
    323deg,
    rgba(167, 185, 161, 0.9) 0%,
    rgba(169, 210, 156, 1) 68%
  );
`

const Wrapper = styled.div`
  width: 40%;
  padding: 1.1rem;
  background-color: #fff;
  border-radius: 5px;
`

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 300;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1.1rem 0.8rem 0 0;
  padding: 8px;
`

const Agreement = styled.span`
  font-size: 12px;
  margin: 1.1rem 0;
`

const Button = styled.button`
  width: 20%;
  border: none;
  padding: 0.7rem 1.2rem;
  background-color: #4a5a45;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
`

export default Register
