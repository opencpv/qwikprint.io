import "./App.css";
import { Routes, Route } from "react-router-dom";
import { routeObjects } from "./routes";

function App() {
  return (
    <>
      <Routes>
        {routeObjects.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
