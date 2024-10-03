import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./newpasswoedstyle.css";

// 이미지 파일 import
import Rectangle1 from "../../assets/Find/rectangle-398.svg";
import Rectangle2 from "../../assets/Find/rectangle-400.svg";
import line from "../../assets/Find/line-8.svg";
import eyeImg from "../../assets/Find/eye.svg";
import eyeRemoveImg from "../../assets/Find/eyeremoveicon.svg";

const NewPass = () => {
  const [newPassword, setNewPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // 비밀번호 필드 타입 (password, text) 및 아이콘 관리 (각각의 필드에 대해)
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState(false);


  // 서버로 데이터 전송하는 함수(임시))
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 입력값이 없을 경우 경고 알림메시지
    if (!newPassword || !verifyPassword) {
      alert("비밀번호를 입력해주세요.");
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
    };

    navigate('/');//로그인 페이지로 이동

    console.log("비밀번호 변경이 완료되었습니다.:", payload);

    setErrorMessage("");
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
                          type={showNewPassword ? "text" : "password"}
                          className="NewPassword-input-field"
                          placeholder="새 비밀번호 입력"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                      </div>
                      <img
                        className="eye"
                        alt="Eye"
                        src={showNewPassword ? eyeImg : eyeRemoveImg}
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
                    확인
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPass;
