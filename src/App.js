import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route exact path="/accueil" Component={Home} />
          <Route path="/page1"  />
          <Route path="/page2" />
          <Route path="/login" Component={Login}/>
          <Route />
        </Routes>
      </div>
    </Router>
  );
}

export default App;