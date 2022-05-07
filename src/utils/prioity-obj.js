import {FiArrowDown, FiAlertOctagon} from 'react-icons/fi'
import {BsArrowUpCircle, BsExclamationOctagon} from 'react-icons/bs'
import {FaRegCircle} from 'react-icons/fa'
import {IoMdRemoveCircleOutline} from 'react-icons/io'

const elements = [
    {
       "label":"low",
       "color":"transparent",
       "icon":<FiArrowDown />
    },
    {
       "label":"medium",
       "color":"#00bfff",
       "icon":<IoMdRemoveCircleOutline style={{"font-size":"1.8rem", "margin-left": "4px",  "margin-right": "9px"}} fill="#00bfff" />
    },
    {
       "label":"high",
       "color":"#ff0000",
       "icon":<BsArrowUpCircle fill="rgb(255 229 0)"  />
    },
    {
       "label":"urgent",
       "color":"#f2d600",
       "icon":<BsExclamationOctagon fill="#e93636" />
    }
 ]
 
export const getIcon = (label = '')=>{ 
    let item = elements.find(item => item.label === label);
    return item ? item.icon : '';
}