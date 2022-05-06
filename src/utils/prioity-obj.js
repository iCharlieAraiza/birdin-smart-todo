import {FiArrowDown, FiAlertOctagon} from 'react-icons/fi'
import {BsArrowUpCircle, BsExclamationOctagon} from 'react-icons/bs'
import {FaRegCircle} from 'react-icons/fa'

const elements = [
    {
       "label":"low",
       "color":"transparent",
       "icon":<FiArrowDown />
    },
    {
       "label":"medium",
       "color":"#00bfff",
       "icon":<FaRegCircle fill="#00bfff" />
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