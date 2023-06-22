import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Recipes from './Pages/Recipes/Recipes';
import './app.css';
import CreateRecipe from './Pages/CreateRecipe/CreateRecipe';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/r/create-recipe" element={<CreateRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
