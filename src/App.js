import './App.css';

//components
import NavBar from './components/NavBar';
import Curd from './components/Curd';
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>

    <Routes>
    <Route path="/" element={<Curd/>} />
    <Route path="alluser" element={<AllUser/>}/>
    <Route path="adduser" element={<AddUser/>}/>
    </Routes> 
    </BrowserRouter>

  );
}

export default App;
