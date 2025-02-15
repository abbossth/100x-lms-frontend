import "./App.css";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Dashboard</h1>}></Route>
        <Route path="/login" element={<h1>Login</h1>}></Route>
        <Route path="*" element={<h1>404 Not found</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
