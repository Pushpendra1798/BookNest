import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AddBook from "./pages/AddBook";
import Discover from "./pages/Discover";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/discover" element={<Discover />}/>
      </Routes>
    </>
  );
};

export default App;