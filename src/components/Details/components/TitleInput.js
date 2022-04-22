import React, {useState} from 'react'
import styled from 'styled-components'

const TitleInput = ({isChecked = '', title = '', handlerTitle }) => {

    const [localTitle, setLocalTitle] = useState(title)

    console.log({localTitle})

    const handleChange = (e) => {
        handlerTitle(e.target.textContent)
    }

    return (
    <Wrapper 
        className={isChecked&& 'checked' } 
        id="title-input"
        value={localTitle} onChange={setLocalTitle} onBlur={handleChange} 
        autoFocus="autofocus" 
        role="textbox" 
        contentEditable={true} 
        suppressContentEditableWarning={true}>
    { title }  
    </Wrapper>  )
}

const Wrapper = styled.div`
    width: 100%;
    background-color: transparent;
    font-size: 1.3rem;
    border: none;
    display: block;
    margin-left: 6px;

    &:focus {
        outline: none;
    }

    &.checked{
        text-decoration: line-through;
        opacity: 0.5;
    }
    `



export default TitleInput