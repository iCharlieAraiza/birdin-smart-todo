import React from 'react'
import styled from 'styled-components'

const Modal = ({toggle}) => {
  return (
    <>
        <Overlay onClick={toggle}/>
        <ModalWrapper>
            <ModalContent>
                <ModalHeader>
                    <ModalTitle>Confirm Remove Task</ModalTitle>
                    <ModalClose>
                        <ModalCloseIcon />
                    </ModalClose>
                </ModalHeader>
                <ModalBody>
                    <ModalContentWrapper>
                        <ModalContentText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed euismod, ipsum eget sagittis consequat, nisi nunc
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </ModalContentText>
                    </ModalContentWrapper>
                </ModalBody>
                <ModalFooter>
                    <ModalFooterButton>
                        <ModalFooterButtonText>Cancel</ModalFooterButtonText>
                    </ModalFooterButton>
                    <ModalFooterButton>
                        <ModalFooterButtonText>OK</ModalFooterButtonText>
                    </ModalFooterButton>
                </ModalFooter>
            </ModalContent>
        </ModalWrapper>
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

const ModalWrapper = styled.div`
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

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1rem;
    border-bottom: 1px solid #e6e6e642;
`

const ModalTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
`

const ModalClose = styled.div`
    cursor: pointer;
`

const ModalCloseIcon = styled.svg`
    width: 19px;
    height: 19px;
    opacity: 0.75;
`

const ModalBody = styled.div`
    padding: 1.5rem 1rem;
`

const ModalContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ModalContentTitle = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
`

const ModalContentText = styled.div`
    font-size: 1rem;
    font-weight: 400;
    color: #dbdbdb;
`

const ModalFooter = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 1rem;
    border-top: 1px solid #e6e6e64d;
    background-color: #ffffff0a;
`

const ModalFooterButton = styled.div`
    cursor: pointer;
    padding: 0.5rem 1rem;
    //border: 1px solid #e6e6e6;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 600;
    background-color: #4d5066;
    border: 1px solid gray;
    margin-left: 5px;
    &:hover{
        background-color: #e6e6e6;
    }
`

const ModalFooterButtonText = styled.div`
    font-size: 12px;
    font-weight: 600;
`


export default Modal