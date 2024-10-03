import React, { useState } from "react";
import "./FindtoIDstyle.css";

// 이미지 파일 import
import Rectangle1 from "../img/rectangle-398.svg";
import Rectangle2 from "../img/rectangle-400.svg";
import line from "../img/line-8.svg";

const Findtoidhome = () => {
  const [selectedButton, setSelectedButton] = useState("ID");
  const [infoText, setInfoText] = useState("하비ID를 찾기 위한 본인인증 방법을 선택해주세요");

  // 버튼 클릭 시, 이미 선택된 버튼 클릭 제어 함수
  const handleButtonClick = (button) => {
    if (selectedButton !== button) {
      setSelectedButton(button);
      setInfoText(
        button === "PASS"
          ? "본인확인 방법을 선택해주세요."
          : "하비ID를 찾기 위한 본인인증 방법을 선택해주세요"
      )
    }
  };

  return (
    <div className="FindtoID">
      <div className="FindtoID-2">
        <div className="FindtoID-groupbox">
          <div className="FindtoID-selected">
            <div className="FindtoID-container">
              {/* ID 찾기 버튼 */}
              <img
                className="select-btn-id"
                alt="Rectangle"
                src={selectedButton === "ID" ? Rectangle1 : Rectangle2} // 선택 여부에 따라 이미지 변경
                onClick={() => handleButtonClick("ID")}
                style={{ cursor: selectedButton === "ID" ? "default" : "pointer" }}
              />

              {/* 비밀번호 찾기 버튼 */}
              <img
                className="select-btn-pass"
                alt="Rectangle"
                src={selectedButton === "PASS" ? Rectangle1 : Rectangle2}
                onClick={() => handleButtonClick("PASS")}
                style={{ cursor: selectedButton === "PASS" ? "default" : "pointer" }}
              />

              {/* 텍스트 */}
              <div
                className={`select-btn-id-text ${
                  selectedButton === "ID" ? "selected-text" : "deselected-text"
                }`}
                onClick={() => handleButtonClick("ID")}
                style={{ cursor: selectedButton === "ID" ? "default" : "pointer" }}
              >
                ID 찾기
              </div>

              <div
                className={`select-btn-pass-text ${
                  selectedButton === "PASS" ? "selected-text" : "deselected-text"
                }`}
                onClick={() => handleButtonClick("PASS")}
                style={{ cursor: selectedButton === "PASS" ? "default" : "pointer" }}
              >
                비밀번호 찾기
              </div>
            </div>
          </div>

          <div className="authentication-box-email" />
          <div className="authentication-box-email-group1">
            <div className="authentication-box-email-group2">
              <div className="authentication-box-text">이메일 인증</div>
              <div className="authentication-box-email-text">
                회원님 소유의 이메일로 인증
              </div>
            </div>
          </div>
          <div className="authentication-btn-email" />
          <div className="authentication-btn-email-text">
            <a href="#">인증하기</a>
          </div>
          <div className="authentication-btn-email-maskImg" />
          <div
          />
          {/* 텍스트 상태 변경 p 태그 */}
          <p className="p">{infoText}</p>
          <img className="line" alt="Line" src={line} />
        </div>
      </div>
    </div>
  );
};

export default Findtoidhome;
