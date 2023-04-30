import "./App.css";
import {
  Route,
  BrowserRouter,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

const MainPage = lazy(() => import("./MainPage/MainPage.jsx"));
const InfoPage = lazy(() => import("./InfoPage/InfoPage.jsx"));

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/guest/:who" element={<MainPage />} />
            <Route exact path="/" element={<InfoPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
