import { BrowserRouter, Route, Routes } from "react-router"
import './App.css'
import {AppiontmentRoutes} from "./modules/appointment/utils/route";

function App() {

  return (
    <BrowserRouter>
     
      <Routes>
        {AppiontmentRoutes}
        <Route path="*" element={<>Error</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
