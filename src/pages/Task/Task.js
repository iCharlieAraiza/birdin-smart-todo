import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { TaskSectionTitle } from '../../components/General'
import DNDList from '../../components/DNDList/DNDList'
import GlobalContext from '../../context/GlobalContext'
import styled from 'styled-components'
import Details from '../../components/Details'
import SubmitInput from '../../components/SubmitInput/SubmitInput'

const Task = () => {    
    const {slug} = useParams()
    const {savedEvents, dispatchCalEvent} = useContext(GlobalContext)
    const  [items, setItems] = useState()
    const [selectItem, setSelectItem] = useState(null)

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
        <Wrapper>
            <Main>
                <TaskSectionTitle>This is a new task {slug}</TaskSectionTitle>
                <ListContainer>
                    <DNDList items={items} drop={onEndTodo} toggle={(el) => setSelectItem(el)}/>
                </ListContainer>
                <InputContainer>
                    <SubmitInput />
                </InputContainer>
            </Main>
            <Details item={selectItem}/>
        </Wrapper>
    )
}

const ListContainer = styled.div`
    overflow: scroll;
    height: 80vh;
    margin-top: 2rem;
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
    margin-top: 8px;`


export default Task