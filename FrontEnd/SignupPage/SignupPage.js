import React, { useState } from "react";
import "./style.css";

// 이미지 파일 import
import eyeImg from "./static/img/eye.png";
import eyeRemoveImg from "./static/img/eyeremoveicon.png";
import arrowRightImg from "./static/img/arrow-right-2.png";
import line6Img from "./static/img/line-6.svg";
import line7Img from "./static/img/line-7.svg";

export const SignupPage = () => {
  // 성별 및 국적 선택
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedNationality, setSelectedNationality] = useState(null);
  
  //  비밀번호 필드 타입 (password, text) 및 아이콘
  const [showPassword, setShowPassword] = useState(false);
  const [currentEyeIcon, setCurrentEyeIcon] = useState(eyeRemoveImg);
  
  // 인증약관 동의 체크박스 상태
  const [isChecked, setIsChecked] = useState(false);

  // 인증약관 글씨 클릭 시 버튼 스타일을 바꾸는 함수
  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };

  const handleNationalityClick = (nationality) => {
    setSelectedNationality(nationality);
  };

  // 비밀번호 보이기/숨기기 토글 함수
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    setCurrentEyeIcon(showPassword ? eyeRemoveImg : eyeImg);
  };

  // 체크박스 클릭 시 스타일 변경 함수
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="SignupPage">
      <div className="div">
        {/* 로고 */}
        <div className="LOGO-titlle">
          Explore
          <br />
          HOBBY
        </div>

        {/* 회원가입 폼 박스 */}
        <div className="signupbox">
          {/* 아이디, 이메일, 비밀번호, 닉네임 */}
          <div className="signup-content-1">
            <div className="signup-textboxgroup">
              <div className="signup-textbox-1">
                <input type="text" className="textbox-input" placeholder="아이디" />
              </div>
            </div>
            <div className="signup-textboxgroup-2">
              <div className="group-2">
                <div className="signup-textbox-2">
                  <input type="email" className="textbox-input" placeholder="이메일(필수)" />
                </div>
              </div>
            </div>
            <div className="signup-textboxgroup-3">
              <div className="overlap-2">
                <div className="signup-textboxgroup">
                  <div className="signup-textbox-2">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="textbox-input"
                      placeholder="비밀번호"
                    />
                  </div>
                </div>
                <img
                  className="eye"
                  alt="Eye"
                  src={currentEyeIcon}
                  onClick={toggleShowPassword}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="group-wrapper">
              <div className="group-2">
                <div className="signup-textbox-2">
                  <input type="text" className="textbox-input" placeholder="닉네임" />
                </div>
              </div>
            </div>
          </div>

          {/* 이름 생년월일 박스 */}
          <div className="overlap-3">
            <div className="signup-textboxgroup">
              <div className="signup-textbox-1">
                <input type="text" className="textbox-input" placeholder="이름" />
              </div>
            </div>
            <div className="group-3">
              <div className="signup-textbox-2">
                <input type="text" className="textbox-input" placeholder="생년월일" />
              </div>
            </div>

            {/* 인증약관 동의 박스 */}
            <div className="signup-textboxgroup-2">
              <div className="overlap-2">
                <div className="signup-textboxgroup">
                  <div className="signup-textbox-2">
                    <p className="p" onClick={handleCheckboxClick}>
                      <span className="span">[필수]</span>
                      <span className="agreeebutton"> 인증약관 전체 동의</span>
                    </p>
                  </div>
                </div>
                <div className={`checkbox ${isChecked ? "checked" : ""}`} />
                <div className="vectoricon">
                  <div className="vector">
                    <img className="line" alt="Line" src={line6Img} />
                    <img className="img" alt="Line" src={line7Img} />
                  </div>
                </div>
                <img className="arrow-right" alt="Arrow right" src={arrowRightImg} />
              </div>
            </div>

            {/* 성별, 내국인, 외국인 선택 박스 */}
            <div className="signup-content-2">
              {/* 성별 버튼 */}
              <div className="group-btn-gender">
                <div
                  className={`btn ${selectedGender === "남자" ? "selected-btn" : ""}`}
                  onClick={() => handleGenderClick("남자")}
                >
                  남자
                </div>
                <div
                  className={`btn ${selectedGender === "여자" ? "selected-btn" : ""}`}
                  onClick={() => handleGenderClick("여자")}
                >
                  여자
                </div>
              </div>

              {/* 국적 버튼 */}
              <div className="group-btn-foreign">
                <div
                  className={`btn ${selectedNationality === "내국인" ? "selected-btn" : ""}`}
                  onClick={() => handleNationalityClick("내국인")}
                >
                  내국인
                </div>
                <div
                  className={`btn ${selectedNationality === "외국인" ? "selected-btn" : ""}`}
                  onClick={() => handleNationalityClick("외국인")}
                >
                  외국인
                </div>
              </div>
            </div>
          </div>

          {/* 링크 버튼 */}
          <div className="LinkPagebutton">
            <div className="group-pagebtn">
              <div className="buttonbox" />
              <div className="button-text">다음</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
