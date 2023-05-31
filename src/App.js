
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import NoPage from "./pages/NoPage";


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="counter" element={<Counter />} />
              <Route path="project2" element={<NoPage />} />
              <Route path="project3" element={<NoPage />} />
              <Route path="project4" element={<NoPage />} />
              <Route path="project5" element={<NoPage />} />
              <Route path="project6" element={<NoPage />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
