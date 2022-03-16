
import styled from "styled-components";

export const TaskSectionTitle = styled.div`
display: flex;
align-items: center;
font-size: 1.5rem!important;
padding-top: 4rem;

svg {
  margin-left: 0.5rem;
  opacity: 0.5;
}
`

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`




const StatusLightContainer = styled.div`
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`

const InnerLight = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props => props.color};
 `

export const StatusLight = ({status})=>{

  const color = {
    'active': {
      'solid': '#23ff08',
      'outline': '#01db014a',
    },
    'completed':{
      'solid': '#00a1ff',
      'outline': '#00a1ff36',
    },
    'overdue': {
      'solid': 'red',
      'outline': '#ff000057'
    },
  }

  const selectedColor = color[status];

  if(selectedColor === undefined) {
    return<></>;
  }

  return (
    <StatusLightContainer color={selectedColor.outline}>
      <InnerLight color={selectedColor.solid}/>
    </StatusLightContainer>
  )
}