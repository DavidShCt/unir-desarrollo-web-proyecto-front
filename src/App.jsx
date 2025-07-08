import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rental from "./pages/Rental";
import BookDetails from "./pages/BookDetails";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alquileres" element={<Rental />} />
          <Route path="/libro/:id" element={<BookDetails />} />
          <Route path="/buscar" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
