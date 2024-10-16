import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios'; // axios를 사용하여 Django API 호출
import "./registerpage2.css";


// 이미지 파일 import
import eyeImg from "../../assets/Reimg/eye.svg";
import eyeRemoveImg from "../../assets/Reimg/eyeremoveicon.svg";
import arrowRightImg from "../../assets/Reimg/arrow-right-2.png";
import nicknameImg from "../../assets/Reimg/nickname.svg";
import passwordImg from "../../assets/Reimg/password.svg";
import userImg from "../../assets/Reimg/user.svg";
import emailImg from "../../assets/Reimg/email.svg";
import birthImg from "../../assets/Reimg/birth.svg";

function RegisterPage2() {
  const [username, setUsername] = useState('');    // 상태로 선언
  const [password, setPassword] = useState('');    // 상태로 선언
  const [email, setEmail] = useState('');          // 상태로 선언
  const [nickname, setNickname] = useState('');    // 상태로 선언
  const [fullName, setFullName] = useState('');    // 상태로 선언
  const [birthDate, setBirthDate] = useState('');  // 상태로 선언
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedNationality, setSelectedNationality] = useState(null);

  const handleNextClick = async () => {
    const userData = {
      username: username,
      password: password,
      email: email,
      nickname: nickname,
      full_name: fullName,
      birth_date: birthDate,
      gender: selectedGender,
      nationality: selectedNationality
    };

    try {
      // Django API로 POST 요청
      const response = await axios.post('http://localhost:8000/api/register/', userData);

      console.log('회원가입 성공:', response.data);
      // 성공 시 다음 페이지로 이동
      navigate('/register/Terms'); // 페이지 경로는 원하는 경로로 변경
    } catch (error) {
      // 에러 처리
      if (error.response) {
        console.error('회원가입 실패:', error.response.data);
        alert('회원가입에 실패했습니다.');
      } else {
        console.error('서버 연결 실패');
        alert('서버에 연결할 수 없습니다.');
      }
    }
  };
  

  // 성별 및 국적 선택 상태 관리
  const navigate = useNavigate();

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
        <Link to="/mainHome">
          <div className="LOGO-titlle">
            Explore
            <br />
            HOBBY
          </div>
        </Link>

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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}  // 상태 업데이트
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}  // 상태 업데이트
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}  // 상태 업데이트
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
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}  // 상태 업데이트
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
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}  // 상태 업데이트
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
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}  // 상태 업데이트
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
                          className="checkmark-2"
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
                  className={`signup-textboxgroup-8 ${isTextboxGroup8Visible ? "visible" : "hidden"
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
                  className={`btn ${selectedGender === "남자" ? "selected-btn" : ""
                    }`}
                  onClick={() => handleGenderClick("남자")}
                >
                  남자
                </button>
                <button
                  className={`btn ${selectedGender === "여자" ? "selected-btn" : ""
                    }`}
                  onClick={() => handleGenderClick("여자")}
                >
                  여자
                </button>
              </div>

              {/* 국적 선택 버튼 */}
              <div className="group-btn-foreign">
                <button
                  className={`btn ${selectedNationality === "내국인" ? "selected-btn" : ""
                    }`}
                  onClick={() => handleNationalityClick("내국인")}
                >
                  내국인
                </button>
                <button
                  className={`btn ${selectedNationality === "외국인" ? "selected-btn" : ""
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
            <button type="button" onClick={handleNextClick} className="button-text">다음</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage2;

{/* <button type="button" onClick={handleNextClick} className="rectangle-388 text-15 text notosanskr-medium-white-24px">다음</button>            
<div className="button-text">
              <a href="#">다음</a> */}