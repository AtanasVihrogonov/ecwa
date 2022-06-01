import React, { useState } from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'
import { sliderItems } from '../data'
import { mobile, tablet, laptop, laptopXL } from '../responsive'

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)
  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Show Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: pink;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-top: 1.8rem;
  ${mobile({ display: 'none' })}
  ${tablet({ display: 'none' })}
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #c5d8be;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  /* padding-top: 1.8rem; */
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex: 1;
  padding-top: 6rem;
  padding-left: 6rem;
  ${laptop({ paddingTop: '5rem', paddingLeft: '5rem' })}
`
const Image = styled.img`
  height: 80%;
  ${laptop({ height: '75%' })}
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`
const Title = styled.h1`
  text-transform: uppercase;
  font-size: 4rem;
  ${laptop({ fontSize: '3.5rem' })}
`
const Desc = styled.p`
  padding: 10px;
  text-transform: uppercase;
  margin: 3.7rem 0;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 3px;
  ${laptop({ fontSize: '1.1rem' })}
`
const Button = styled.button`
  text-transform: uppercase;
  padding: 1.2rem;
  background-color: transparent;
  letter-spacing: 1px;
  cursor: pointer;
`

export default Slider
