import React from 'react'
import styled from 'styled-components'

const StatisticsStatus = () => {
  return (
    <Section>
        <span>Reports and lists of tasks:</span>
        <div>Last 30 days</div>
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