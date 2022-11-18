import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './page/user/Cart';
import Detail from './page/user/DetailProduct';
import Home from './page/Home';
import Profil from './page/user/Profile';
import './App.css'


function App() {
  return (

    
    <Router>
      <Routes>
      <Route path='/' element={<Home />}></Route>
          <Route path='/profile' element={<Profil />}></Route>
          <Route path='/detail' element={<Detail />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
