import React from "react";
import qZonePic1 from "../../../assets/qZone1.png";
import qZonePic2 from "../../../assets/qZone2.png";
import qZonePic3 from "../../../assets/qZone3.png";

const QKidsZone = () => {
  return (
    <div className="my-3 bg-light p-3 text-center">
      <h5 className="">Q-Zone</h5>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img src={qZonePic1} alt="" />
        <img src={qZonePic2} alt="" />
        <img src={qZonePic3} alt="" />
      </div>
    </div>
  );
};

export default QKidsZone;
