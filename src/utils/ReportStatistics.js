import dayjs from 'dayjs';

export const getReportStatistics = (SavedEvents) => {
    if(!SavedEvents) return;

    const tasksCount = SavedEvents.length;
    const completedTasksCount = SavedEvents.filter(item => item.isChecked).length; 


    const today = new Date();

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
    urgent.completedTasksCount = SavedEvents.filter(item => item.priority.label === "urgent" && item.isChecked).length
    urgent.percentCompleted = getPercentCompleted(urgent.tasksCount, urgent.completedTasksCount)

    return {
        tasksCount,
        completedTasksCount,
        percentCompleted: getPercentCompleted(tasksCount, completedTasksCount),
        priority:{
            high,
            medium,
            urgent,
        },
        dayStatics: {
            _30days: {
                //getByDay: getDateStatics(SavedEvents),
                getByDay: new Date().setDate(today.getDate() - 30)
            }
        }
        //completedTasks,
    } 
}

function getPercentCompleted(tasksCount, completedTasksCount) {
    const percentCompleted = tasksCount > 0 ? (( completedTasksCount * 100 ) / tasksCount) : 0;
    return Math.round(percentCompleted * 10 ) / 10
}

function getDateStatics(SavedEvents) {
    // crear un hashmap con los últimos 30 días
    const dateStatics = {}
    const dateList = getDateList(SavedEvents)
    dateList.forEach(date => {
        dateStatics[date] = getDayStatus(SavedEvents, date)
    })
    return dateStatics
}

//export default getReportStatistics