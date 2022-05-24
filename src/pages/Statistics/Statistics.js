import React, {useContext} from 'react'
import { TaskSectionTitle } from '../../components/General'
import SubmitModal from '../../components/SubmitModal/SubmitModal'
import GlobalContext from '../../context/GlobalContext'
import {getReportStatistics, getDayStatics} from '../../utils/ReportStatistics'

const Statistics = () => {
  const [isShow, setIsShow] = React.useState(true) 
  const { savedEvents, updateCalendar } = useContext(GlobalContext)

  const statistics = getReportStatistics(savedEvents)

  console.log("Statistics", statistics)
  //console.log("All Days", getDayStatics(savedEvents))
  return (
    <>
      <TaskSectionTitle>
        {
          isShow && <SubmitModal setIsShow={setIsShow}/>
        }
      </TaskSectionTitle>
    </>

  )
}



export default Statistics