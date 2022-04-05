import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { TaskSectionTitle } from '../../components/General'
import DNDList from '../../components/DNDList/DNDList'
import GlobalContext from '../../context/GlobalContext'


const Task = () => {    
    const {slug} = useParams()
    const {savedEvents, dispatchCalEvent} = useContext(GlobalContext)
    const  [items, setItems] = useState(savedEvents.filter(evt => !evt.isChecked))

    useEffect(() => {
        console.log(items)
        setItems(savedEvents.
            sort((a,b) => a.date - b.date).
            sort((a,b)=>a['todoPos']-b['todoPos']).
            filter(evt => !evt.isChecked))
    }, [savedEvents])


    const onEndTodo = (list = [])=>{
        
        const newItems = list.map((item, index) => {
            item['todoPos'] = index;
            return item;
        })
        dispatchCalEvent({type: 'update', payload: newItems})
    }


    return (
        <div>
            <TaskSectionTitle>This is a new task {slug}</TaskSectionTitle>
            <DNDList items={items} drop={onEndTodo}/>
        </div>
    )
}

export default Task