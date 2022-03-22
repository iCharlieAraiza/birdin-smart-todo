import React from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowDown } from 'react-icons/md'

const labelData = [
    {
        label: 'none',
        color: 'transparent'
    },
    {
        label: 'blue',
        color: '#00bfff'
    },
    {
        label: 'red',
        color: '#ff0000'
    },
    {
        label: 'green',
        color: '#61bd4f'
    },
    {
        label: 'yellow',
        color: '#f2d600'
    },
    {
        label: 'orange',
        color: '#f69f1b'
    },]

const LabelDropdown = () => {
    return (
        <Wrapper>
            <LabelBox> 
                <LabelTag color='tranparent' />
                <MdKeyboardArrowDown />
            </LabelBox>
            <DropdownBox>
                {
                    labelData.map(label => {
                        return (
                            <DropdownItem key={label.label}>
                                <LabelTag color={label.color}/>
                                {label.label}
                            </DropdownItem>
                        )
                    })
                }
            </DropdownBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative; 
    width: 7rem;
`

const LabelBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    svg{
        width: 19px;
        height: 19px;
        opacity: 0.75;
    }
`

const DropdownBox = styled.div`
    position: absolute;
    top: 1.8rem;
    width: 100%;
    background-color: var(--pop-input--bg-color);
    border: 1px solid #666666;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    //padding: 5px 2px;
`

const DropdownItem = styled.div`
    padding: 6px 5px;
    cursor: pointer;
    display: flex;
    font-size: 12px;
    align-items: center;
    text-transform: capitalize;
    &:hover{
        background-color: var(--bg);
    }
`
const LabelTag = styled.div`
    border-radius: 8px;
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