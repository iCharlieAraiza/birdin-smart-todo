import React from 'react'
import styled from 'styled-components'
import {GrClose} from 'react-icons/gr'

const ModaWrapper = (props) => {  
    return (
    <>
        <Overlay onClick={props.toggle}/>
        <Wrapper>
            <ModalContent>
                {props.children}
            </ModalContent>
        </Wrapper>
    </>
  )
}

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
`

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 500px;
    background-color: var(--bg);
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    z-index: 101;

`

const ModalContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export default ModaWrapper