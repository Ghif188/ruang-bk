import {
  Register as Reg,
  Login as Log,
  Dashboard as Dash,
} from '../src/pages';
import DashSiswa from "./pages/siswa/dashboard"
import ProfileSiswa from "./pages/siswa/profile"
import DashGuru from "./pages/guru/dashboard"
import ProfileAdmin from "./pages/admin/profile"
import EditSoal from './pages/guru/edit-soal';
import ManageUser from "./pages/admin/manage-akun"
import Home from "../src/pages/home"
import NotFound from "../src/pages/notFound"
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
import ProtectedLogin from "./routers/ProtectedLogin";
import ProtectedGuru from "./routers/ProtectedGuru";
import ProtectedAdmin from "./routers/ProtectedAdmin";
import ProtectedMurid from "./routers/ProtectedMurid";
import AngketGuru from './pages/guru/angket';
import Murid from './pages/guru/murid';
import Jawaban from './pages/guru/jawaban';
import Profile from './pages/guru/profile';
import EditProfile from './pages/guru/editprofile';
import EditProfileSiswa from './pages/siswa/editprofile';
import SoalSiswa from './pages/siswa/soal'
import InfoAngketGuru from './pages/guru/info-angket'
import AngketAdmin from './pages/admin/angket';
import Soalangket from './pages/admin/soal-angket';
import AngketSiswa from './pages/siswa/angket';
import DashAdmin from './pages/admin/dashboard';
import ChangePass from './pages/siswa/change-pass';
import LihatAkses from './pages/guru/lihat-akses';
import '../src/css/dropdown.css'
function App() {
  return (
    <Routes>

      <Route element={<ProtectedLogin />}>
        <Route path='login' element={<Log />} />
        <Route path='register' element={<Reg />} />
        <Route path="/home" element={<Home />} />
      </Route>

      {/* Route guru */}
      <Route element={<ProtectedGuru />}>
        <Route path='dash-guru/home' element={<DashGuru />} />
        {/* <Route path='dash-guru' element={<DashGuru />}/> */}
        <Route path='dash-guru/profile' element={<Profile />} />
        <Route path='dash-guru/edit-profile' element={<EditProfile />} />
        <Route path='dash-guru/npsn' element={<Npsn />} />
        <Route path='dash-guru/angket' element={<AngketGuru />} />
        <Route path='dash-guru/angket/akses/:id' element={<LihatAkses />} />
        <Route path='dash-guru/angket/edit/:id' element={<EditSoal />} />
        <Route path='dash-guru/murid' element={<Murid />} />
        <Route path='dash-guru/jawaban' element={<Jawaban />} />
      </Route>

      {/* Route Siswa */}
      <Route element={<ProtectedMurid />}>
        <Route path="/dash-siswa/home" element={<DashSiswa />} />
        <Route path="/dash-siswa/change-password" element={<ChangePass />} />
        <Route path="/dash-siswa/profile" element={<ProfileSiswa />} />
        <Route path="/dash-siswa/edit-profile" element={<EditProfileSiswa />} />
        <Route path="/dash-siswa/angket" element={<AngketSiswa />} />
        <Route path="/dash-siswa/angket/soal/:id" element={<SoalSiswa />} />
      </Route>

      <Route
        exact
        path="/cobain"
        element={<Cobain />}
      />
      <Route
        exact
        path="*"
        element={<Navigate replace to="/404-error" />}
      />
      <Route
        exact
        path="/404-error"
        element={<NotFound />}
      />
      <Route
        path="/"
        element={localStorage.getItem("role") == '2' ? <Navigate replace to="/dash-guru/home" /> : (localStorage.getItem("role") == '3' ? <Navigate replace to="/dash-siswa/home" /> : (localStorage.getItem("role") == '1' ? <Navigate replace to="/dash-admin/home" /> : <Navigate replace to="/home" />))}
      />

      {/* ROUTE ADMIN */}
      <Route element={<ProtectedAdmin />}>
        <Route path='/dash-admin/angket' element={<AngketAdmin />}></Route>
        <Route path='/dash-admin/angket/:id' element={<Soalangket />}></Route>
        <Route path="/dash-admin/home" element={<DashAdmin />} />
      </Route>

      {/* ROUTE SISWA */}

    </Routes>
  );
}

export default App;
