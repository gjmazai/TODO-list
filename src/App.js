import './App.css';
import Header from './components/Header/Header';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

let App = (props) => {
  return (
    <div className='App'>
      <Header className="Head" />
      <Navbar className="Nav" state={props.state} updateMainPageData={props.updateMainPageData} /> {/*пробрасываю state через пропсы к компонентам*/}
      <Main className="Main" mainPageData={props.state.mainPage} />
    </div >
  );
}

export default App;
