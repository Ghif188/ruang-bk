import { 
  Register as Reg,
  Login as Log,
  Dashboard as Dash,
 } from '../src/pages';
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
        path="/"
        element={localStorage.getItem("token") ? <Navigate replace to="/dash"/> : <Log replace to="/log"/> } 
      />

      <Route
        exact
        path="/log"
        element={<Log />}
      />
      <Route
        exact
        path="/reg"
        element={<Reg/>} 
      />
      <Route
        exact
        path="/dash"
        element={
          <ProtectRoute>
            <Dash/>
          </ProtectRoute>
        } 
      />
    </Routes>
  );
}

export default App;
