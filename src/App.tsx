import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { TailwindIndicator } from "./components/tailwind-indicator";
import { motion, useScroll, useSpring } from "motion/react";

const Projects = lazy(() => import("./pages/projects-page"));
const ProjectDetail = lazy(() => import("./pages/project-detail"));

function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-60 h-0.5 origin-left bg-accent"
        style={{ scaleX: progress }}
        role="progressbar"
        aria-label="Progresso da página"
      />
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            {/* passar as pages aqui */}
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <TailwindIndicator />
    </>
  )
}

export default App
