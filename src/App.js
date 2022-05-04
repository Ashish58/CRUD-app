import './App.css';

//components
import NavBar from './components/NavBar';
import Crud from './components/Crud';
import AllUser from './components/AllUser';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>

    <Routes>
    <Route path="/" element={<Crud/>} />
    <Route path="alluser" element={<AllUser/>}/>
    <Route path="adduser" element={<AddUser/>}/>
    <Route path="/edit/:id" element={<EditUser/>}/>
    </Routes> 
    </BrowserRouter>

  );
}

export default App;
