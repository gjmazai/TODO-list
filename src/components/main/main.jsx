import style from "./Main.module.css"

const Main = (props) => {

    return (
        <main className={style.main}>
            <h3>{props.mainPageData.title}</h3>
            <p>{props.mainPageData.text}</p>
            <p>{props.mainPageData.progress}</p>
        </main>
    );
}

export default Main;