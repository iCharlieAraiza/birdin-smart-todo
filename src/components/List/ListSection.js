import React, {useContext} from 'react'
import styled from 'styled-components'
import GlobalContext from '../../context/GlobalContext'
import TaskDetails from './TaskDetails'
/*
  2:29 implement the select button
*/


const ListSection = ({items}) => {
  const { selectedEvent, setSelectedEvent } = useContext(GlobalContext)

  console.log('selectedEvent: ', selectedEvent)
  return (
    <ListWrapper>
        {selectedEvent && <TaskDetails />}
        {items.map(item => (
            <ListItem key={item.id} onClick={()=>setSelectedEvent(item)}>
                <SelectButton>
                    <CheckCircle />
                </SelectButton>
                <Title>
                  {item.title}
                </Title>
                <LabelTag>
                    <Square />
                </LabelTag>
            </ListItem>
        ))}

    </ListWrapper>
  )
}

const ListWrapper = styled.div`
`

const ListItem = styled.div`
    background-color: #8d8d8d30;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`

const SelectButton = styled.div`
  margin-right: 0.3rem;
`

const CheckCircle = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #ffffff00;
    border: 2px solid #ffffffb0;
`

const Title = styled.div`
  margin-right: auto;
  margin-left: 0.5rem;
`

const LabelTag = styled.div`
`

const Square = styled.div`
    width: 18px;
    height: 12px;
    border-radius: 8px;
    `
  



export default ListSection