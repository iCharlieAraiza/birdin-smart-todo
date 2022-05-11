import React from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Wrapper, LabelBox, DropdownBox, DropdownItem} from './Components'
import { FiArrowDown, FiCircle, FiArrowUp, FiAlertOctagon } from 'react-icons/fi'
import { useOutsideAlerter } from '../../../hooks/useOutsideAlerter'

const Priority = [
    {
        label: 'low',
        color: 'transparent',
        icon: <FiArrowDown />
    },
    {
        label: 'medium',
        color: '#00bfff',
        icon: <FiCircle />
    },
    {
        label: 'high',
        color: '#ff0000',
        icon: <FiArrowUp />
    },
    {
        label: 'urgent',
        color: '#f2d600',
        icon: <FiAlertOctagon />
    }
]

const PriorityDropdown = ({ priority = null, setPriority = ()=>{}}) => {
    if( priority == null) {
        setPriority(Priority[0])
    }

    console.log({priority})

    const { visible, setVisible, ref } = useOutsideAlerter(false)

    const handleClick = () => {
        setVisible(!visible)
    }

    const handleChange = (label) => {
        let item = Priority.find(item => item.label === label);
        if (item) {
            setPriority(item)
        } else {
            setPriority(Priority[0])
        }
    }

    if(priority == null) {
        return <div></div>
    }

    const priorityValue = priority.label ? priority.label : priority

    return (
        <Wrapper  ref={ref} onClick={handleClick}>
            <LabelBox>
                <IconWrapper>
                    {Priority.find(item => item.label === priorityValue).icon}
                </IconWrapper>
                <Label>{priorityValue}</Label>
                <MdKeyboardArrowDown />
            </LabelBox>
            {
                visible && (
                    <DropdownBox>
                        {Priority.map((item, index) => (
                            <DropdownItem key={index} onClick={()=>handleChange(item.label)}>
                                <IconWrapper>
                                    {item.icon}
                                </IconWrapper>
                                {item.label}
                            </DropdownItem>
                        ))}
                    </DropdownBox>
                )
            }
        </Wrapper>

    )
}

const IconWrapper = styled.div`
    margin-right: 5px;
    display: flex;
    svg{
        width: 17px;
        height: 17px;
        //margin-top: 1px;
    }
`

const Label = styled.div`
`

export default PriorityDropdown