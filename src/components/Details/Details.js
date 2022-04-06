import React, {useState} from 'react'
import styled from 'styled-components'
import TitleInput from './components/TitleInput'
import CheckBox from './components/CheckBox'
import {BsTrash, BsCalendar3} from 'react-icons/bs'
import PriorityDropdown from './components/PriorityDropdown'
import LabelDropdown from './components/LabelDropdown'



const Details = ({item}) => {
    if(item === null) {
        return <div>Loading</div>
    }

    console.log({item})

    const {title, priority} = item;


    const [check, setCheck] = useState(false)
    const [priorityState, setPriorityState] = useState(priority)
    const [labels, setLabels] = useState()

    //console.log({priority})

    return (
        <Wrapper>
            <Section>
                <CheckBox />
                <TitleInput title={title} check={check} handlerCheck={true} />
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
                    <BsCalendar3/> 
                    20/02/22
                </Section> 
            </Section>
            <Separator />
            <Section>
                <Label>
                    Priority
                </Label>
                <Section>
                    <PriorityDropdown priority={priorityState} setPriority={setPriorityState} />
                </Section>
            </Section>
            <Separator />
            <Section>
                <Label>
                    Labels
                </Label>
                <Section>
                    <LabelDropdown selectedLabel={labels} setSelectedLabel={setLabels}/>
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

`

const Separator = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e6e6e638;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

export default Details