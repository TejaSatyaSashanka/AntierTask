import React from "react";
import Post from "./Post"; 
import Theme from "./Theme";

import { BrowserRouter as Router, Routes } from 'react-router-dom';

const Route = require('react-router-dom').Route;
 function App() {
  const myStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1601674957874-1284f5996fea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&&q=80')",
    height: '1000px',
    width: '500',
    marginTop: '-100px',
    fontSize: '20px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div className="App">
      <div style={myStyle}>
      <Router>
        <Routes>
          <Route path="/*" element={<Theme />} />
          <Route path="Post/:postId" element={<Post />} />
          
        </Routes>
      </Router>
      </div>
    </div>
  
  );
}

export default App;
