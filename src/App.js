import './App.css';

import HomePage from './Components/HomePage';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import CategoryPage from './Components/Page2/CategoryPage';

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      <CategoryPage/>
    </div>
  );
}

export default App;
