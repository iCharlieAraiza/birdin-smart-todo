import React, {useState} from 'react'
import styled from 'styled-components'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useOutsideAlerter } from '../../../hooks/useOutsideAlerter'


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

const LabelDropdown = ({selectedLabel, setSelectedLabel}) => {

    console.log({selectedLabel})
    if(selectedLabel==null) {
        setSelectedLabel(labelData[0])
    }
    console.log({selectedLabel})
    //const [selectedLabel, setSelectedLabel] = useState(labelData[0])
    const { visible, setVisible, ref } = useOutsideAlerter(false)


    const handleChange = (label) => {
        console.log('label', label)
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
    
    console.log('selectedLabel', selectedLabel)

    if(selectedLabel == null) {
        return <div></div>
    }

    return (
        <Wrapper ref={ref} onClick={handleClick}>
            <LabelBox> 
                <LabelTag color={selectedLabel.color} />
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
    &:hover, &.active{
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