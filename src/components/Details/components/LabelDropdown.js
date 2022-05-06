import React, {useState} from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useOutsideAlerter } from '../../../hooks/useOutsideAlerter'
import {LabelBox, DropdownBox} from './Components'
import labelData from '../../../utils/label-data.json'

const LabelDropdown = ({selectedLabel, setSelectedLabel}) => {
    if(selectedLabel==null) {
        setSelectedLabel(labelData[0])
    }

    const { visible, setVisible, ref } = useOutsideAlerter(false)

    const handleChange = (label) => {
        let item = labelData.find(item => item.label === label);
        if (item) {
            setSelectedLabel(item)
        } else {
            setSelectedLabel(labelData[0])
        }
        //setSelectedLabel(labelData[e.target.value])
    }

    const handleClick = () => {
        setVisible(!visible)
    }
    
    if(selectedLabel == null) {
        return <div></div>
    }

    return (
        <Wrapper ref={ref} onClick={handleClick}>
            <LabelBox> 
                <LabelTag color={selectedLabel.color} />
                {selectedLabel.label}
                <MdKeyboardArrowDown />
            </LabelBox>
            {visible && (
            <DropdownBox>
                {
                    labelData.map(label => {
                        return (
                            <DropdownItem key={label.label} 
                                        className={selectedLabel.label == label.label && 'active' } 
                                        onClick={()=>handleChange(label.label)}>
                                <LabelTag color={label.color}/>
                                {label.label}
                            </DropdownItem>
                        )
                    })
                }
            </DropdownBox>
            )}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative; 
    width: 7rem;
`

const DropdownItem = styled.div`
    padding: 6px 5px;
    cursor: pointer;
    display: flex;
    font-size: 12px;
    align-items: center;
    text-transform: capitalize;
    &:hover, &.active{
        background-color: var(--bg);
    }
`
const LabelTag = styled.div`
    border-radius: 3px;
    background-color: ${props => props.color};
    text-transform: capitalize;
    font-weight: bold; 
    font-size: 12px;
    color: #143231;
    width: 1.2rem;
    height: 12px;
    margin-right: 8px;
    border:2px solid #cfcfcf;
`

export default LabelDropdown;