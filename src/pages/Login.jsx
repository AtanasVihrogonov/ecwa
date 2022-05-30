import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder='username' />
          <Input placeholder='password' />
          <Button>Login</Button>
          <Link>Do not you remember the password?</Link>
          <Link>Create a new account</Link>
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
  width: 25%;
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
  flex-direction: column;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 8px;
`

const Button = styled.button`
  width: 30%;
  border: none;
  padding: 0.7rem 1.2rem;
  background-color: #4a5a45;
  color: #fff;
  border-radius: 5px;
  margin-bottom: 1rem;
  cursor: pointer;
`

const Link = styled.a`
  margin: 5px 0;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #4a5a45;
  }
`

export default Login
