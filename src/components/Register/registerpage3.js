import React from 'react';
import { Link } from "react-router-dom";
import './registerpage3.css'; // 기존 CSS 파일
import './Rstyleguide.css'; // 추가적인 스타일 가이드
import './Rglobals.css'; // 전역 스타일

import icr from '../../assets/Reimg/irc-1.gif';
function Registerpage3() {
  const handleConfirmClick = () => {
    // 필요한 로직 (예: 페이지 이동, 상태 업데이트)
    console.log('확인 버튼 클릭됨');
    window.location.href = '/'
  };

  return (
    <div className="container-center-horizontal">
      <div className="u4370u4460u4363u4463u4523u4352u4449u4363u4469u4536-3 screen">
        <Link to="/">
          <div className="logo_-titlle notosanskr-black-black-35px">Explore<br />HOBBY</div>
        </Link>
        <div className="overlap-group1">
          <h1 className="text-2 text-3">가입 완료</h1>
          <div className="text"></div>
          <img className="irc-1" src={icr} alt="가입 완료 이미지" />
        </div>
        <div className="group-62">
          <div className="overlap-group">
            <button type="button" onClick={handleConfirmClick} className="rectangle-388 text-15 text notosanskr-medium-white-24px">확인</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registerpage3;
