import React, { useState } from "react";
import "./newpasswoedstyle.css";

// 이미지 파일 import
import Rectangle1 from "../img/rectangle-398.svg";
import Rectangle2 from "../img/rectangle-400.svg";
import line from "../img/line-8.svg";
import eyeImg from "../img/eye.svg";
import eyeRemoveImg from "../img/eyeremoveicon.svg";

const NewPass = () => {
  const [newPassword, setNewPassword] = useState(""); // 새 비밀번호 입력 상태
  const [verifyPassword, setVerifyPassword] = useState(""); // 비밀번호 확인 상태
  const [isChecked, setIsChecked] = useState(false); // 체크박스 상태
  const [errorMessage, setErrorMessage] = useState(""); // 비밀번호 불일치 오류 메시지


  // 비밀번호 필드 타입 (password, text) 및 아이콘 관리 (각각의 필드에 대해)
  const [showNewPassword, setShowNewPassword] = useState(false); // 새 비밀번호 필드 보기 상태
  const [showVerifyPassword, setShowVerifyPassword] = useState(false); // 비밀번호 확인 필드 보기 상태


  // 서버로 데이터 전송하는 함수
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 입력값이 없을 경우 경고 알림메시지
    if (!newPassword || !verifyPassword) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    // 비밀번호 불일치 시 경고 문구 및 새 비밀번호 입력창에 포커스하고 입력 초기화
    if (newPassword !== verifyPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
      setNewPassword("");
      setVerifyPassword("");
      document.getElementById("new-password-input").focus();
      return;
    }

    // 비밀번호 일치 시 서버로 데이터 전송(임시))
    const payload = {
      newPassword,
      verifyPassword,
      logoutFromAllDevices: isChecked,
    };

    console.log("Sending data to the server:", payload);

    setErrorMessage("");
  };

  // 체크박스 클릭 시 상태 변경 함수
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="NewPasswordPage">
      <div className="NewPasswordPage-2">
        <div className="NewPasswordPage-groupbox">
          <div className="NewPasswordPage-selected">
            <div className="NewPasswordPage-container">

              {/* 아이디 찾기 버튼 */}
              <img className="select-btn-id" src={Rectangle2} alt="ID 찾기" />
              <div className="select-btn-id-text">ID 찾기</div>

              {/* 비밀번호 찾기 버튼 */}
              <img className="select-btn-pass" src={Rectangle1} alt="비밀번호 찾기" />
              <div className="select-btn-pass-text">비밀번호 찾기</div>
              <img className="line" alt="Line" src={line} />

              {/* 새 비밀번호 입력 및 확인 입력 폼 */}
              <div className="NewPassword-input-box">
                <div className="NewPassword-input-container">

                  {/* 새 비밀번호 입력칸 */}
                  <div className="NewPassword-input-container-inputNewpassword">
                    <div className="NewPassword-input-container-input-textbox">
                      <div className="NewPassword-input-container-input-text">
                        <input
                          id="new-password-input"
                          type={showNewPassword ? "text" : "password"} // 비밀번호 노출 설정
                          className="NewPassword-input-field"
                          placeholder="새 비밀번호 입력"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                      </div>
                      <img
                        className="eye"
                        alt="Eye"
                        src={showNewPassword ? eyeImg : eyeRemoveImg} // 아이콘 이미지 변경
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  {/* 비밀번호 확인 입력칸 */}
                  <div className="verify-NewPassword-input-container-inputverify">
                    <div className="NewPassword-input-container-input-textbox">
                      <div className="NewPassword-input-container-input-text-2">
                        <input
                          type={showVerifyPassword ? "text" : "password"} // 비밀번호 노출 설정
                          className="NewPassword-input-field"
                          placeholder="비밀번호 확인"
                          value={verifyPassword}
                          onChange={(e) => setVerifyPassword(e.target.value)}
                        />
                      </div>
                      <img
                        className="eye"
                        alt="Eye"
                        src={showVerifyPassword ? eyeImg : eyeRemoveImg}
                        onClick={() => setShowVerifyPassword(!showVerifyPassword)}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    
                    {/* 비밀번호 불일치 시 오류 메시지 표시 */}
                    {errorMessage && (
                      <div className="error-message">{errorMessage}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* 확인 버튼 */}
              <div className="NewPassword-linkbutton" onClick={handleSubmit}>
                <div className="NewPassword-linkbutton-box">
                  <div className="NewPassword-linkbutton-container" />
                  <div className="NewPassword-linkbutton-container-text">
                    <a href="#">확인</a>
                  </div>
                </div>
              </div>
            </div>

            {/* 체크박스 */}
            <div className="Logout-checkbox">
              <div className="Logout-checkbox-textbox">
                <div className="Logout-checkbox-textbox-text">
                  모든 모바일 웹에서 로그아웃합니다
                </div>
                {/* 체크박스 클릭 가능 */}
                <div
                  className={`Logout-checkbox-container ${
                    isChecked ? "checked" : ""
                  }`}
                  onClick={handleCheckboxClick} // 이 div만 클릭 가능
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPass;
