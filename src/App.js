import { 
  Register as Reg,
  Login as Log,
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
    </Routes>
  );
}

export default App;
