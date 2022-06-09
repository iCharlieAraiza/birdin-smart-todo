import React from 'react'
import styled from 'styled-components'
import SettingsFormModal from '../SettingsModal/SettingsFormModal'


const SettingsForm = () => {

  return (
    <>
        <Section>
            <Wrapper>
                <Wrapper> 
                    <ProfileDisplay>
                        <h2>CA</h2>
                    </ProfileDisplay>
                    <div>
                        <Title>
                            Default Name
                        </Title>
                        <LabelValue>
                            Personal
                        </LabelValue>
                    </div>
                </Wrapper>
                <UpdateButton>
                    Update
                </UpdateButton>
            </Wrapper>
        </Section>
        <Section>
            <Wrapper>
                <div>
                    <FormGroup>
                        <Label> Email </Label>
                        <LabelValue> name@email.com </LabelValue>
                    </FormGroup>
                    <FormGroup>
                        <Label> Password </Label>
                        <LabelValue> ******** </LabelValue>
                    </FormGroup>
                </div>
                <UpdateButton>
                    Update
                </UpdateButton>
            </Wrapper>
        </Section>
        <SettingsFormModal />
    </>
  )
}

const Section = styled.div`
    margin-bottom: 1.5rem;
    padding: 10px;
    max-width: 780px;
    margin-left: 2rem;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const Title =  styled.div`
    font-size: 22px;
    font-weight: 500;
`

const ProfileDisplay = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: var(--placeholder-profile-blue); 
    overflow: hidden;
    text-align: center;
    margin-right: 1rem;
`

const FormGroup = styled.div`
    margin-bottom: 1.5rem;
`

const UpdateButton = styled.button`
    padding: 0.5rem 2rem;
    font-size: 12px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 21px;
    color: #111111;
    box-shadow: 1px 2px 1px #97bbd8;
    border: none;
    height: fit-content;
    &:hover {
        background-color: #979797;
        color: white;
    }
`

const Label = styled.label`
    font-weight: bold;
    margin-right: 0.5rem;
    &:after {
        content: ':';
    }
`

const LabelValue = styled.span`
`


export default SettingsForm