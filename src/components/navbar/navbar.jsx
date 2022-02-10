import "./Navbar.css";
import List from "./todoList/List";


const Navbar = (props) => {
    // c помощью метода map преобразуем массив todo из state в массив элементов todo list 
    let listElements = props.state.todo.map(el => <List
        id={el.id} title={el.title} text={el.text}
        progress={el.progress} updateMainPageData={props.updateMainPageData} />)
    return (
        <nav className="Navbar">
            <ul>
                {listElements}
            </ul>
        </nav>
    );
}

export default Navbar;