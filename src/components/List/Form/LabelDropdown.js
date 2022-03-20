import React from 'react'
import styled from 'styled-components'

const labelData = [
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
            <LabelBox> Select Number </LabelBox>
            <DropdownBox>
                {
                    labelData.map(label => {
                        return (
                            <DropdownItem key={label.label} color={label.color}/>
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
`

const DropdownBox = styled.div`
    position: absolute;
    width: 100%;
    background-color: var(--navbar-bg-color);
`

const DropdownItem = styled.div`
    padding: 8px;
    border: 4px solid #6385b7;
    border-bottom: 2px solid #6385b7;
    border-top: 2px solid #6385b7;
    background-color: ${props => props.color};
    cursor: pointer;
`

export default LabelDropdown;