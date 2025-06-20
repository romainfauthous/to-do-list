import style from "./Footer.module.css";

export const Footer = ({completedTasks}) => {

    if(completedTasks) {
        return(
            <code className={style.footer}>
                Vous avez réalisé {completedTasks} tâche
                {completedTasks > 1 ? "s" : ""} grâce à cette application !
            </code>
        );
    }

    return null;
}