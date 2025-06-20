import { useState } from "react";
import style from "./TaskInput.module.css";

export const TaskInput = ({addTask}) => {

    const [taskTitle, setTaskTitle] = useState("");
    const handleInputChange = (e) => {
        setTaskTitle(e.target.value);
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        if(taskTitle.trim()) {
            addTask(taskTitle);
            setTaskTitle("");
        }
    }

    return (
        <div className={`box ${style.element}`}>
            <h2 className={style.title}>Ajoute ta prochaine tâche !</h2>
            <form className={style.container} onSubmit={handleAddTask}>
                <input 
                    type="text"
                    className={style.input}
                    placeholder="Nouvelle tâche..." 
                    value={taskTitle}
                    onChange={handleInputChange}
                />
                <button className="button-primary" type="submit">Ajouter</button>
            </form>
        </div>
    );

}