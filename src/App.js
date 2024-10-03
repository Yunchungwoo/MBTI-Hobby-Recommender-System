import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import Registerpage1 from './components/Register/registerpage1';
import Registerpage2 from './components/Register/registerpage2';
import Registerpage3 from './components/Register/registerpage3';
import HomePage from './components/main/HomePage';
import Findtoidhome from './components/Find/FindtoID.js'
import FindtoPass from './components/Find/FindPasswordform.js';
import IDresult from './components/Find/FindIDresult.js'
import NewPass from './components/Find/FindPassword-newpassword.js'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={< LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<Registerpage1 />} />
          <Route path="/register/step2" element={<Registerpage2 />} />
          <Route path="/register/step3" element={<Registerpage3 />} />
          <Route path="/Find" element={<Findtoidhome />} />
          <Route path="/Find/Password" element={<FindtoPass />} />
          <Route path="/Find/Password/result" element={<NewPass />} />
          <Route path="/Find/Password/result/id" element={<IDresult />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
