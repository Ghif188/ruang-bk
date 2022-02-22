import {
  Register as Reg,
  Login as Log,
  Dashboard as Dash,
} from '../src/pages';
import DashSiswa from "./pages/siswa/dashboard"
import DashGuru from "./pages/guru/dashboard"
import ProfileAdmin from "./pages/admin/profile"
import ManageUser from "./pages/admin/manage-akun"
import Home from "../src/pages/home"
import Npsn from "../src/pages/guru/form-npsn"
import Cobain from './pages/cobain';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import ProtectRoute from "./routers/ProtectRoute";
import Angket from './pages/guru/angket';
import Murid from './pages/guru/murid';
import Profile from './pages/guru/profile';
import EditProfile from './pages/guru/editprofile';

function App() {
  return (
    <Routes>

      <Route
        exact
        path="/home"
        element={<Home/>}
      />
      <Route
        exact
        path="/cobain"
        element={<Cobain/>}
      />
      <Route
        path="/"
        element={localStorage.getItem("token") ? <Navigate replace to="/dash" /> : <Navigate replace to="/home" />}
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
      <Route
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
      />

      {/* ROUTE SISWA */}
      <Route
        exact
        path="/dash-siswa"
        element={<DashSiswa />}
      />

      {/* ROUTE GURU */}
      <Route
        exact
        path="/dash-guru"
        element={<DashGuru />}
      />
      <Route
        exact
        path="/dash-guru/profile"
        element={<Profile />}
      />
      <Route
        exact
        path="/dash-guru/edit-profile"
        element={<EditProfile />}
      />
      <Route
        exact
        path="/dash-guru/npsn"
        element={<Npsn/>}
      />
      <Route
        exact
        path="/dash-guru/angket"
        element={<Angket/>}
      />
      <Route
        exact
        path="/dash-guru/murid"
        element={<Murid/>}
      />
    </Routes>
  );
}

export default App;
