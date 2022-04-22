import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { TaskSectionTitle } from '../../components/General'
import DNDList from '../../components/DNDList/DNDList'
import GlobalContext from '../../context/GlobalContext'
import styled from 'styled-components'
import Details from '../../components/Details'
import SubmitInput from '../../components/SubmitInput/SubmitInput'
import dayjs from 'dayjs'
import PlaceholderInbox from '../../components/General/PlaceholderInbox'

const Task = ({slug, type}) => {    
    const patameters = useParams()
    const {savedEvents, dispatchCalEvent} = useContext(GlobalContext)
    const  [items, setItems] = useState([])
    const [selectItem, setSelectItem] = useState(null)
    const [typePage, setTypePage] = useState()


    useEffect(()=>{
        setTypePage(window.location.pathname)
    })

    useEffect(()=>{
        console.log("Type page", typePage)
        setSelectItem(null)
    }, [typePage])


    const updateSaveEvent = () => {
        if(type === 'pending'){
            return savedEvents.filter(evt => !evt.isChecked)
        } else if (type === 'label') {
            return savedEvents.filter(evt => evt.labels?.label === patameters.slug)
        }
    }

    useEffect(() => {
        const itemList = updateSaveEvent()
        setItems(itemList.sort((a,b) => a.todoPos - b.todoPos))

        // Check if selected item is in the list
        if(selectItem){
            const index = itemList.findIndex(item => item.id === selectItem.id)
            if(index === -1){
                setSelectItem(null)
            }
        }

    }, [savedEvents, typePage])



    const onEndTodo = (list = [])=>{
        const newItems = list.map((item, index) => {
            item['todoPos'] = index;
            return item;
        })
        dispatchCalEvent({type: 'update', payload: newItems})
    }

    const saveHandle = (item) => {
        const newItem = {
            ...item,
            title: item.value,
            id: window.Date.now(),
            isChecked: false,
            date: dayjs().valueOf()
        }
        setItems(items)
        dispatchCalEvent({type: 'push', payload: newItem})
    }



    return (
        <Wrapper>
            <Main>
                <TaskSectionTitle>This is a new task {type}</TaskSectionTitle>
                <ListContainer>
                    {items.length > 0 
                    ? <DNDList items={items} drop={onEndTodo} toggle={(el) => setSelectItem(el)}/> 
                    : <PlaceholderInbox/>}
                    
                </ListContainer>
                <InputContainer>
                    <SubmitInput save={saveHandle}/>
                </InputContainer>
            </Main>
            <Details item={selectItem}/>
        </Wrapper>
    )
}

const ListContainer = styled.div`
    overflow: scroll;
    margin-top: 2rem;
    height: calc(100vh - 12.5rem);
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const Main = styled.div`
    overflow: scroll;
    width: 100%;
`

const InputContainer = styled.div`
    margin-right: 2rem;
    padding: 10px;
    background-color: #0000002b;
    margin-top: 8px;
    border-radius: 5px;    
`



export default Task