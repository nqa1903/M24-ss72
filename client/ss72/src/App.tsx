import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin/Admin";

export default function App() {
  return (
    <div>
      App
      <Routes>
        <Route path="/Admin" element={<Admin></Admin>}></Route>
      </Routes>
    </div>
  )
}
