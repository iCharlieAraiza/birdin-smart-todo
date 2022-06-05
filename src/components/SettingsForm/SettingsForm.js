import React from 'react'
import styled from 'styled-components'


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
                    <Label> Email </Label>
                    <LabelValue> name@email.com </LabelValue>
                </div>
                <UpdateButton>
                    Update
                </UpdateButton>
            </Wrapper>
        </Section>
        <Section>
        <Wrapper>
                <div>
                    <Label> Password </Label>
                    <LabelValue> ******** </LabelValue>
                </div>
                <UpdateButton>
                    Change
                </UpdateButton>
            </Wrapper>
        </Section>
    </>
  )
}

const Section = styled.div`
    margin-bottom: 1.5rem;
    padding: 10px;
    max-width: 700px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title =  styled.div`
    font-size: 22px;
    font-weight: 500;
`

const ProfileDisplay = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #507fbb;
    overflow: hidden;
    text-align: center;
    margin-right: 1rem;
`

const ProfileDescription = styled.div`
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
    &:hover {
        background-color: #979797;
        color: white;
    }
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