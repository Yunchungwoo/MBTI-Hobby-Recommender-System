import React from "react";
import "./FindIDresultstyle.css";

// 이미지 파일 import
import Rectangle1 from "../../assets/Find/rectangle-398.svg";
import Rectangle2 from "../../assets/Find/rectangle-400.svg";
import line from "../../assets/Find/line-8.svg";
import vector from "../../assets/Find/vector-6.svg";

const IDresult = () => {
  return (
    <div className="FindIDresult">
      <div className="FindIDresult-2">
        <div className="FindIDresult-groupbox">
          <div className="FindIDresult-selected">
            <div className="FindIDresult-container">
              {/* 아이디 찾기 버튼 */}
              <img className="select-btn-id" alt="아이디 찾기 버튼" src={Rectangle2} />
              <div className="select-btn-id-text">ID 찾기</div>

              {/* 비밀번호 찾기 버튼 */}
              <img className="select-btn-pass" alt="비밀번호 찾기 버튼" src={Rectangle1} />
              <div className="select-btn-pass-text">비밀번호 찾기</div>
              <img className="line" alt="Line" src={line} />

              <p className="ID-into-title">
                회원님의 정보와 일치하는 하비ID 입니다.
              </p>

              {/* 하비ID, 가입일, 회원상태 정보 출력 */}
              <div className="ID-info-section">
                <div className="ID-info-containerbox">
                  <div className="ID-info-box">
                    <img className="ID-info-box-group" alt="Rectangle" />
                    <div className="ID-info-background" />
                    <div className="info-label-1">하비ID</div>
                    <div className="info-label-2">가입일</div>
                    <div className="info-label-3">회원상태</div>

                    <div className="ID-details-1">
                      <div className="status-indicator">
                        <input type="radio" id="ID1" name="status" />
                        <label htmlFor="ID1"></label>
                      </div>
                      <div className="info-value-1">{/* id 정보 표시 */}</div>
                      <div className="info-value-2">{/* 가입일 날짜 표시 */}</div>
                      <div className="info-value-3">정상</div>
                      <img className="vector" alt="Vector" src={vector} />
                    </div>

                    <div className="ID-details-2">
                      <div className="status-indicator-2">
                        <input type="radio" id="ID2" name="status" />
                        <label htmlFor="ID2"></label>
                      </div>
                      <div className="info-value-4">{/* id 정보 표시 */}</div>
                      <div className="info-value-5">{/* 가입일 날짜 표시 */}</div>
                      <div className="info-value-6">정상</div>
                      <img className="vector-2" alt="Vector" src={vector} />
                    </div>

                    <div className="ID-details-3">
                      <div className="status-indicator-3">
                        <input type="radio" id="ID3" name="status" />
                        <label htmlFor="ID3"></label>
                      </div>
                      <div className="info-value-4">{/* id 정보 표시 */}</div>
                      <div className="info-value-5">{/* 가입일 날짜 표시 */}</div>
                      <div className="info-value-6">정상</div>
                      <img className="vector-2" alt="Vector" src={vector} />
                    </div>
                  </div>
                </div>
              </div>

              {/* 로그인 및 비밀번호 재설정 버튼 기능 */}
              <div className="Login-link-button">
                <div className="Login-link-button-section">
                  <div className="Login-link-button-box">
                    <div className="login-background">
                      <div className="Login-rectangle" />
                      <div className="Login-link-button-text">
                        <button className="linkbtn1">
                          로그인
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="reset-button">
                    <div className="reset-button-section">
                      <div className="reset-background">
                        <div className="reset-rectangle" />
                        <div className="reset-button-text">
                          <button className="linkbtn2">
                            비밀번호 재설정
                          </button>
                        </div>
                      </div>
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

export default IDresult;
