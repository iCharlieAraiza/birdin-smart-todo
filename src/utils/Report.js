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

export function initDayStatus(items) {

}