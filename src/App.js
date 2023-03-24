import { Route, Routes } from 'react-router';
import LoginPage1 from './pages/LoginPage1';
import LoginPage2 from './pages/LoginPage2';
import './App.css';
import Viewpage from './pages/viewpage';

function App() {
  return (
    
     <Routes>
      <Route path='/' element={<LoginPage1 />}></Route>
      <Route path='/details' element={<LoginPage2 />}></Route>
      <Route path='/details/view' element={<Viewpage />}></Route>
     </Routes>
   
  );
}

export default App;
