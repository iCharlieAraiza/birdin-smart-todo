import React from 'react'
import styled from 'styled-components'
import { TaskSectionTitle } from '../../components/General'
import SettingsMenu from '../../components/SettingsMenu'
import { AiOutlineLeft } from 'react-icons/ai'
import BackButton from '../../components/BackButton/BackButton'


const SettingsLayout = (props) => {
    console.log(props)
    return ( 
        <>
            <Section>
                <SettingsMenu>
                    <TaskSectionTitle>
                        <BackButton/>
                        {props.title}
                    </TaskSectionTitle>
                    <div>
                        <p>{props.subtitle}</p>
                    </div>
                </SettingsMenu>
                <FormContainer>
                    {props.children}
                </FormContainer>
            </Section>

        </>
  )
}

const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const FormContainer = styled.div`
    width: 100%;
    max-width: 800px;
    padding-right: 2rem;
    padding-top: var(--top-padding);
    @media (min-width: 500px) {
        width: 70%;
    }
`
 

export default SettingsLayout