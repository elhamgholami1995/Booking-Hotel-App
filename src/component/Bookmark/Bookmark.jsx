import React from "react";
import Map from "../Map/Map";

function Bookmark() {
  return (
    <div className="appLayout">
      <div className="sidebar">
        {/* <Outlet /> */}
        <div> Bookmark list</div>
      </div>
      <Map markerLocations={[]} />
    </div>
  );
}
export default Bookmark;
