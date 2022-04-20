import React from 'react'
import placeholder from '../../assets/svg/dark-inbox-placeholder.svg'
import styled from 'styled-components'

const PlaceholderInbox = () => {
  return (
    <Wrapper>
      <Container>
        <Image>
          <img src={placeholder} alt="placeholder" />
        </Image>
        <Text>
          <Title>no task yet</Title>
        </Text>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: auto;
  user-select: none; 
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  

`

const Container = styled.div`
padding-bottom: 4rem;
`

const Image = styled.div`
  padding-bottom: 1rem;
  img{
    display: block;
    margin: auto;
  }
  `

const Text = styled.div`
`

const Title = styled.h3`
    font-size: 1rem;
    color: #a6a6a6;
    margin: 0;
    text-align: center;
    text-transform: capitalize;
  `


export default PlaceholderInbox