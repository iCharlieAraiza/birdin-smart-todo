import React, {FC, useContext, useState} from 'react'
import styled from 'styled-components'
import GlobalContext from '../../context/GlobalContext'
import TaskDetails from './TaskDetails'
import CheckButton from './CheckButton'
import { ReactSortable } from "react-sortablejs";
import {arrayMoveImmutable} from "array-move";

/*
  2:29 implement the select button
*/


const ListSection = ({items, setItems}) => {
  const { selectedEvent, setSelectedEvent, dispatchCalEvent } = useContext(GlobalContext)
  const [isChecked, setIsChecked] = useState(false)
  const [moved, setMoved] = useState(false)
  const [newState, setNewState] = useState([...items].sort((a, b) => a.position - b.position))


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

  //console.log('auxItems: ', auxItems)
  return (
    <ListWrapper>
      {selectedEvent && <TaskDetails />}
      <ReactSortable list={items} setList={setItems} options={sortableOptions} onEnd={expOnEnd} >
      
      {items.map((item, index) => (
          <ListItem key={item.id} blockIndex={index} onClick={(ev)=>handleSelect(ev, item)} className={`card ${item.isChecked ? 'checked' : ''}`} onDragEnd={()=>handlerPosition()} index-component={index}>
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
      </ReactSortable>
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  margin-top: 2rem;
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