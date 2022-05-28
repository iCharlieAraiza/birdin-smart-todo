/*
[
    '03/01/2020': { taskCompleted: 0, taskInProgress: 0, taskNotStarted:  },
    '04/01/2020': { taskCompleted: 0, taskInProgress: 0, taskNotStarted:  },
]


1. Get all days task
2. Calculate number de tareas pendientes
3. Asignar como objeto dentro del hash map



*/

import React, {useContext} from "react";
import ContextWrapper from "../context/ContextWrapper";

export function getDayStatus(items) {
    const numberTasks = items.length;
    const completedTasks = items.filter(item => item.isChecked).length;
    const inProgressTasks = items.filter(item => item.status === "in-progress").length;
    const importantTasks = items.find(item => item.important === true);
    const isImportant = items.filter(item => item.important === true && item.isChecked !== true).length > 0;

    return {
        numberTasks,
        completedTasks,
        inProgressTasks,
        importantTasks,
        details:{
            completedRatio: `${completedTasks} / ${numberTasks} completed`,
            status: (completedTasks == numberTasks && numberTasks > 0) ? "completed" : "active",
            isImportant: isImportant,
            regularTask: items.filter(item => item.important === false && !item.isChecked).length,
        }
    }
}

export function getPendingsNumberBySection(items) {
    const pendings = items.filter(item => item.isChecked === false);
    const pendingsBySection = {
        pending: pendings.length,
        important: pendings.filter(item => item.important === true).length,
        high: pendings.filter(item => item.priority.label === "high").length,
        medium: pendings.filter(item => item.priority.label === "medium").length,
        urgent: pendings.filter(item => item.priority.label === "urgent").length,
    }
    return pendingsBySection;
}


export function initDayStatus(items) {

}