import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<SearchPage />} />
          <Route path="/liked" element={<div>내가 찜한 책 페이지</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;