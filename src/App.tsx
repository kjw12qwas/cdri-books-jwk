import { Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import SearchPage from "./pages/SearchPage";
import FavoritesPage from "./pages/FavoritesPage";
import AppHeader from "./components/layout/Header";

function App() {
  return (
    <Box>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Box>
  );
}

export default App;