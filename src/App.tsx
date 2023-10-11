import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout.tsx";
import Login from "./pages/auth/Login.tsx";
import Register from "./pages/auth/Register.tsx";
import Applications from "./pages/dashboard/applications.tsx";
import DashboardLayout from "./layouts/DashboardLayout.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/auth'} element={<AuthLayout/>}>
          <Route path={'login'} element={<Login/>}/>
          <Route path={'register'} element={<Register/>}/>
        </Route>
          <Route path={'/'} element={<DashboardLayout/>}>
              <Route path={'applications'} element={<Applications/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
