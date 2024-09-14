// import logo from './logo.svg';
import './App.css';

import { Home } from './components/Home';
import { Header } from './components/Header';
import { Servicios } from './components/Servicios';
import { Transportadores } from './components/Transportadores'
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Acero } from './components/Acero';
import { Montajes } from './components/Montajes';
import { FyM } from './components/FyMImages';

function App() {
  return (
    <div className="absolute top-0 z-[-2] w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <HashRouter>
        <Header/>

        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/servicios/' element={<Servicios/>}/>
          <Route exact path='/servicios/FyM/' element={<FyM/>}/>
          <Route exact path='/servicios/Transportadores/' element={<Transportadores/>}/>
          <Route exact path='/servicios/Acero/' element={<Acero/>}/>
          <Route exact path='/servicios/Montajes/' element={<Montajes/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}


export default App;
