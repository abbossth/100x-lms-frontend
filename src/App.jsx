import { Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/css/templates/core.css";
import "./assets/css/templates/theme-default.css";
import "./assets/css/templates/demo.css";
import "./assets/css/templates/pages/page-auth.css";
import "./assets/css/templates/pages/page-misc.css";
import "./assets/css/templates/pages/page-icons.css";
import "./assets/css/templates/pages/page-account-settings.css";
import "./assets/css/App.css";

import LoginPage from "./pages/loginPage";
import NotFound from "./pages/notFound";
import Layout from "./layouts/layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Dashboard</h1>}></Route>
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
