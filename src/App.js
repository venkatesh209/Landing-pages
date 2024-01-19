import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Banner from "./components/Banner/Banner";
import Header from './components/Header/Header';


function App() {
  return (
    <> 
      <Router>
      <Header />
      <Banner/>
      </Router>
    </>
  );
}

export default App;
