// import React, { useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";
// import spannermodel from '../models/spanner.glb'
// import hammermodel from '../models/hammer.glb'
// const Model = () => {
    
//   const { scene } = useGLTF(spannermodel);
//   return <primitive object={scene} scale={1.5} />;
// };

// const ViewModel = ({ onClose }) => {
//   return (
//     <div className="view-model-container">
//       <div className="view-model-header">
//         <button className="close-button" >
//           Close
//         </button>
//       </div>
//       <Canvas className="view-model-canvas">
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} />
//         <OrbitControls enableZoom={true} />
//         <Model />
//       </Canvas>
//     </div>
//   );
// };

// export default ViewModel;
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Model = ({ modelPath }) => {
const { scene } = useGLTF(modelPath);
return <primitive object={scene} scale={1.5} />;
};

const ViewModel = () => {
const location = useLocation();
const { modelPath } = location.state || {}; // Retrieve modelPath from state

if (!modelPath) {
    return <div>No model to display. Please select a tool to view.</div>;
}

return (
    <div className="view-model-container">
    <div className="view-model-header">
        <button className="close-button" onClick={() => window.history.back()}>
        Close
        </button>
    </div>
    <Canvas className="view-model-canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls enableZoom={true} />
        <Model modelPath={modelPath} />
    </Canvas>
    </div>
);
};

export default ViewModel;

