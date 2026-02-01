import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Support from './Components/Support';
import Labs from './Components/Labs';
import NotFound from './Components/NotFound';
import { Routes, Route } from 'react-router-dom';
import { Link , NavLink} from 'react-router-dom';
import MainHeader from './Components/MainHeader';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            {/* <Link to="/">Home</Link> in place of link we use navlink because it allows us to apply active styles automatically */} 
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>

  <Routes>                      
    {/* Nested Routes  here we make a parent route and inside it there is child route */}
   <Route path="/" element={<MainHeader/>}>
   <Route index element={<Home/>} />
   <Route path="/about" element={<About/>} />
   <Route path="/support" element={<Support/>} />
   <Route path="/labs" element={<Labs/>} />
   <Route path="*" element={<NotFound/>} />
    </Route>
  </Routes>
    </div>
  );
}
export default App;
