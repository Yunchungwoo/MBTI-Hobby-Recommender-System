import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./styleguide.css";
import "./testingpage-1.css";

const TestPage4 = () => {
  // useState을 사용하여 현재 질문 번호와 사용자의 응답 상태를 저장합니다.
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({
    q31: "",
    q32: "",
    q33: "",
    q34: "",
    q35: "",
    q36: "",
    q37: "",
    q38: "",
    q39: "",
    q40: "",
  });

  // 질문 목록 설정
  const questionTitles = [
    "보통 혼자 있는 것보다는 다른 사람과 어울리는 것을 더 좋아한다.",
    "논의가 지나치게 이론적이 되면 지루해지거나 흥미를 잃는다.",
    "사실과 감정이 충돌할 때 감정에 따라 행동한다.",
    "업무나 학업 일정을 일관성 있게 유지하는 것이 어렵다고 생각한다.",
    "이미 내린 결정에 대해서는 다시 생각하는 경우는 드물다.",
    "친구들은 나를 활기차고 외향적이라고 묘사한다.",
    "글쓰기와 같은 다양한 형태의 창의적 표현에 끌린다.",
    "보통 감정적인 인상보다는 객관적인 사실에 기반하여 선택한다.",
    "매일 할 일을 계획하는 것이 좋다.",
    "불안함을 느끼는 경우는 드물다.",
  ];

  // 사용자가 선택한 값을 업데이트하는 함수
  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });

    // 현재 질문에 따라 다음 질문으로 이동
    const questionNumber = parseInt(e.target.name.slice(1));
    if (questionNumber < 10) {
      setCurrentQuestion(questionNumber + 1);
    }
  };

  // 제출 버튼 클릭 시 실행될 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answers);
  };

  return (
    <>
      {/* 배너 이미지 영역 */}
      <div className="test-banner" />
      {/* 질문 폼 */}
      <form onSubmit={handleSubmit}>
        <div className="container-horizontal">
          <div className="testingpage-1 screen">
            {/* 상단 네비게이션 바 설정 */}
            <nav className="navbar">
              <div className="left-menu">
                <div className="explore-hobby notosanskr-black-black-30px">
                  <Link to="/mainHome">Explore HOBBY</Link>
                </div>
                <button className="nav-btn">
                  <Link to="/Test/step1">MBTI 검사</Link>
                </button>

                {/* 드롭다운 메뉴 */}
                <div className="dropdown">
                  <button className="nav-btn dropdown-btn">MBTI 유형</button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to="/Intro/infp"
                        className="button btnFade btnGreen"
                      >
                        INFP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Intro/infj"
                        className="button btnFade btnGreen"
                      >
                        INFJ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Intro/enfp"
                        className="button btnFade btnGreen"
                      >
                        ENFP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Intro/enfj"
                        className="button btnFade btnGreen"
                      >
                        ENFJ
                      </Link>
                    </li>
                    <li>
                      <Link to="/Intro/intj" className="button btnFade btnblue">
                        INTJ
                      </Link>
                    </li>
                    <li>
                      <Link to="/Intro/intp" className="button btnFade btnblue">
                        INTP
                      </Link>
                    </li>
                    <li>
                      <Link to="/Intro/entj" className="button btnFade btnblue">
                        ENTJ
                      </Link>
                    </li>
                    <li>
                      <Link to="/Intro/entp" className="button btnFade btnblue">
                        ENTP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Intro/istj"
                        className="button btnFade btnLightBlue"
                      >
                        ISTJ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Intro/isfj"
                        className="button btnFade btnLightBlue"
                      >
                        ISFJ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Intro/estj"
                        className="button btnFade btnLightBlue"
                      >
                        ESTJ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Intro/esfj"
                        className="button btnFade btnLightBlue"
                      >
                        ESFJ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Intro/istp"
                        className="button btnFade btnOrange"
                      >
                        ISTP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Intro/isfp"
                        className="button btnFade btnOrange"
                      >
                        ISFP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Intro/estp"
                        className="button btnFade btnOrange"
                      >
                        ESTP
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/Intro/esfp"
                        className="button btnFade btnOrange"
                      >
                        ESFP
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* 로그인 및 회원가입 버튼 */}
              <div className="right-menu">
                <button className="nav-btn notosanskr-medium-black-16px">
                  <Link to="/">로그인</Link>
                </button>
                <button className="nav-btn notosanskr-medium-black-16px">
                  <Link to="/register">회원가입</Link>
                </button>
              </div>
            </nav>

            {/* 질문 항목 렌더링 */}
            {questionTitles.map((title, index) => {
              const questionNum = index + 1;
              return (
                <div
                  key={`q${questionNum}`}
                  className="question"
                  style={{
                    opacity: currentQuestion === questionNum ? 1 : 0.5,
                    pointerEvents:
                      currentQuestion === questionNum ? "auto" : "none",
                    transition: "opacity 0.5s ease",
                  }}
                >
                  <h2 className="question-title">{title}</h2>
                  <div className="radio-options">
                    <label className="radio-text">매우 그렇다</label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name={`q${questionNum}`}
                        value="아주 그렇다"
                        onChange={handleChange}
                        className="radio-button"
                      />
                      <span className="custom-radio"></span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name={`q${questionNum}`}
                        value="그렇다"
                        onChange={handleChange}
                        className="radio-button"
                      />
                      <span className="custom-radio"></span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name={`q${questionNum}`}
                        value="보통이다"
                        onChange={handleChange}
                        className="radio-button"
                      />
                      <span className="custom-radio"></span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name={`q${questionNum}`}
                        value="아니다"
                        onChange={handleChange}
                        className="radio-button"
                      />
                      <span className="custom-radio"></span>
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name={`q${questionNum}`}
                        value="전혀 아니다"
                        onChange={handleChange}
                        className="radio-button"
                      />
                      <span className="custom-radio"></span>
                    </label>
                    <label className="radio-text">그렇지 않다</label>
                  </div>
                  <div className="question-line" />
                </div>
              );
            })}

            {/* 다음 버튼 */}
            <button type="submit" className="submit">
              <Link to="">다음</Link>
            </button>
          </div>

          {/* 하단 푸터 영역 */}
          <div className="container">
            <div className="content"></div>
            <footer className="footer">
              <div className="footer-content">
                <h2 className="footer-title">취미 탐색 추천</h2>
                <p className="footer-description">
                  Explore HOBBY 는 성격유형 검사를 통해 보다 더 자신을 이해하는
                  것을 돕고 <br />
                  취미를 추천하여 사용자의 삶의 질을 높이는 데 기여합니다.
                </p>
                <div className="footer-buttons">
                  <button className="footer-btn">Recommend</button>
                  <button className="footer-btn">Home</button>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="footer-logo">Explore HOBBY</div>
                <div className="footer-copyright">
                  &copy; 2024 Explore HOBBY. All Rights Reserved.
                </div>
              </div>
            </footer>
          </div>
        </div>
      </form>
    </>
  );
};

export default TestPage4;
