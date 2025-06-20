import style from "./TaskItem.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const TaskItem = ({task, editTask, deleteTask}) => {

    return (
        <li 
            className={`${style.container} ${task?.completed ? style.success : style.default}`}
            onClick={() => editTask(task.id, !task.completed)}
        >
            <div className={style.item}>
                <div className={`${style.id} ${task?.completed ? style.idSuccess : style.idDefault}`}>
                    {task.id}
                </div>
                <div className={task?.completed ? style.contentSuccess : style.contentDefault}>
                    {task.title}
                </div>
            </div>
            <button 
                className="button-primary" 
                onClick={(e) => {
                    e.stopPropagation();
                    deleteTask(task.id);
                }}
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </li>
    );
}