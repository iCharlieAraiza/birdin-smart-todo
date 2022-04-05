import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { TaskSectionTitle } from '../../components/General'
import DNDList from '../../components/DNDList/DNDList'
import GlobalContext from '../../context/GlobalContext'


const Task = () => {    
    const {slug} = useParams()
    const {savedEvents, dispatchCalEvent} = useContext(GlobalContext)
    const  [items, setItems] = useState()

    useEffect(() => {
        const itemList = savedEvents.filter(evt => !evt.isChecked)
        setItems(itemList.sort((a,b) => a.todoPos - b.todoPos))
    }, [])

    useEffect(() => {
        const itemList = savedEvents.filter(evt => !evt.isChecked)
        setItems(itemList.sort((a,b) => a.todoPos - b.todoPos))
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