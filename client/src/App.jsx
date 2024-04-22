import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Recipes from "./Components/Recipes";
import GroceryList from "./Components/GroceryList";

function App() {
  return (
    <Router>
      <div>
        {/* Navigation links can go here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/grocery-list" element={<GroceryList />} />
          {/* Add additional routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
