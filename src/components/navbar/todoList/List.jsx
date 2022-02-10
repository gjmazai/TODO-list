import style from "./List.module.css";


const List = (props) => {

    let seeTODO = () => {
        props.updateMainPageData(props.id);
    }

    return (
        <button className={style.element} onClick={seeTODO}>
            <li className={style.el}>
                {props.title}: {props.progress}
            </li>
        </button>
    );
}

export default List; 