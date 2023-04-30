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
const RedirectPage = lazy(() => import("./RedirectPage/RedirectPage.jsx"));

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/wedding">
        <Suspense fallback={<div>Loading</div>}>
          <Routes>
            <Route path="/guest/:who" element={<MainPage />} />
            <Route path="/" element={<RedirectPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
