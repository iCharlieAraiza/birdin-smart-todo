import LabelData from './label-data.json'
import PriorityData from './priority.json'
import dayjs from 'dayjs'


const ObjectStructure = () => {
    const item = {
        id: window.Date.now(),
        title: "Hello",
        description: "",
        important: false,
        isChecked: false,
        labels: LabelData[0],
        priority: PriorityData[0]
    }
    return item
}
export default ObjectStructure

