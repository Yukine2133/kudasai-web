import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import PopularPage from "./pages/PopularPage";
import AnimeDetails from "./pages/AnimeDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/anime/all/popular" element={<PopularPage />} />
        <Route path="/anime/:id" element={<AnimeDetails />} />
      </Routes>
    </BrowserRouter>

    // TODO a loader for 4 sec
  );
}

export default App;
