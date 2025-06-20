import { useEffect, useState } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";

// Ce composant est utilisé pour afficher l'intégralité de la fonctionnalité de Tache.
export const TaskContainer = () => {

    const [tasksList, setTasksList] = useState([]);
    
    useEffect(() => {
        const storedTasks = localStorage.getItem("tasksList");
        if(storedTasks) {
            setTasksList(JSON.parse(storedTasks));
        }
    }, []);

    const saveTasksToLocalStorage = (tasks) => {
        localStorage.setItem("tasksList", JSON.stringify(tasks));
    };

    const addTask = (title) => {
        const newTask = {
            id: tasksList.length ? tasksList[tasksList.length - 1].id + 1 : 1,
            title: title,
            completed: false
        }
        // Ajouter newTask à la liste
        const updatedTasks = [...tasksList, newTask];
        setTasksList(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    }

    const editTask = (id, completedValue) => {
        const updatedTasks = tasksList.map((task) =>
            task.id === id ? {...task, completed: completedValue} : task
            );
        setTasksList(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);
    }

    const deleteTask = (id) => {
        // Inclure dans le filtre les éléments qui n'ont pas le même id que l'id selectionné
        const updatedTasks = tasksList.filter((task) => task.id !== id);
        setTasksList(updatedTasks);
        saveTasksToLocalStorage(updatedTasks);   
    }

    const getTaskCounts = () => {
        // Filtrer un tableau avec les tâches qui ont "completed: true"
        const completedTasks = tasksList.filter((task) => task.completed === true).length;
        const incompletedTasks = tasksList.length - completedTasks;
        return {
            completedTasks,
            incompletedTasks
        }
    }

    const {completedTasks, incompletedTasks} = getTaskCounts();

    return (
        <main>
            <Header />
            <TaskInput addTask={addTask} />
            <TaskList 
                tasksList={tasksList} 
                editTask={editTask} 
                deleteTask={deleteTask} 
                incompletedTasks={incompletedTasks} />
            <Footer completedTasks={completedTasks} />
        </main>
    );

}