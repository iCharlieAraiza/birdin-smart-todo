import React, {useContext} from 'react'
import { TaskSectionTitle } from '../../components/General'
import GlobalContext from '../../context/GlobalContext'
import {getReportStatistics, getDayStatics} from '../../utils/ReportStatistics'
import { Popup } from 'semantic-ui-react'
import { AiFillInfoCircle } from 'react-icons/ai'
import styled from 'styled-components'
import StatisticsStatus from '../../components/Statistics/StatisticsStatus'
import StatisticsCard from '../../components/Statistics/StatisticsCard'
import BarChart from '../../components/Statistics/BarChart'

const Statistics = () => {
  const [isShow, setIsShow] = React.useState(true) 
  const { savedEvents, updateCalendar } = useContext(GlobalContext)


  const statistics = getReportStatistics(savedEvents)

  console.log("Statistics", statistics)
  //console.log("All Days", getDayStatics(savedEvents))
  return (
    <>
      <TaskSectionTitle>
        Statistics 
        <Popup className="hello" content='In this section, you will manage all your scheduled tasks' trigger={<AiFillInfoCircle />} />
      </TaskSectionTitle>
      <StatisticsSection>
        <StatisticsStatus />
        <StatisticsCard DayData={ statistics } />
        <BarChart itemList={statistics.dayStatics._30days.daysElements} />

      </StatisticsSection>
    </>

  )
}

const StatisticsSection = styled.div`
  padding-right: 1rem;
`


export default Statistics