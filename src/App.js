import React, { useState } from 'react';
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
import TermsPage from './components/Register/registerpage4.js'
import ENTPPage from './components/MBTI-Intro/ENTPPage.js'
import INTPPage from './components/MBTI-Intro/INTPPage.js'
import INTJPage from './components/MBTI-Intro/INTJPage.js'
import ENTJPage from './components/MBTI-Intro/ENTJPage.js'
import INFPPage from './components/MBTI-Intro/INFPPage.js'
import INFJPage from './components/MBTI-Intro/INFJPage.js'
import ENFJPage from './components/MBTI-Intro/ENFJPage.js'
import ENFPPage from './components/MBTI-Intro/ENFPPage.js'
import ISTJPage from './components/MBTI-Intro/ISTJPage.js'
import ISFJPage from './components/MBTI-Intro/ISFJPage.js'
import ESTJPage from './components/MBTI-Intro/ESTJPage.js'
import ESFJPage from './components/MBTI-Intro/ESFJPage.js'
import ISTPPage from './components/MBTI-Intro/ISTPPage.js'
import ISFPPage from './components/MBTI-Intro/ISFPPage.js'
import ESTPPage from './components/MBTI-Intro/ESTPPage.js'
import ESFPPage from './components/MBTI-Intro/ESFPPage.js'
import MainHome from './components/main/MainHome.js';
import TestPage1 from './components/Test/TestPage1.js';
import TestPage2 from './components/Test/TestPage2.js';
import TestPage3 from './components/Test/Testpage3.js';
import TestPage4 from './components/Test/Testpage4.js';
import ResultPage from './components/Result/Result.js';

function App() {
  const [allAnswers, setAllAnswers] = useState({});

  const updateAnswers = (newAnswers) => {
    setAllAnswers((prevAnswers) => ({
      ...prevAnswers,
      ...newAnswers,
    }));
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={< LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/mainHome" element={<MainHome />} />
          <Route path="/register" element={<Registerpage1 />} />
          <Route path="/register/step2" element={<Registerpage2 />} />
          <Route path="/register/step3" element={<Registerpage3 />} />
          <Route path="/Find" element={<Findtoidhome />} />
          <Route path="/Find/Password" element={<FindtoPass />} />
          <Route path="/Find/Password/result" element={<NewPass />} />
          <Route path="/Find/Password/result/id" element={<IDresult />} />
          <Route path="/register/Terms" element={<TermsPage />} />
          <Route path="/Intro/entp" element={<ENTPPage />} />
          <Route path="/Intro/intp" element={<INTPPage />} />
          <Route path="/Intro/intj" element={<INTJPage />} />
          <Route path="/Intro/entj" element={<ENTJPage />} />
          <Route path="/Intro/infp" element={<INFPPage />} />
          <Route path="/Intro/infj" element={<INFJPage />} />
          <Route path="/Intro/enfj" element={<ENFJPage />} />
          <Route path="/Intro/enfp" element={<ENFPPage />} />
          <Route path="/Intro/istj" element={<ISTJPage />} />
          <Route path="/Intro/isfj" element={<ISFJPage />} />
          <Route path="/Intro/estj" element={<ESTJPage />} />
          <Route path="/Intro/esfj" element={<ESFJPage />} />
          <Route path="/Intro/istp" element={<ISTPPage />} />
          <Route path="/Intro/isfp" element={<ISFPPage />} />
          <Route path="/Intro/estp" element={<ESTPPage />} />
          <Route path="/Intro/esfp" element={<ESFPPage />} />
          <Route path="/Test/step1" element={<TestPage1 updateAnswers={updateAnswers} allAnswers={allAnswers} />}/>
          <Route path="/Test/step2" element={<TestPage2 updateAnswers={updateAnswers} allAnswers={allAnswers} />}/>
          <Route path="/Test/step3" element={<TestPage3 updateAnswers={updateAnswers} allAnswers={allAnswers} />}/>
          <Route path="/Test/step4" element={<TestPage4 updateAnswers={updateAnswers} allAnswers={allAnswers} />}/>
          <Route path="/Test/result" element={<ResultPage allAnswers={allAnswers} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
