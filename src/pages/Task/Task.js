import React, {useContext, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { TaskSectionTitle } from '../../components/General'
import { FiLayers } from 'react-icons/fi'
import DNDList from '../../components/DNDList/DNDList'
import GlobalContext from '../../context/GlobalContext'
import styled from 'styled-components'
import Details from '../../components/Details'
import SubmitInput from '../../components/SubmitInput/SubmitInput'
import dayjs from 'dayjs'
import PlaceholderInbox from '../../components/General/PlaceholderInbox'
import LabelData from '../../utils/label-data.json'
import PriorityData from '../../utils/priority.json'
import { getIcon } from '../../utils/prioity-obj.js'
import {MdLabelImportant } from 'react-icons/md'
import { getPriorityObject } from '../../utils/prioity-obj.js'
import { getLabelObject } from '../../utils/label-obj.js'


const Task = ( {type}) => {    
    const patameters = useParams()
    const {savedEvents, dispatchCalEvent} = useContext(GlobalContext)
    const  [items, setItems] = useState([])
    const [completedItems, setCompletedItems] = useState([])
    const [selectItem, setSelectItem] = useState(null)
    const [typePage, setTypePage] = useState(window.location.pathname)
    const positionAtribute = getPositionAttribute(type)
    const [typeObject ,setTypeObject] = useState({})

    useEffect(()=>{
        setTypePage(window.location.pathname)
    },[patameters.slug])

    useEffect(()=>{
        setSelectItem(null)
    }, [typePage])

    function getPositionAttribute(type) {
        if(type === undefined){
            return null
        }
        let parameterSlug = `position-${type}`;
        if(type === 'label'){
            parameterSlug = `position-${patameters.slug}`;
        } 
        return parameterSlug
    }

    const updateSaveEvent = () => {
        if(type == 'pending'){
            setTypeObject({isChecked: false})
            return savedEvents.filter(evt => !evt.isChecked)
        } else if (type === 'label') {
            setTypeObject({...typeObject, label: getLabelObject(patameters.slug)})
            return savedEvents.filter(evt => evt.labels?.label === patameters.slug)
        } else if (type === 'priority') {
            setTypeObject({...typeObject, priority: getPriorityObject(patameters.slug)})
            return savedEvents.filter(evt => evt.priority?.label === patameters.slug)
        } else if (type === 'important') {
            setTypeObject({...typeObject, important: true})
            return savedEvents.filter(evt => evt.important)
        } return savedEvents.filter(evt => evt.important)
    }

    useEffect(() => {
        const itemList = updateSaveEvent()
        const pendingTasks = itemList.filter(item =>  !item.isChecked )
        const completedTasks = itemList.filter(item => { return item.isChecked == true })
        setItems(pendingTasks.sort((a,b) => a[positionAtribute] - b[positionAtribute]))
        setCompletedItems(completedTasks.sort((a,b) => a[positionAtribute+'Completed'] - b[positionAtribute+'Completed']))
        // Check if selected item is in the list
        if(selectItem){
            const item = itemList.find(item => item.id === selectItem.id)
            const index = itemList.findIndex(item => item.id === selectItem.id)
            if(index === -1){
                setSelectItem(null)
            }else{
                setSelectItem(item)
            }
        }
    }, [savedEvents, typePage])

    

    const onEndTodo = (list = [])=>{
        const newItems = list.map((item, index) => {
            item[positionAtribute] = index;
            return item;
        })
        dispatchCalEvent({type: 'update', payload: newItems})
    }

    const onEndTodoCompleted = (list = [])=>{
        const newItems = list.map((item, index) => {
            item[positionAtribute+'Completed'] = index;
            return item;
        })
        dispatchCalEvent({type: 'update', payload: newItems})
    }

    console.log("selected item", selectItem)

    const getTitleByType = (type) => {
        switch(type){
            case 'pending':
                return (<><FiLayers style={{"marginRight": "0.5rem", "opacity":"0.55"}}/> Pending Tasks</>)
            case 'label':
                const label = LabelData.find(item => item.label === patameters.slug)

                return (<>
                            <CategoryLabel color={label.color}/>
                            {label.title} Label Tasks
                        </>) 
            case 'priority':
                const priorityTag = PriorityData.find(item => item.label === patameters.slug)
                return (
                        <TitleLabelFlex style={{textTransform:"capitalize"}}>
                            { getIcon(priorityTag?.label) }
                            { `${priorityTag?.label} priority tasks` }
                        </TitleLabelFlex>
                    )
            case 'important':
                return (<>
                    <MdLabelImportant fill='var(--color-yellow)' style={{"marginRight":"0.6rem"}}/> Important Tasks
                    </>)

            case 'all':
                return 'All'
            default:
                return 'All'
        }
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
                <TaskSectionTitle>
                    {getTitleByType(type)}
                </TaskSectionTitle>
                <ListContainer>
                    {items.length > 0 
                    &&  (<>
                            <StatusLabel>Pending: <NumberOfTasks>{items.length}</NumberOfTasks> </StatusLabel>
                            <DNDList items={items} drop={onEndTodo} toggle={(el) => setSelectItem(el)} isSelected={selectItem}/> 
                            <div style={{padding:"5px"}}></div>
                        </>)
                    }
                    
                    {completedItems.length > 0
                    && <>
                        <StatusLabel>Completed: <NumberOfTasks> {completedItems.length} </NumberOfTasks></StatusLabel>
                        <DNDList items={completedItems} drop={onEndTodoCompleted} toggle={(el) => setSelectItem(el)} isSelected={selectItem}/>
                    </>
                    }

                    {items.length === 0 && completedItems.length === 0 && <PlaceholderInbox/>}

                </ListContainer>

                <InputContainer>
                    <SubmitInput save={saveHandle} type={typeObject} key={window.Date.now()}/>
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

const CategoryLabel = styled.div`
    width: 1.1rem;
    height: 1.1rem ;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: 1px solid var(--border-color);
    margin-right: 0.8rem;
    box-shadow: 0px 0px 5px  ${props => props.color};
`

const StatusLabel = styled.div`
    font-size: 12px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    width: fit-content;
    background-color: #00000026;
    padding: 3px 8px;
`

const NumberOfTasks = styled.div`
    text-align: center;
    width: fit-content;
    margin-left: 5px;
`

const TitleLabelFlex = styled.span`
    display: flex;
    align-items: center;
    text-transform: capitalize;
`

export default Task

