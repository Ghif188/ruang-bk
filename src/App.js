import {
  // Register as Reg,
  // Login as Log,
  // Dashboard as Dash,
} from '../src/pages';
import DashSiswa from "./pages/siswa/dashboard"
import DashGuru from "./pages/guru/dashboard"
import ProfileAdmin from "./pages/admin/profile"
import ManageUser from "./pages/admin/manage-akun"
import Home from "../src/pages/home"
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import ProtectRoute from "./routers/ProtectRoute";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/home"
        element={<Home/>}
      />
      {/* <Route
        path="/"
        element={localStorage.getItem("token") ? <Navigate replace to="/dash" /> : <Log replace to="/log" />}
      />

      <Route
        exact
        path="/log"
        element={<Log />}
      />
      <Route
        exact
        path="/reg"
        element={<Reg />}
      />

      {/* ROUTE ADMIN */}
      {/* <Route
        exact
        path="/dash"
        element={
          <ProtectRoute>
            <Dash />
          </ProtectRoute>
        }
      />
      <Route
        exact
        path="/dash/profile"
        element={
          <ProtectRoute>
            <ProfileAdmin />
          </ProtectRoute>
        }
      />
      <Route
        exact
        path="/dash/manage-user"
        element={
          <ProtectRoute>
            <ManageUser />
          </ProtectRoute>
        }
      /> */}

      {/* ROUTE SISWA */}
      {/* <Route
        exact
        path="/dash-siswa"
        element={<DashSiswa />}
      /> */}

      {/* ROUTE GURU */}
      {/* <Route
        exact
        path="/dash-guru"
        element={<DashGuru />}
      />  */}

    </Routes>
  );
}

export default App;
