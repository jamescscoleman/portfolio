import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import HomePage from './HomePage';
import ProjectPage from './components/ProjectPage';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
