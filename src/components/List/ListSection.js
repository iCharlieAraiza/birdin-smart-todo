import React, {FC, useContext, useState} from 'react'
import styled from 'styled-components'
import GlobalContext from '../../context/GlobalContext'
import TaskDetails from './TaskDetails'
import CheckButton from './CheckButton'
import { ReactSortable } from "react-sortablejs";
import { MdLabelImportantOutline, MdLabelImportant } from 'react-icons/md'
import { getLabelComponent } from '../../utils/label-obj'
import { getIconFixed } from '../../utils/prioity-obj'

/*
  2:29 implement the select button
*/

const ListSection = ({items, setItems, setMoveElement}) => {
  const { selectedEvent, setSelectedEvent, dispatchCalEvent } = useContext(GlobalContext)
  const [isChecked, setIsChecked] = useState(false)
  const [moved, setMoved] = useState(false)
  const [newState, setNewState] = useState([...items].sort((a, b) => a.position - b.position))
  const [isImportant, setIsImportant] = useState(false)

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

  const handlerPosition = ()=>{

    setMoved(true)
    //dispatchCalEvent({type: 'update', payload: newEvent})
  }
          
      
  const sortableOptions = {
    animation: 150,
    fallbackOnBody: true,
    swapThreshold: 0.65,
    ghostClass: "ghost",
    group: "shared"
  };

  function sortFunction (a, b) {
    if (a.position == b.position) {
      return 0;
    } 
    return a.position - b.position

  }

  const onEnd = ({oldIndex, newIndex}) => {
    const newItems = [...items].map((item, index) => {
      item.position = index
      return item;
    })
    console.log('newItems: ', newItems)
    console.log('oldItems: ', items)
    console.log('Array sorted', newItems.sort(function(a,b) {return a.position - b.position}) )
    setMoveElement(newIndex)
    updateLocalstorage(newItems)
    //dispatchCalEvent({type: 'update', payload: newItems})
  }

  function updateLocalstorage(newState){
    //console.
    console.log(newState)

    const storageEvents = localStorage.getItem('saveEvents')
    const parsedEvents = storageEvents ? JSON.parse(storageEvents) : []
    //update the localstorage
    const newEl = parsedEvents.map((item) => {
      let el = newState.find(e => e.id === item.id)
      return el == undefined ? item : el;
    })

    localStorage.setItem('saveEvents', JSON.stringify(newEl))
    //localStorage.setItem('saveEvents', JSON.stringify(newStateTest))

    //dispatchCalEvent({type: 'update', payload: newState
  }

  const expOnEnd = () => {
    const newItems = [...items].map((item, index) => {
      item.position = index
      return item;
    })
    dispatchCalEvent({type: 'update', payload: newItems})
  }

  const handleIsImportant = (item) => {
    const newEvent = {
      ...item,
      important: !item.important
    }
    setSelectedEvent(newEvent)
    dispatchCalEvent({type: 'update', payload: newEvent})
  }

  console.log('fix item: ', items)
  return (
    <ListWrapper>
      {selectedEvent && <TaskDetails />}
      <ReactSortable list={items} setList={setItems} options={sortableOptions} onEnd={onEnd} >
      
      {items.map((item, index) => (
          <ListItem key={item.id} blockIndex={index} onClick={(ev)=>handleSelect(ev, item)} className={`card ${item.isChecked ? 'checked' : ''}`} onDragEnd={()=>handlerPosition()} index-component={index}>
              <SelectButton className="check-button">
                  <CheckButton check={ item.isChecked } handlerCheck={()=>handlerCheck(item)} />
              </SelectButton>
              <Title className='text'  >
                { item.priority?.label != 'low' && getIconFixed(item.priority.label) }
                { item.title }
                <TimeDescription className='text'>
                  { (item.estimatedTime || item.estimatedTime > 0) && 'Estimated time ' + item.estimatedTime + ' ' + (item.kindOfEstimated == undefined ? '' : item.kindOfEstimated) }
                  { item.labels?.label !== "none" && <> {getLabelComponent(item.labels.label)} </>}
                </TimeDescription>
              </Title>
              <LabelTag>
                  <Square>
                    {!item.important ? ( <ButtonContainer onClick={() => handleIsImportant(item) }> 
                                <MdLabelImportantOutline /> 
                              </ButtonContainer> ) : 
                              ( <ButtonContainer className='active' onClick={() => handleIsImportant(item)}> 
                                <MdLabelImportant/>
                              </ButtonContainer> )}
                  </Square>
              </LabelTag>
          </ListItem>
      ))}
      </ReactSortable>
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  margin-top: 2rem;
`

const ListItem = styled.div`
    cursor: pointer;
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
  svg {
    font-size: 12px!important;
    margin-right: 0.4rem;
    margin-left: 0;
    padding: 0;
  }
`

const LabelTag = styled.div`
`

const Square = styled.div`
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
const ButtonContainer = styled.div`
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
 
const TimeDescription = styled.div`
    font-size: 12px;
    color: #b3b3b3;
    margin-top: 3px;
`


export default ListSection