import React from 'react'
import styled from 'styled-components'
import { TaskSectionTitle } from '../../components/General'
import SettingsMenu from '../../components/SettingsMenu'
import { AiOutlineLeft } from 'react-icons/ai'


const SettingsLayout = (props) => {
    console.log(props)
    return ( 
        <>
            <TaskSectionTitle>
                <span>
                    <AiOutlineLeft />
                </span>
                {props.title}
            </TaskSectionTitle>
            <div>
                <p>{props.subtitle}</p>
            </div>
            <Section>
                <SettingsMenu />
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
    @media (min-width: 500px) {
        width: 70%;
    }
`
 

export default SettingsLayout