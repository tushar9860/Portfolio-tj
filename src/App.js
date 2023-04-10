import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
// import Navbar from './commponents/Navbar';
// import { ThemeProvider } from "styled-components";
import Home from './commponents/Home';
// import { GlobalStyle } from './commponents/GlobleStyle';

function App() {
  

  return (
    <>
     {/* <ThemeProvider theme={theme}> */}
      {/* <GlobalStyle/> */}
     <Router>
      <Routes>
      
      <Route  path='/' element={<Home />} />
      
     
     
      </Routes>
     </Router>
     {/* </ThemeProvider> */}
    </>
  );
}

export default App;
