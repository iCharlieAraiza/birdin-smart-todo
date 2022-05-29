import React from 'react'
import styled from 'styled-components'

const StatisticsStatus = () => {
  return (
    <Section>
        <span>Report period:</span>
        <div>All time</div>
    </Section>)
}

const Section = styled.div`
    padding: 1rem 0;
    display: flex;
    span {
        font-weight: 600;
        margin-right: 1rem;
    }
`


export default StatisticsStatus