import styled from 'styled-components'


export const ListItem = styled.div`
background-color: #8d8d8d30;
padding: 0.5rem;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 8px;
&.checked {
  .text{
    text-decoration: line-through;
    opacity: 0.5;

  }
  .active{
    svg{
      opacity: 0.3;
      fill: white;
    }
  }
}

`

export const SelectButton = styled.div`
margin-right: 0.3rem;
`

export const CheckCircle = styled.div`
width: 15px;
height: 15px;
border-radius: 50%;
background-color: #ffffff00;
border: 2px solid #ffffffb0;
`

export const Title = styled.div`
margin-right: auto;
margin-left: 0.5rem;
width: 100%;
`

export const LabelTag = styled.div`
`

export const Square = styled.div`
width: 20px;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
svg{
  cursor: pointer;
  width: 20px;
  height: 20px;
}
`
export const ButtonContainer = styled.div`
svg{
opacity: 0.4;
}
&.active{
svg{
  opacity: 1;
  //background-color: #f7cb4e;
  fill: #f7cb4e;
    }
 }
`

export const TimeDescription = styled.div`
font-size: 12px;
color: #b3b3b3;
margin-top: 3px;
`
