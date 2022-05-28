import dayjs from 'dayjs';

export const getReportStatistics = (SavedEvents) => {
    if(!SavedEvents) return;

    const tasksCount = SavedEvents.length;
    const completedTasksCount = SavedEvents.filter(item => item.isChecked).length; 
    
    const today = new Date();

    const important ={} 
    important.tasksCount = SavedEvents.filter(item => item.important).length;
    important.completedTasksCount = SavedEvents.filter(item => item.important && item.isChecked).length;
    important.percentCompleted = getPercentCompleted(important.taskCount, important.completedTasksCount)

    const high = {}
    high.tasksCount = SavedEvents.filter(item => item.priority.label === "high").length
    high.completedTasksCount = SavedEvents.filter(item => item.priority.label === "high" && item.isChecked).length
    high.percentCompleted = getPercentCompleted(high.tasksCount, high.completedTasksCount)
    
    const medium = {}
    medium.tasksCount = SavedEvents.filter(item => item.priority.label === "medium").length
    medium.completedTasksCount = SavedEvents.filter(item => item.priority.label === "medium" && item.isChecked).length
    medium.percentCompleted = getPercentCompleted(medium.tasksCount, medium.completedTasksCount)

    const urgent = {}
    urgent.tasksCount = SavedEvents.filter(item => item.priority.label === "urgent").length
    urgent.completedTasksCount = SavedEvents.filter(item => (item.priority.label === "urgent" && item.isChecked)).length
    urgent.percentCompleted = getPercentCompleted(urgent.tasksCount, urgent.completedTasksCount)


    //const daysElements = getDayStatics(...SavedEvents)
    const daysElements = getDayStatics()
    const statistics = {}

    return {
        tasksCount,
        completedTasksCount,
        percentCompleted: getPercentCompleted(tasksCount, completedTasksCount),
        important,
        priority:{
            high,
            medium,
            urgent,
        },
        dayStatics: {
            _30days: {
                daysElements
            }
        }
        //completedTasks,
    } 

    function getDayStatics ({period = 30}) {
        let days = []
        let format = 'DD-MM-YYYY'
        
        for ( let i = 0; i < period; i++ ) {
            const date = dayjs().subtract(i, 'day').format(format)
            days[date] = {key:i, taskTotal: 0, taskCompleted: 0, priority:{high:0, medium:0, urgent:0, low: 0}}
        }

        SavedEvents.forEach((item, index) => {
            const date = dayjs(item.date).format(format)
            if (days[date]) {
                const label = item.priority.label
                days[date].taskTotal++
                days[date].taskCompleted = item.isChecked ? days[date].taskCompleted + 1 : days[date].taskCompleted
            }
        })

        return {days}
    }

    function getDayStatics() {
        const format = 'DD/MM'
        const completedByDay = {}
        const allTasksByDay = {}

        for ( let i = 0; i < 30; i++ ) {
            const date = dayjs().subtract(i, 'day').format(format)
            completedByDay[date] = { x: date, y: 0}
            allTasksByDay[date] = { x: date, y: 0}
        }

        SavedEvents.forEach((item, index) => {
            const date = dayjs(item.date).format(format)
            if (completedByDay[date]) {
                if (item.isChecked) {
                    completedByDay[date].y++
                }
            }
            if (allTasksByDay[date]) {
                allTasksByDay[date].y++
            }
        })

        return { completedByDay: refactorArray(completedByDay).reverse(), allTasksByDay: refactorArray(allTasksByDay).reverse() }
    }
}

function refactorArray(array) {
    const newArray = []
    for (let key in array) {
        newArray.push({
            x: key,
            y: array[key].y
        })  
    }
    return newArray

}


function getPercentCompleted(tasksCount, completedTasksCount) {
    const percentCompleted = tasksCount > 0 ? (( completedTasksCount * 100 ) / tasksCount) : 0;
    return Math.round(percentCompleted * 10 ) / 10
}