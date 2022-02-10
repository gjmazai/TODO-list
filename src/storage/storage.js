

let store = {

    _state: {
        todo: [
            { id: 1, title: "Run", text: "Today I run", progress: "green" },
            { id: 2, title: "Swim", text: "Tommorow I swim", progress: "yellow" },
        ],
        mainPage: {
            id: '',
            title: 'Область взаимодействия заметки TODO',
            text: 'Здесь будет текст заметки',
            progress: 'grey'
        }
    },

    getState() {
        return this._state;
    },

    updateMainPageData(idSearch) {
        let newMainPAge = this._state.todo.filter(el => el.id = idSearch);
        this._state.mainPage = newMainPAge;
        // т.к. я поменял state необходимо вызвать _callSubscriber(которая уже является renderEntireTree) для перерисовки страницы
        this._callSubscriber(this._state);
    },

    _callSubscriber() {
        console.log("state is change");
    },

    subscribe(observer) {
        this._callSubscriber = observer; // в качестве callback прилетает renderEntireTree из index.js и функция из
        //  этого файла теперь выполняет действия renderEntireTree 
    },

}



export default store;