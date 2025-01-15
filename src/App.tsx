import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./components/Header/Header";
import { useTheme } from "./context/ThemeContext";
import Main from "./pages/Main/Main";
import NewsPage from "./components/NewsPage/NewsPage";
import Header from "./components/Header/Header";

function App() {
  const { isDark } = useTheme();
  return (
    <BrowserRouter>
      <div className={`app ${isDark ? "dark" : "light"}`}>
        <Header />
        <div className="conteiner">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/news/:id" element={<NewsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
