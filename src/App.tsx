import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { TailwindIndicator } from "./components/tailwind-indicator";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* passar as pages aqui */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <TailwindIndicator />
    </>
  )
}

export default App
