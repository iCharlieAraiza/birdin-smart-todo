import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import GlobalContext from '../../context/GlobalContext'
import TaskDetails from './TaskDetails'
import CheckButton from './CheckButton'
/*
  2:29 implement the select button
*/


const ListSection = ({items}) => {
  const { selectedEvent, setSelectedEvent, dispatchCalEvent } = useContext(GlobalContext)
  const [isChecked, setIsChecked] = useState(false)


  const handleSelect = (e, item) => {
    if(e.target.classList.contains('card') || e.target.classList.contains('text')) {
      setSelectedEvent(item)
      setIsChecked(true)
    }
  }

  const handlerCheck = (item) => {
    const newEvent = {
      ...item,
      isChecked: !item.isChecked
    }
    setSelectedEvent(newEvent)
    dispatchCalEvent({type: 'update', payload: newEvent})
    //setSelectedEvent(newEvent)
  }
      

  return (
    <ListWrapper>
        {selectedEvent && <TaskDetails />}
        {items.map(item => (
            <ListItem key={item.id} onClick={(ev)=>handleSelect(ev, item)} className={`card ${item.isChecked ? 'checked' : ''}`}>
                <SelectButton className="check-button">
                    <CheckButton check={ item.isChecked } handlerCheck={()=>handlerCheck(item)} />
                </SelectButton>
                <Title className='text'  >
                  { item.title }
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
    &.checked {
      .text{
        text-decoration: line-through;
        opacity: 0.5;

      }
    }

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
  width: 100%;
`

const LabelTag = styled.div`
`

const Square = styled.div`
    width: 18px;
    height: 12px;
    border-radius: 8px;
    `
  



export default ListSection