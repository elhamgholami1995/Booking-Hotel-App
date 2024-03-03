import { ToastBar, Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./component/Header/Header";
import LocationList from "./component/LoctionList/locationList";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./component/AppLayout/AppLayout";
import Hotels from "./component/Hotels/Hotels";

function App() {
  return (
    <div>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<LocationList />} />
        <Route path="/hotels" element={<AppLayout />}>
          <Route index element={<Hotels />} />
          <Route path=":id" element={<div>single hotel</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
