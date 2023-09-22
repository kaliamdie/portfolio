import React from 'react';
import certificate from "../images/Kali Amdie cert.png";

const imgStyle = {
  marginTop: '50px', // Adjust this value to move the image up
};

export default function Certificate() {
  return (
    <div className="text-center">
      <h2 className="text-3xl p-3">Certification</h2>
 
      <div className="m-8 lg:m-96" style={imgStyle}>
        <img src={certificate} alt="Certificate" />
      </div> 
    </div>
  );
}
