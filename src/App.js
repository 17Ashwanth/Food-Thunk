import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home';
import View from './components/View';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
  <Header/>
  <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/view/:id' element={<View/>}></Route>
  </Routes>
  <Footer/>

    </div>
  );
}

export default App;
