import './App.css';
import Main from './FunctionBasedComponents/Main';
import Nav from './FunctionBasedComponents/Nav';
import { Route,Routes } from 'react-router-dom';
import Features from './FunctionBasedComponents/Features';
import NotFound from './FunctionBasedComponents/NotFound';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/features' element={<Features/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>  
  );
}

export default App;
