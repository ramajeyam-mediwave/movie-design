import "@picocss/pico";
// import { lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

// const Add = lazy(() => import("./pages/Add"));
// const Edit = lazy(() => import("./pages/Edit"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/Edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
