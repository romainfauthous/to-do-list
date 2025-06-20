import style from "./Header.module.css";
import reactLogo from "../../assets/react.svg";

export const Header = () => {

    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <img src={reactLogo} alt="logo" width={50} height={50} />
                <div>
                    <h1>To-do List</h1>
                    <div className="color-gray">
                        <code>Organisez vos tâches et suivez votre avancée dans leurs réalisations !</code>
                    </div>
                </div>
            </div>
            <code className="color-primary">
                v.1.0
            </code>
        </div>
    );

}