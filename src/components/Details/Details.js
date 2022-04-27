import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import TitleInput from './components/TitleInput'
import CheckBox from './components/CheckBox'
import {BsTrash, BsCalendar3} from 'react-icons/bs'
import PriorityDropdown from './components/PriorityDropdown'
import LabelDropdown from './components/LabelDropdown'
import GlobalContext from '../../context/GlobalContext'
import {MdOutlineTimer} from 'react-icons/md'
import TYPE_OF_TIME from '../../utils/type_of_time.json'
import Modal from '../Modal'
import { useModal } from '../../hooks/useModal'


const Details = ({item}) => {
    const {dispatchCalEvent} = useContext(GlobalContext)
    if(item === null) {
        return ''
    }
    
    const [title, setTitle] = useState(item.title)
    const [check, setCheck] = useState(false)
    const [priorityState, setPriorityState] = useState(item.priority)
    const [labels, setLabels] = useState(item.labels)
    const [kindOfEstimated, setKindOfEstimated] = useState(item.kindOfEstimated == undefined ? 'minutes' : item.kindOfEstimated)
    const [estimatedTime, setEstimatedTime] = useState(item.estimatedTime == undefined ? 0 : item.estimatedTime)
    const [description, setDescription] = useState(item.description)
    const [isChecked, setIsChecked] = useState(item.isChecked)

    const {isShowing, toggle} = useModal()

    console.log('Item is checked', item.isChecked)

    useEffect(()=>{
        setTitle(item.title)
        setCheck(item.isChecked)
        setLabels(item.labels)
        setPriorityState(item.priority)
        setKindOfEstimated(item.kindOfEstimated == undefined ? 'minutes' : item.kindOfEstimated)
        setEstimatedTime(item.estimatedTime == undefined ? 0 : item.estimatedTime)
        setDescription(item.description)
        setIsChecked(item.isChecked)
    }, [item])

    const handleLabel = (label) => {
        const newItem = {...item, labels: label}
        dispatchCalEvent({type: 'update', payload: newItem})
        setLabels(label)
    }

    const handlePriority = (priority) => {
        setPriorityState(priority)
        const newItem = {...item, priority: priority}
        dispatchCalEvent({type: 'update', payload: newItem})
    }

    const handleTitle = (title) => {
        //setTitle(title)
        const newItem = {...item, title: title}
        dispatchCalEvent({type: 'update', payload: newItem})
    }

    const handleKindOfEstimated = (event) => {
        //setKindOfEstimated(kindOfEstimated)
        const newItem = {...item, kindOfEstimated: event.target.value}
        dispatchCalEvent({type: 'update', payload: newItem})
        setKindOfEstimated(event.target.value)
    }

    const handleEstimatedTime = () => {
        const newItem = {...item, estimatedTime: estimatedTime}
        dispatchCalEvent({type: 'update', payload: newItem})
    }
    
    const handleDescription = () => {
        const newItem = {...item, description: description}
        dispatchCalEvent({type: 'update', payload: newItem})
    }

    const deleteEvent = () => {
        dispatchCalEvent({type: 'delete', payload: item})
        toggle()
    }

    console.log({isChecked})

    return (
        <>
            <Wrapper>
                <Section>
                    <CheckBox item={item} setIsChecked={setIsChecked} isChecked={isChecked}/>
                    <TitleInput
                        title={title} 
                        check={check} 
                        handlerTitle={handleTitle} 
                        handlerCheck={true}
                        isChecked={isChecked }/>
                </Section>
                <Separator />
                <RemoveTask>
                    <Remove onClick={toggle}>
                        <BsTrash/> Remove Task 
                    </Remove>
                </RemoveTask>
                <Separator />
                <Section>
                    <Label>
                        Date
                    </Label>   
                    <Section>
                        <SelectDate>
                            <BsCalendar3/>
                            20/02/22
                        </SelectDate>
                    </Section> 
                </Section>
                <Separator />
                <Section>
                    <Label>
                        Priority
                    </Label>
                    <Section>
                        <PriorityDropdown priority={priorityState} setPriority={handlePriority} />
                    </Section>
                </Section>
                <Separator />
                <Section>
                    <Label>
                        Labels
                    </Label>
                    <Section>
                        <LabelDropdown selectedLabel={labels} setSelectedLabel={handleLabel}/>
                    </Section>
                </Section>
                <Separator />
                <Section>
                    <Label>
                        Duration
                    </Label>
                    <Section>
                        <MdOutlineTimer/>
                        <InputTime 
                            type="number" 
                            min='0' 
                            value={estimatedTime} 
                            onChange={el => setEstimatedTime(el.target.value)}
                            onBlur={handleEstimatedTime}/>
                        <SelectTypeOfTime value={kindOfEstimated} onChange={handleKindOfEstimated}>
                            {
                                TYPE_OF_TIME.map((type, index) => {
                                    return (
                                        <option value={type.value} key={index}>{type.label}</option>
                                    )
                                })
                            }
                        </SelectTypeOfTime>
                    </Section>
                </Section>
                <Separator/>
                <Description 
                    placeholder='Add description' 
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                    onBlur={handleDescription}>
                </Description>
                <Separator/>
            </Wrapper>
            {isShowing && <Modal toggle={toggle} confirm={deleteEvent} />}
        </>
    )
}

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Wrapper = styled.div`
    padding: 2rem;
    padding-top: 4rem;
    height: 100vh;
    width: 320px;
`

const RemoveTask = styled.div`
    display: flex;
    justify-content: end;
`

const Remove = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(245 67 83);
    font-weight: 300;
    cursor: pointer;
    svg {
        margin-right: 0.4rem;
        filter: invert(55%) sepia(47%) saturate(5890%) hue-rotate(331deg) brightness(106%) contrast(108%);
    }
`

const Label = styled.label`
    display: flex;
    flex-wrap: wrap;
`

const Separator = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e6e6e638;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

const SelectDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    svg {
        margin-right: 0.4rem;
        opacity: 0.6;
    }
`

const InputTime = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 1px solid gray;
    width: 2.8rem;
    margin-right: 0.5rem;
    text-align: center;
    &:focus{
        outline: none;
    }
`

const SelectTypeOfTime = styled.select`
    background-color: transparent;
    border: none;
    width: 6rem;
    &:focus{
        outline: none;
    }
`
const Description = styled.textarea`
    display: block;
    background-color: transparent;
    min-height: 6rem;
    width: 100%;
    border: none;
    outline: none;
    resize: none;
`

export default Details