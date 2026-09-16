import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { TailwindIndicator } from "./components/tailwind-indicator";
import Projects from "./pages/projects-page";
import ProjectDetail from "./pages/project-detail";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* passar as pages aqui */}
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
      <TailwindIndicator />
    </>
  )
}

export default App
