import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import NotFound from "./NotFound";
import Profile from "./Profile";
import Hotel from "./Hotel/index.jsx";
import Dating from "./Dating/index";
import IconTabs from "./IconTabs.jsx";
import Invoice from "./Invoice";
import { ReactComponent as ReactLogo } from "./assets/Dating.svg";
import { useLocation } from "react-router-dom";
import axios from 'axios';
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <ReactLogo
        style={{
          position: "absolute",
          left: "25px",
          top: "20px",
          width: "7%",
          height: "7%",
        }}
      />
      {location.pathname !== "/" ? <IconTabs /> : <></>}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/hotel/:id" element={<Hotel />} />
        <Route path="/dating/:id" element={<Dating />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
