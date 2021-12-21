import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import { RQSuperHeroesPage } from './components/RQSuperHeroes.page'
import React from 'react'  

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            {/* <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>SuperHeroes</Link>
            </li> */}
            <li>
              <Link to='/rq-super-heroes'>RQ SuperHeroes</Link>
            </li>

            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* <Route path='/'>
            <HomePage />
          </Route>
          <Route exact path='/super-heroes'>
            <SuperHeroesPage />
          </Route> */}

          <Route exact path='/rq-super-heroes' element={<RQSuperHeroesPage/>}></Route>
            
          <Route path='/about' element={<About />}></Route>
            
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App;
