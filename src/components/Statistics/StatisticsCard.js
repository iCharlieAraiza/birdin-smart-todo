import React from 'react'
import styled from 'styled-components'

const StatisticsCard = ({DayData}) => {
    console.log("DayData", DayData.priority)
    return (
        <Wrapper>
            <Section>
                <Card>
                    <Figure>
                        {DayData.tasksCount ? DayData.tasksCount : 0}
                    </Figure>
                    <Label>
                        All tasks
                    </Label>
                </Card>
                <Card>
                    <Figure>
                        {DayData.completedTasksCount ? DayData.completedTasksCount : 0}
                    </Figure>
                    <Label>
                        Completed
                    </Label>
                </Card>
                <Card>
                    <Figure>
                        {DayData.percentCompleted ? DayData.percentCompleted : 0}%
                    </Figure>
                    <Label>
                        Ratio completed
                    </Label>
                </Card>
            </Section>
            
            <Separator />
        
            <Section>
                <Card>
                    <Figure>
                        {DayData.important.completedTasksCount ? DayData.important.completedTasksCount : 0}
                        <TotalLabel>
                            {DayData.important.tasksCount ? DayData.important.tasksCount : 0}
                        </TotalLabel>
                    </Figure>
                    <Label>
                        Important
                    </Label>
                </Card>
                <Card>
                    <Figure>
                        {DayData.priority.urgent.completedTasksCount ? DayData.priority.urgent.tasksCount : 0}
                        <TotalLabel>
                            {DayData.priority.urgent.tasksCount ? DayData.priority.urgent.tasksCount : 0}
                        </TotalLabel>
                    </Figure>
                    <Label>
                        Urgent
                    </Label>
                </Card>
                <Card>
                    <Figure>
                        {DayData.priority.medium.completedTasksCount ? DayData.priority.medium.completedTasksCount : 0}
                        <TotalLabel>
                            {DayData.priority.medium.tasksCount ? DayData.priority.medium.tasksCount : 0}
                        </TotalLabel>
                    </Figure>
                    <Label>
                        Medium
                    </Label>
                </Card>

                <Card>
                    <Figure>
                        {DayData.priority.high.completedTasksCount ? DayData.priority.high.completedTasksCount : 0}
                        <TotalLabel>
                            {DayData.priority.high.tasksCount ? DayData.priority.high.tasksCount : 0}
                        </TotalLabel>
                    </Figure>
                    <Label>
                        High
                    </Label>
                </Card>
            </Section>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`


const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 48%;
    max-width: 600px;
`

const Separator = styled.div`
    height: 6rem;
    width: 1px;
    background-color: #ffffff36;
    `

const Card = styled.div`
`

const Figure = styled.div`
    font-size: 2.3rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 5px;
`

const Label = styled.div`
    font-weight: 200;
    text-align: center;
    user-select: none
`

const TotalLabel = styled.span`
    font-size: 16px;
    color: #c3c3c3;
    &:before {
        content: "/";
    }
`

export default StatisticsCard