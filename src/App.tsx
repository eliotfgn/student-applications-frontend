import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/auth'} element={<AuthLayout/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
