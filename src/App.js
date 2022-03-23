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
import ProtectedMurid from "./routers/ProtectedMurid";
import AngketGuru from './pages/guru/angket';
import Murid from './pages/guru/murid';
import Profile from './pages/guru/profile';
import EditProfile from './pages/guru/editprofile';
import EditProfileSiswa from './pages/siswa/editprofile';
import SoalSiswa from './pages/siswa/soal'
import SoalGuru from './pages/guru/soal-angket'
import AngketAdmin from './pages/admin/angket';
import Soalangket from './pages/admin/soal-angket';

function App() {
  return (
    <Routes>

      <Route element={<ProtectedLogin />}>
        <Route path='login' element={<Log />}/>
        <Route path='register' element={<Reg />}/>
        <Route path="/home" element={<Home/>}/>
      </Route>

      {/* Route guru */}
      <Route element={<ProtectedGuru />}>
        <Route path='dash-guru/home' element={<DashGuru />}/>
        {/* <Route path='dash-guru' element={<DashGuru />}/> */}
        <Route path='dash-guru/profile' element={<Profile />}/>
        <Route path='dash-guru/edit-profile' element={<EditProfile />}/>
        <Route path='dash-guru/npsn' element={<Npsn />}/>
        <Route path='dash-guru/angket' element={<AngketGuru />}/>
        <Route path='dash-guru/angket/:id' element={<SoalGuru />}/>
        <Route path='dash-guru/angket/edit/:id' element={<EditSoal />}/>
        <Route path='dash-guru/murid' element={<Murid />}/>
      </Route>

      {/* Route Siswa */}
      <Route element={<ProtectedMurid />}>
        <Route path="/dash-siswa/home" element={<DashSiswa />}/>
        <Route path="/dash-siswa/profile" element={<ProfileSiswa />}/>
        <Route path="/dash-siswa/edit-profile" element={<EditProfileSiswa />}/>
        <Route path="/dash-siswa/soal/:id" element={<SoalSiswa />}/>
      </Route>
      
      <Route
        exact
        path="/cobain"
        element={<Cobain/>}
      />
      <Route
        path="/"
        element={localStorage.getItem("role") == '2' ? <Navigate replace to="/dash-guru/home" /> : (localStorage.getItem("role") == '3' ? <Navigate replace to="/dash-siswa/home" /> : <Navigate replace to="/home" />)}
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
      
      <Route exact path='/dash-admin/angket' element={<AngketAdmin/>}></Route>
      <Route exact path='/dash-admin/angket/:id' element={<Soalangket/>}></Route>

    </Routes>
  );
}

export default App;
