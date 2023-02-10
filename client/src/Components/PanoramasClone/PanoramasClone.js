import React from "react";
import TestBox from "./partials/TestBox";

export default function PanoramasClone() {
  return (
    <div id="panoramas" style={{ padding: '40px', fontFamily:'sans-serif', color:'grey', textAlign:'center' }}>
      <div className="App">
        <h2 data-aos="fade-center">The CERN accelerator complex</h2>
        <div style={{padding:'10px'}}></div>

        <TestBox />
      </div>
    </div>
  );
}
