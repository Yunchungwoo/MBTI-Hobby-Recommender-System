import React, { useState } from "react";
import "./SignupPage.css";

// 이미지 파일 import
import eyeImg from "./static/img/eye.svg";
import eyeRemoveImg from "./static/img/eyeremoveicon.svg";
import arrowRightImg from "./static/img/arrow-right-2.png";
import nicknameImg from "./static/img/nickname.svg";
import passwordImg from "./static/img/password.svg";
import userImg from "./static/img/user.svg";
import emailImg from "./static/img/email.svg";
import birthImg from "./static/img/birth.svg";

const SignupPage = () => {
  // 성별 및 국적 선택 상태 관리
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedNationality, setSelectedNationality] = useState(null);

  // 비밀번호 표시 여부 상태 관리
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  // 인증약관 동의 체크박스 상태 관리
  const [isChecked, setIsChecked] = useState(false);

  // 인증약관 내용 표시 상태 관리
  const [isTextboxGroup8Visible, setIsTextboxGroup8Visible] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  // 성별 선택
  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };

  // 국적 선택
  const handleNationalityClick = (nationality) => {
    setSelectedNationality(nationality);
  };

  // 비밀번호 표시/숨기기 토글
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // 체크박스 클릭 시 스타일 변경
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  // 인증약관 내용 표시 상태 토글
  const toggleTextboxGroup8Visibility = () => {
    setIsTextboxGroup8Visible(!isTextboxGroup8Visible);
    setIsRotated(!isRotated);
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

        {/* 회원가입 폼 */}
        <div className="signupbox">
          {/* 아이디, 이메일, 비밀번호, 닉네임 입력 */}
          <div className="signup-content-1">
            <div className="signup-textboxgroup">
              <div className="signup-textbox-1">
                <img src={userImg} alt="아이디" />
                <input
                  type="text"
                  className="textbox-input"
                  placeholder="아이디"
                />
              </div>
            </div>
            <div className="signup-textboxgroup-2">
              <div className="signup-textboxgroup2">
                <div className="signup-textbox-1">
                  <img src={emailImg} alt="이메일" />
                  <input
                    type="email"
                    className="textbox-input"
                    placeholder="이메일(필수)"
                  />
                </div>
              </div>
            </div>
            <div className="signup-textboxgroup-3">
              <div className="signup-textboxgroup">
                <div className="signup-textbox-1">
                  <img src={passwordImg} alt="비밀번호" />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="textbox-input"
                    placeholder="비밀번호"
                    onFocus={() => setIsPasswordFocused(true)}
                  />
                  <img
                    className="eye"
                    alt="Eye"
                    src={showPassword ? eyeImg : eyeRemoveImg}
                    onClick={toggleShowPassword}
                  />
                </div>
              </div>
            </div>
            <div className="signup-textboxgroup-4">
              <div className="signup-textboxgroup2">
                <div className="signup-textbox-1">
                  <img src={nicknameImg} alt="닉네임" />
                  <input
                    type="text"
                    className="textbox-input"
                    placeholder="닉네임"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 이름 및 생년월일 입력 */}
          <div className="signup-textboxgroupbox">
            <div className="signup-textboxgroup-5">
              <div className="signup-textbox-1">
                <img src={userImg} alt="이름" />
                <input
                  type="text"
                  className="textbox-input"
                  placeholder="이름"
                />
              </div>
            </div>
            <div className="signup-textboxgroup-6">
              <div className="signup-textbox-1">
                <img src={birthImg} alt="생년월일" />
                <input
                  type="text"
                  className="textbox-input"
                  placeholder="생년월일"
                />
              </div>
            </div>

            {/* 인증약관 동의 */}
            <div className="signup-textboxgroup-7">
              <div className="overlap-2">
                <div className="signup-textboxgroup">
                  <div
                    className="signup-textbox-1"
                    onClick={handleCheckboxClick}
                    style={{ cursor: "pointer" }}
                  >
                    <p className="p">
                      <span className="span">[필수]</span>
                      <span className="agreeebutton"> 인증약관 전체 동의</span>
                    </p>
                    <div
                      className={`checkbox ${isChecked ? "checked" : ""}`}
                      onClick={handleCheckboxClick}
                    >
                      {isChecked && (
                        <svg
                          className="checkmark"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={isChecked ? "white" : "black"}
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          width="16"
                          height="16"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

                <img
                  className={`arrow-right ${isRotated ? "rotated" : ""}`}
                  alt="Arrow right"
                  src={arrowRightImg}
                  onClick={toggleTextboxGroup8Visibility}
                />

                <div
                  className={`signup-textboxgroup-8 ${
                    isTextboxGroup8Visible ? "visible" : "hidden"
                  }`}
                >
                  <div className="signup-textbox-item">
                    <span className="signup-textbox-disc">・</span>
                    <span className="signup-textbox-text">개인정보 이용</span>
                  </div>
                  <div className="signup-textbox-item">
                    <span className="signup-textbox-disc">・</span>
                    <span className="signup-textbox-text">
                      고유식별정보처리
                    </span>
                  </div>
                  <div className="signup-textbox-item">
                    <span className="signup-textbox-disc">・</span>
                    <span className="signup-textbox-text">
                      하비 개인정보수집
                    </span>
                  </div>
                  <div className="signup-textbox-item">
                    <span className="signup-textbox-disc">・</span>
                    <span className="signup-textbox-text">인증사이용약관</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 성별 및 국적 선택 */}
            <div className="signup-content-2">
              {/* 성별 선택 버튼 */}
              <div className="group-btn-gender">
                <button
                  className={`btn ${
                    selectedGender === "남자" ? "selected-btn" : ""
                  }`}
                  onClick={() => handleGenderClick("남자")}
                >
                  남자
                </button>
                <button
                  className={`btn ${
                    selectedGender === "여자" ? "selected-btn" : ""
                  }`}
                  onClick={() => handleGenderClick("여자")}
                >
                  여자
                </button>
              </div>

              {/* 국적 선택 버튼 */}
              <div className="group-btn-foreign">
                <button
                  className={`btn ${
                    selectedNationality === "내국인" ? "selected-btn" : ""
                  }`}
                  onClick={() => handleNationalityClick("내국인")}
                >
                  내국인
                </button>
                <button
                  className={`btn ${
                    selectedNationality === "외국인" ? "selected-btn" : ""
                  }`}
                  onClick={() => handleNationalityClick("외국인")}
                >
                  외국인
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 다음 페이지 버튼 */}
        <div className="LinkPagebutton">
          <div className="group-pagebtn">
            <div className="buttonbox" />
            <div className="button-text">
              <a href="#">다음</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
