import {
  Facebook,
  Instagram,
  MailOutlined,
  Phone,
  Room,
  Twitter,
  YouTube,
} from '@mui/icons-material'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AV.</Logo>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          deleniti debitis quod blanditiis consectetur qui hic porro, veritatis,
          expedita dolorum illum quis ullam, quo doloribus nemo ipsam. Sunt
          tempore vitae quas. Facilis iure suscipit aut fugit.
        </Description>
        <SocialContainer>
          <SocialIcon color='3b5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='e4405f'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55acee'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='cc181e'>
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Usefull Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} />
          622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} />
          +1 223 26 99
        </ContactItem>
        <ContactItem>
          <MailOutlined style={{ marginRight: '10px' }} />
          contact@av.dev
        </ContactItem>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.1rem 1.1rem 1.1rem 0;
`
const Logo = styled.h1`
  display: inline-block;
  /* font-size: 3rem; */
  font-weight: bold;
  font-family: 'Nosifer', cursive;
`

const Description = styled.p`
  margin: 10px 0;
  line-height: 1.5rem;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.1rem;
`

const Center = styled.div`
  flex: 1;
  padding: 1.1rem;
`

const Title = styled.h3`
  margin-bottom: 1.5rem;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.1rem;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 1.1rem 1.1rem 1.1rem 0;
`

const ContactItem = styled.div`
  margin-bottom: 1.1rem;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 50%;
`

export default Footer
