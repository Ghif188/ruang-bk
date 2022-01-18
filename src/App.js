import { 
  Register as Reg,
  Login as Log,
  Dashboard as Dash,
 } from '../src/pages';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
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
        element={<Dash/>} 
      />
    </Routes>
  );
}

export default App;
