import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Home from "./Components/Home";
import Recipes from "./Components/Recipes";
import GroceryList from "./Components/GroceryList";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Other routes will use the LayoutWithNavbar */}
        <Route path="*" element={<LayoutWithNavbar />} />
      </Routes>
    </Router>
  );
}

function LayoutWithNavbar() {
  let location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <div>
        <Routes>
          {/* Define routes that should be wrapped with the Navbar here */}
          <Route path="/recipes" element={<Recipes />} />
          {/* ...other routes */}
        </Routes>
      </div>
    </>
  );
}

export default App;
