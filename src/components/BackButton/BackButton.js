import React from 'react'
import { withRouter } from "react-router-dom";
import { AiOutlineLeft } from 'react-icons/ai'

const BackButton = (props) => {
    
    const handleClick = () => {
        props.history.goBack()
    }

    return (
        <span>
            <AiOutlineLeft onClick={handleClick} style={{"cursor":"pointer"}}/>
        </span>
    )
}

export default withRouter(BackButton)