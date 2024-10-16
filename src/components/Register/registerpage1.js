import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 useNavigate
import { Link } from "react-router-dom";
import './Rstyleguide.css';
import './Rglobals.css';
import './registerpage1.css';

// 이미지 파일 import
import line4 from '../../assets/Reimg/line-4.svg';
import line3 from '../../assets/Reimg/line-3.svg';
import line5 from '../../assets/Reimg/line-5.svg';
import iconly2 from '../../assets/Reimg/iconly-light-outline-arrow---right-2-1@2x.png';
import iconly1 from '../../assets/Reimg/iconly-light-outline-arrow---right-2@2x.png';

function Registerpage1() {
  const [agreeAll, setAgreeAll] = useState(false);
  const [termsAgree, setTermsAgree] = useState(false);
  const [privacyAgree, setPrivacyAgree] = useState(false);
  const [newsAgree, setNewsAgree] = useState(false);
  const navigate = useNavigate(); // useNavigate 훅 선언

  // 전체 동의 체크박스 핸들러
  const handleAgreeAllChange = () => {
    const newState = !agreeAll;
    setAgreeAll(newState);
    setTermsAgree(newState);
    setPrivacyAgree(newState);
    setNewsAgree(newState);
  };

  // 개별 체크박스 핸들러
  const handleIndividualCheckboxChange = (setter, value) => {
    setter(value);
    if (!value || (termsAgree && privacyAgree && newsAgree)) {
      setAgreeAll(false); // 개별 체크박스 해제 시 전체동의도 해제
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (termsAgree && privacyAgree) {
      navigate('/register/step2');// 다음 페이지로 이동
    } else {
      alert('필수 항목에 모두 동의해야 합니다.');
    }
  };

  return (
    <div className="container-center-horizontal">
      <div className="u4370u4460u4363u4463u4523u4352u4449u4363u4469u4536-1 screen">
        <Link to="/mainHome">
          <div className="logo_-titlle notosanskr-black-black-35px">Explore<br />HOBBY</div>
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="overlap-group-container">
            <div className="overlap-group">
              {/* 이미지 삽입 */}
              <img className="line-4 line" src={line4} alt="Line 4" />
              <div className="group-34 group">
                <div className="overlap-group2">
                  <div className="group-33 group">
                    <div className="overlap-group1">
                      <div className="overlap-group-1">
                        <label className="custom-checkbox">
                          <input
                            type="checkbox"
                            checked={agreeAll}
                            onChange={handleAgreeAllChange}
                          />
                          <span className="checkmark-1"></span>
                          <div className="text-3">전체 동의하기</div>
                        </label>
                      </div>
                      <p className="terms">필수 및 선택항목 동의 포함</p>
                    </div>

                    <div className="flex-row">
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          checked={termsAgree}
                          onChange={() => handleIndividualCheckboxChange(setTermsAgree, !termsAgree)}
                          required
                        />
                        <span className="checkmark-1"></span>
                        <span className="text zenkakugothicantique-normal-gravel-17-6px">
                          하비 전체 서비스 이용약관 동의(필수)
                        </span>
                      </label>
                    </div>

                    <div className="flex-row-1 flex-row-3">
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          checked={privacyAgree}
                          onChange={() => handleIndividualCheckboxChange(setPrivacyAgree, !privacyAgree)}
                          required
                        />
                        <span className="checkmark-1"></span>
                        <span className="text zenkakugothicantique-normal-gravel-17-6px">
                          개인정보 수집 동의(필수)
                        </span>
                      </label>
                    </div>

                    <div className="flex-row-2 flex-row-3">
                      <label className="custom-checkbox">
                        <input
                          type="checkbox"
                          checked={newsAgree}
                          onChange={() => handleIndividualCheckboxChange(setNewsAgree, !newsAgree)}
                        />
                        <span className="checkmark-1"></span>
                        <span className="text zenkakugothicantique-normal-gravel-17-6px">
                          취미 공유 및 이벤트 관련 소식 받기(선택)
                        </span>
                      </label>
                    </div>
                  </div>
                  <h1 className="text-7">항목에 동의해주세요</h1>
                  <p className="text-8">선택하지 않아도 서비스를 이용할 수 있습니다.</p>
                  {/* 이미지 삽입 */}
                  <img
                    className="iconly-light-outline-arrow-right-2"
                    src={iconly1}
                    alt="Iconly/Light-Outline/Arrow---Right-2"
                  />
                  <img
                    className="iconly-light-outline-arrow-right-2-1"
                    src={iconly2}
                    alt="Iconly/Light-Outline/Arrow---Right-2"
                  />
                </div>
              </div>
              {/* 이미지 삽입 */}
              <img className="line-3 line" src={line3} alt="Line 3" />
              <img className="line-5 line" src={line5} alt="Line 5" />
            </div>
            <Link to="/register/step2">
              <div className="overlap-group5">
                <button type="submit" className="rectangle-388 text-10 notosanskr-medium-white-24px">
                  다음
                </button>
              </div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registerpage1;
