import {FiArrowDown, FiCircle, FiArrowUp, FiAlertOctagon} from 'react-icons/fi'
import {BsArrowUpCircle} from 'react-icons/bs'


const elements = [
    {
       "label":"low",
       "color":"transparent",
       "icon":<FiArrowDown />
    },
    {
       "label":"medium",
       "color":"#00bfff",
       "icon":<FiCircle  fill="#00bfff" />
    },
    {
       "label":"high",
       "color":"#ff0000",
       "icon":<BsArrowUpCircle fill="rgb(255 229 0)"  />
    },
    {
       "label":"urgent",
       "color":"#f2d600",
       "icon":<FiAlertOctagon fill="#e93636" />
    }
 ]


export const getIcon = (label = '')=>{ 
    let item = elements.find(item => item.label === label);
    return item ? item.icon : '';
}