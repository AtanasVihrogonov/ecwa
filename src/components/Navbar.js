import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search'
import { Badge, IconButton } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { mobile,laptopXL } from '../responsive'

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            <Search style={{ color: 'gray', fontSize: '16px' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>AV.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color='primary'>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
  ${laptopXL({ width: '100%', margin: '0 auto',maxWidth: '1770px' })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: '10px 0'})}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: '10px' })}
`

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile({ width: '50px' })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: 'Nosifer', cursive;
  ${mobile({ fontSize: '24px' })}
`

const Right = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  text-transform: uppercase;
  justify-content: flex-end;
  margin-right: 10px;
  ${mobile({ flex: 2,justifyContent: 'center' })}
`

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  cursor: pointer;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`

export default Navbar
