import React from 'react'
import styled from 'styled-components'
import {MdLabelImportantOutline, MdLabelImportant} from 'react-icons/md'


const ImportantButton = ({important, setImportant}) => {
    if(important == undefined || setImportant == undefined) {
       return ''
    }

    return (
        <ImportantButtonStyled>
            {important ? <MdLabelImportant onClick={() => setImportant(false)}/> : <MdLabelImportantOutline className='outline-icon' onClick={() => setImportant(true)}/>}
        </ImportantButtonStyled>
  )
}

const ImportantButtonStyled = styled.div`
    cursor: pointer;

    .outline-icon {
        fill: #b7b7b7;
    }

    svg{
        fill: var(--color-yellow);
        width: 1.5rem;
        height: 1.5rem;
    }
`

export default ImportantButton