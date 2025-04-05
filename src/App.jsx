import { Routes, Route } from "react-router";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import '@mantine/core/styles.css';
import "boxicons";
import "./assets/css/App.css";
import "./assets/css/main.css";
import "./assets/css/media.css";
// core styles are required for all packages
import LoginPage from "./pages/loginPage";
import NotFound from "./pages/notFound";
import Layout from "./layouts/layout";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";


function App() {
  return (
    <>

      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Route>
      </Routes>


    </>
  );
}

export default App;
