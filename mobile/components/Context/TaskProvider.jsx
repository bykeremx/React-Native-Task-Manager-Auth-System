import React, { createContext, useReducer } from 'react';

const TaskContext = createContext();

const initialState = {
    tasks: [],
};

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, tasks: [...state.tasks, action.payload] };
        case 'DELETE_TASK':
            return { ...state, tasks: state.tasks.filter((task) => task.id !== action.payload) };
        case 'GET_TASKS':
            return { ...state, tasks: action.payload };
        default:
            return state;
    }
};

export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(taskReducer, initialState);
    return (
        <TaskContext.Provider value={{ TaskState: state, TaskDispatch: dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;
