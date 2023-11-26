import './App.css';
import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import Navbar from './components/Navbar/Navbar';

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";


const routes = createRoutesFromElements(
  <Route path="/" element={<Navbar />}>
    <Route index element={<Home />} />
    <Route path="home"  >
    <Route index element={<Home />} />
    </Route>
    <Route path="home/recipes" element={<Recipes />} />
  </Route>
)

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
