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

const Details = ({item}) => {
    const {dispatchCalEvent} = useContext(GlobalContext)
    if(item === null) {
        return ''
    }
    
    const [title, setTitle] = useState(item.title)
    const [check, setCheck] = useState(false)
    const [priorityState, setPriorityState] = useState(item.priority)
    const [labels, setLabels] = useState(item.labels)

    useEffect(()=>{
        setTitle(item.title)
        setCheck(item.isChecked)
        setLabels(item.labels)
        setPriorityState(item.priority)
    }, [item])

    const handleLabel = (label) => {
        setLabels(label)
        const newItem = {...item, labels: label}
        dispatchCalEvent({type: 'update', payload: newItem})
    }

    const handlePriority = (priority) => {
        setPriorityState(priority)
        const newItem = {...item, priority: priority}
        dispatchCalEvent({type: 'update', payload: newItem})
    }

    const handleTitle = (title) => {
        setTitle(title)
        const newItem = {...item, title: title}
        dispatchCalEvent({type: 'update', payload: newItem})
    }

    return (
        <Wrapper>
            <Section>
                <CheckBox />
                <TitleInput title={title} check={check} handlerTitle={handleTitle} handlerCheck={true}/>
            </Section>
            <Separator />
            <RemoveTask>
                <Remove>
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
                    Time
                </Label>
                <Section>
                    <MdOutlineTimer/>
                    <InputTime type="number" min='0' />
                    <SelectTypeOfTime>
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

        </Wrapper>
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
    width: 300px;
    height: 100vh;
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
    font-size: 12px
`

export default Details