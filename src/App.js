import './App.css';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import { ScrollRestoration } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <ScrollRestoration/>
      <Categories />
    </>
  );
}

export default App;
