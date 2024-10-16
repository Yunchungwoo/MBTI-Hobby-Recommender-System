import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./testinpagestyleguide.css";
import "./testingpage-1.css";

const TestPage6 = ({ updateAnswers, allAnswers }) => {
  const navigate = useNavigate();

  // useState을 사용하여 현재 질문 번호와 사용자의 응답 상태를 저장합니다.
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({
    q51: "",
    q52: "",
    q53: "",
    q54: "",
    q55: "",
    q56: "",
    q57: "",
    q58: "",
    q59: "",
    q60: "",
  });

  // 질문 목록 설정
  const questionTitles = [
    "대부분의 시간을 혼자서 일할 수 있는 직업을 원한다.",
    "추상적인 철학적 질문에 대해 깊게 생각하는 일은 시간 낭비라고 생각한다.",
    "조용하고 사적인 장소보다는 사람들로 붐비고 떠들썩한 장소에 마음이 더 끌린다.",
    "어떤 결정이 옳다고 생각하면 종종 추가 증거 없이도 그 결정에 따라 행동한다.",
    "무엇인가에 압도당하는 기분을 느낄 때가 많다.",
    "단계를 건너뛰는 일 없이 절차대로 일을 완수한다.",
    "구체적인 단계를 따르기보다는 창의적인 해결책을 생각해 내야 하는 작업을 선호한다.",
    "선택할 때 논리적으로 추론하기보다는 감정적인 직관에 더 의지하는 경향이 있다.",
    "마감 기한을 지키기가 힘들다.",
    "일이 원하는 대로 진행될 것이라는 자신감이 있다.",
  ];

  // 사용자가 선택한 값을 업데이트하는 함수
  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });

    // 현재 질문에 따라 다음 질문으로 이동
    const questionNumber = parseInt(e.target.name.slice(1));
    if (questionNumber < 10) {
      setCurrentQuestion(questionNumber + 1);
    }
  };

  // 제출 버튼 클릭 시 실행될 함수
  const handleSubmit = (e) => {
    e.preventDefault();

    // 기본값을 '보통이다'로 설정하여 answers 객체를 완성
    const combinedAnswers = {
        q51: answers.q51 || "보통이다",
        q52: answers.q52 || "보통이다",
        q53: answers.q53 || "보통이다",
        q54: answers.q54 || "보통이다",
        q55: answers.q55 || "보통이다",
        q56: answers.q56 || "보통이다",
        q57: answers.q57 || "보통이다",
        q58: answers.q58 || "보통이다",
        q59: answers.q59 || "보통이다",
        q60: answers.q60 || "보통이다",
    };

    updateAnswers(combinedAnswers);
    navigate("/Test/result", { state: { answers: combinedAnswers } });
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
                  <Link to="/">Explore HOBBY</Link>
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
                  <Link to="/login">로그인</Link>
                </button>
                <button className="nav-btn notosanskr-medium-black-16px">
                  <Link to="/register">회원가입</Link>
                </button>
              </div>
            </nav>

            {/* 질문 항목 렌더링 */}
            {questionTitles.map((title, index) => {
              const questionNum = index + 51;
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
              <Link to="/Test/result">다음</Link>
            </button>
          </div>

          <div className="container">
            <div className="content"></div>

            {/* 하단 푸터 영역 */}
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

export default TestPage6;
