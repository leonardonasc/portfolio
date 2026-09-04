import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* passar as pages aqui */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
