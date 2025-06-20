import { TaskItem } from "../taskItem/taskItem";
import style from "./TaskList.module.css";

export const TaskList = ({
    tasksList,
    editTask,
    deleteTask,
    incompletedTasks
}) => {

    const taskList = tasksList.map((task) => (
        <TaskItem 
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
        />
    ))

    if(tasksList && tasksList.length > 0) {
        return (
            <div className="box">
                <h2 className={style.title}>
                    {incompletedTasks > 0 && (
                        <>Il vous reste <span className="important">{incompletedTasks}</span> tâches à réaliser !</>
                    )}

                    {incompletedTasks === 0 && (
                        <>Vous avez terminé toutes vos tâches !</>
                    )}
                </h2>

                {tasksList && tasksList.length > 0 && (
                    <ul className={style.container}>
                        {taskList}
                    </ul>
                )}
            </div>
        );
    } else {
        return (
            <div className="box">
                <h2 className={style.emptyState}>Salut ! Vous n'avez rien à faire !</h2>
            </div>
        );
    }
}