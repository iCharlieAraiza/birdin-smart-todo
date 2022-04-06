import React, { useState } from 'react'
import { ReactSortable } from "react-sortablejs";
import styled from 'styled-components'
import List from './List';


const DNDList = ({items = [], drop, toggle}) => {
  if(items === undefined || items.length === 0) {
    return <div>Loading</div>
  }

  const [list , setList] = useState(items)


  const onEnd = ()=>{
    if(drop) {
      drop(list)
    }
  }

  return (
    <ListWrapper>
      <ReactSortable
        list={list}
        setList={setList}
        onEnd={onEnd}
      >
        {list.map(item => (
          <List title={item.title} key={item.id} date={item.date} toggle={toggle} item={item}/>
        ))}
      </ReactSortable>
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  margin-top: 2rem;
  padding-right: 2rem;
`

export default DNDList