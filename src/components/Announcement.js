import styled from 'styled-components'
import { mobile } from '../responsive'

const Announcement = () => {
  return <Container>Super Deal! Free Shipping on Orders Over £50</Container>
}

const Container = styled.div`
  height: 30px;
  background-color: #4a5a45;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ letterSpacing: 'normal' })}
`

export default Announcement
