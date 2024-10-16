import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./testinpagestyleguide.css";
import "./testingpage-1.css";

const TestPage2 = ({ updateAnswers, allAnswers }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // useState을 사용하여 현재 질문 번호와 사용자의 응답 상태를 저장합니다.
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({
    q11: "",
    q12: "",
    q13: "",
    q14: "",
    q15: "",
    q16: "",
    q17: "",
    q18: "",
    q19: "",
    q20: "",
  });

  // 질문 목록 설정
  const questionTitles = [
    "관심이 가는 사람에게 다가가서 대화를 시작하는 일을 편안하게 느낀다.",
    "창작물의 다양한 해석에 대해 토론하는 일에는 큰 관심이 없다.",
    "행동 게획을 결정할 때 사람들의 감정보다는 사실을 우선한다",
    "일정 없이 하루가 흘러가는 경우가 많다.",
    "다른 사람에게 자신이 어떤 사람으로 보일지 걱정하는 경우는 드물다.",
    "팀 기반 활동에 참여하는 것을 좋아한다.",
    "새롭고 검증되지 않은 접근 방식을 실험하는 것을 즐긴다.",
    "완전한 솔직함보다 세심함을 우선시한다.",
    "탐구할 새로운 경험, 지식 분야를 적극적으로 찾는다.",
    "일이 잘못될까봐 자주 걱정하는 편이다.",
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
        q11: answers.q11 || "보통이다",
        q12: answers.q12 || "보통이다",
        q13: answers.q13 || "보통이다",
        q14: answers.q14 || "보통이다",
        q15: answers.q15 || "보통이다",
        q16: answers.q16 || "보통이다",
        q17: answers.q17 || "보통이다",
        q18: answers.q18 || "보통이다",
        q19: answers.q19 || "보통이다",
        q20: answers.q20 || "보통이다",
    };

    const mergedAnswers = { ...allAnswers, ...combinedAnswers };

    updateAnswers(combinedAnswers);
  navigate("/Test/step3", { state: { answers: combinedAnswers } });
};

  const questionMapping = {
    "E/I": [1, 6, 11, 16, 21, 26, 31, 36],
    "S/N": [2, 7, 12, 17, 22, 27, 32, 37],
    "T/F": [3, 8, 13, 18, 23, 28, 33, 38],
    "J/P": [4, 9, 14, 19, 24, 29, 34, 39]
  };
  
  const responseMapping = {
    "전혀 아니다": 1,
    "아니다": 2,
    "보통이다": 3,
    "그렇다": 4,
    "아주 그렇다": 5
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
              const questionNum = index + 11;
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
              <Link to="/Test/step3">다음</Link>
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

export default TestPage2;
