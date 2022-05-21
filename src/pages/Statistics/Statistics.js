import React, {useContext} from 'react'
import { TaskSectionTitle } from '../../components/General'
import SubmitModal from '../../components/SubmitModal/SubmitModal'
import GlobalContext from '../../context/GlobalContext'
import {getReportStatistics} from '../../utils/ReportStatistics'

const Statistics = () => {
  const [isShow, setIsShow] = React.useState(true) 
  const { savedEvents, updateCalendar } = useContext(GlobalContext)

  const statistics = getReportStatistics(savedEvents)

  console.log("Statistics", statistics)

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