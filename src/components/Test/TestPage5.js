import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./testinpagestyleguide.css";
import "./testingpage-1.css";

const TestPage5 = ({ updateAnswers, allAnswers }) => {
  const navigate = useNavigate();

  // useState을 사용하여 현재 질문 번호와 사용자의 응답 상태를 저장합니다.
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState({
    q41: "",
    q42: "",
    q43: "",
    q44: "",
    q45: "",
    q46: "",
    q47: "",
    q48: "",
    q49: "",
    q50: "",
  });

  // 질문 목록 설정
  const questionTitles = [
    "전화 걸기를 꺼린다.",
    "생소한 아이디어, 관점을 탐구하는 일을 좋아한다.",
    "방금 만난 사람과 쉽게 친해질 수 있다.",
    "계획에 차질이 생기면 최대한 빨리 원래 게획대로 진행하기를 취우선으로 한다.",
    "오래전의 실수를 후회하곤 한다.",
    "미래에 세상이 어떤 모습일지에 대한 의견을 주고받는 일에는 크게 관심이 없다.",
    "감정을 조절하기보다는 감정에 휘둘린다.",
    "결정을 내릴 때 가장 논리적이거나 효율적인 방법보다 영향을 받는 사람들이 어떻게 생각할지에 더 집중한다.",
    "계획에 따라 일관성 있게 업무를 진행하기보다는 즉흥적인 에너지로 업무를 몰아서 처리하는 편이다.",
    "상대방이 자신을 높게 평가하면 나중에 상대방이 실망하게 될까 걱정하곤 한다.",
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
        q41: answers.q41 || "보통이다",
        q42: answers.q42 || "보통이다",
        q43: answers.q43 || "보통이다",
        q44: answers.q44 || "보통이다",
        q45: answers.q45 || "보통이다",
        q46: answers.q46 || "보통이다",
        q47: answers.q47 || "보통이다",
        q48: answers.q48 || "보통이다",
        q49: answers.q49 || "보통이다",
        q50: answers.q50 || "보통이다",
    };

    updateAnswers(combinedAnswers);
    navigate("/Test/step6", { state: { answers: combinedAnswers } });
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
              const questionNum = index + 41;
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
              <Link to="/Test/step6">다음</Link>
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

export default TestPage5;
