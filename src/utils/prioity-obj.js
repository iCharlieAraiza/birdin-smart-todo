import {FiArrowDown, FiCircle, FiArrowUp, FiAlertOctagon} from 'react-icons/fi'

const elements = [
    {
       "label":"low",
       "color":"transparent",
       "icon":<FiArrowDown />
    },
    {
       "label":"medium",
       "color":"#00bfff",
       "icon":<FiCircle />
    },
    {
       "label":"high",
       "color":"#ff0000",
       "icon":<FiArrowUp />
    },
    {
       "label":"urgent",
       "color":"#f2d600",
       "icon":<FiAlertOctagon />
    }
 ]


export const getIcon = ()=>{ 
    return elements[0].icon
}