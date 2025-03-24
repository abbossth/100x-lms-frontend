import { Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import "boxicons";
import "./assets/css/App.css";
import "./assets/css/main.css";
import "./assets/css/media.css";
import "bootstrap/dist/js/bootstrap.js";
import LoginPage from "./pages/loginPage";
import NotFound from "./pages/notFound";
import Layout from "./layouts/layout";
import Dashboard from "./pages/dashboard";

function App() {
  const isLoggedIn = true
  return (
    <>
      {
        isLoggedIn &&
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      }
      {
        !isLoggedIn && <Routes>
          <Route path="/" element={<h1>Sayt qurilmoqda...</h1>}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      }


    </>
  );
}

export default App;
