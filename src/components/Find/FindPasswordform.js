import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./FindPasswordformstyle.css";

// 이미지 파일 import
import Rectangle1 from "../../assets/Find/rectangle-398.svg";
import Rectangle2 from "../../assets/Find/rectangle-400.svg";
import Rectangle3 from "../../assets/Find/rectangle-405.svg";
import line from "../../assets/Find/line-8.svg";

const FindtoPass = () => {
  const [hobbyId, sethobbyId] = useState(""); // 하비ID 입력 상태 관리
  const navigate = useNavigate(); // useNavigate 훅 선언


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hobbyId) {
      alert("하비ID를 입력해주세요.");
    } else {
      navigate('/Find/Password/result');// 다음 페이지로 이동
    }
  };

  return (
    <div className="FindPasswordform">
      <div className="FindPasswordform-2">
        <div className="FindPasswordform-groupbox">
          <div className="FindPasswordform-selected">
            <div className="FindPasswordform-container">

              {/* 아이디 찾기 버튼 */}
              <img className="select-btn-id" src={Rectangle2} />
              <div className="select-btn-id-text">ID 찾기</div>

              {/* 비밀번호 찾기 버튼 */}
              <img className="select-btn-pass" src={Rectangle1} />
              <div className="select-btn-pass-text">비밀번호 찾기</div>
              <img className="line" alt="Line" src={line} />

              {/* 신규아이디 입력 폼 */}
              <div className="Findidbox">
                <div className="Findidbox-container" />
                <p className="Findidbox-container-notice">
                  비밀번호 찾기를 위한 하비ID를 입력해주세요.
                </p>
                <div className="Findidbox-container-inputtitle">하비ID</div>
                <img
                  className="Findidbox-container-textbox"
                  alt="Rectangle"
                  src={Rectangle3}
                />

                {/* 텍스트 입력 필드 */}
                <input
                  type="text"
                  className="Findidbox-container-textbox-input"
                  value={hobbyId}
                  onChange={(e) => sethobbyId(e.target.value)}
                  placeholder="하비ID (아이디 또는 이메일)"
                />
              </div>

              {/* link 버튼 */}
              <div className="Findidbox-linkbutton">
                <div className="Findidbox-linkbutton-box">
                  <div className="Findidbox-linkbutton-textbox">
                    <div className="Findidbox-linkbutton-container" />
                    <div className="Findidbox-linkbutton-container-text">
                      <a href="#" onClick={handleSubmit}>
                        다음
                      </a>
                    </div>
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

export default FindtoPass;
