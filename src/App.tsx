import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "@pages/index";
import AboutPage from "@pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/about/:id" element={<AboutPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
