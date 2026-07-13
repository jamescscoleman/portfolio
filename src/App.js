import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TechyPortfolio from './TechyPortfolio';
import ProjectPage from './components/ProjectPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<TechyPortfolio />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        {/* Unknown paths fall back to the home page */}
        <Route path="*" element={<TechyPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
