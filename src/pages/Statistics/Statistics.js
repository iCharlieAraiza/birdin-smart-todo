import React from 'react'
import { TaskSectionTitle } from '../../components/General'
import SubmitModal from '../../components/SubmitModal/SubmitModal'

const Statistics = () => {
  const [isShow, setIsShow] = React.useState(true) 

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