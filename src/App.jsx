import { ToastBar, Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./component/Header/Header";
import LocationList from "./component/LoctionList/locationList";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./component/AppLayout/AppLayout";
import Hotels from "./component/Hotels/Hotels";
import HotelsProvider from "./component/context/HotelsProvider";
import SingleHotel from "./component/SingleHotel/SingleHotel";
import BookmarkLayout from "./component/BookmarkLayout/BookmarkLayout";
import BookmarkListProvider from "./component/context/BookmarkListContext";

function App() {
  return (
    <BookmarkListProvider>
      <HotelsProvider>
        <Toaster />
        <Header />
        <Routes>
          <Route path="/" element={<LocationList />} />
          <Route path="/hotels" element={<AppLayout />}>
            <Route index element={<Hotels />} />
            <Route path=":id" element={<SingleHotel />} />
          </Route>
          <Route path="/bookmark" element={<BookmarkLayout />}>
            <Route index element={<div>bookmark list</div>} />
            <Route path="add" element={<div> add new bookmark</div>} />
          </Route>
        </Routes>
      </HotelsProvider>
    </BookmarkListProvider>
  );
}

export default App;
