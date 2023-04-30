import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const MainPage = lazy(() => import("./MainPage/MainPage.jsx"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/guest/:who" element={<MainPage />} />
            <Route path="/" element={<div>hello all</div>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
