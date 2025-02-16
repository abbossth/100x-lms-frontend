import { Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import "boxicons";
import "./assets/css/App.css";
import "bootstrap/dist/js/bootstrap.js";
import LoginPage from "./pages/loginPage";
import NotFound from "./pages/notFound";
import Layout from "./layouts/layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Sayt qurilmoqda...</h1>}></Route>
        <Route path="/yes" element={<Layout />}>
          <Route index element={<h1>Dashboard</h1>}></Route>
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
