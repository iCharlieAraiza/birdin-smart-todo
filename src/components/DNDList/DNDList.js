import React, { useState, useEffect } from 'react'
import { ReactSortable } from "react-sortablejs";
import styled from 'styled-components'
import List from './List';


const DNDList = ({items = [], drop, toggle, isSelected = false}) => {
  if(items === undefined || items.length === 0) {
    return ''
  }

  useEffect(()=>{
    setList(items)
  } ,[items])

  const [list , setList] = useState(items)

  const onEnd = () => {
    if (drop) {
      drop(list)
    }
  }

  return (
    <ListWrapper>
      <ReactSortable
        animation={150}
        list={list}
        setList={setList}
        onEnd={onEnd}>
        {list.map(item => (
          <List title={item.title} key={item.id} date={item.date} toggle={toggle} item={item} isSelected={isSelected}/>
        ))}
      </ReactSortable>
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  padding-right: 2rem;
`

export default DNDList