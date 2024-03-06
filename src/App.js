
import './App.css';

import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Homepage from './Homepages/Homepage';
import Log from './Components/Log/Log';
import Maping from './Components/Header/Maping';






function App() {
  return (
    <div >
        <BrowserRouter>
        <Routes>
          <Route path='/Login'element={<Log/>}/> 
          <Route path='/'element={<Homepage/>}/>
        </Routes>
        </BrowserRouter>
        {/* <Maping /> */}
    </div>
  );
}

export default App;
