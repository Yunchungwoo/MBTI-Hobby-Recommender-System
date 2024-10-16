import React from "react";
import { Link } from "react-router-dom";
import "./MBTI-Intro.css";
import "./MBTI-Intro-styleguide.css";
import "./MBTI-Intro-global.css";

// 이미지 파일 import
import bannerimage from "../../assets/Intro/ENTP.svg";

const ENTPPage = () => {

  return (
    <div className="container-center-horizontal">
      <div className="ENTPPage Purple screenmbti">
        <nav className="navbar">
          <div className="left-menu">
            <div className="explore-hobby notosanskr-black-black-30px">
            <Link to="/">Explore HOBBY</Link>
            </div>
            <Link to="/Test/step1">
              <button className="nav-btn">MBTI 검사</button>
            </Link>
            {/* 드롭다운 메뉴 - mbti 소개 페이지 링크 메뉴 */}
            <div className="dropdown">
              <button className="nav-btn dropdown-btn">MBTI 유형</button>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/Intro/infp" className="button btnFade btnGreen">
                    INFP
                  </Link>
                </li>
                <li>
                  <Link to="/Intro/infj" className="button btnFade btnGreen">
                    INFJ
                  </Link>
                </li>
                <li>
                  <Link to="/Intro/enfp" className="button btnFade btnGreen">
                    ENFP
                  </Link>
                </li>
                <li>
                  <Link to="/Intro/enfj" className="button btnFade btnGreen">
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
                  <Link to="/Intro/istp" className="button btnFade btnOrange">
                    ISTP
                  </Link>
                </li>
                <li>
                  <Link to="/Intro/isfp" className="button btnFade btnOrange">
                    ISFP
                  </Link>
                </li>
                <li>
                  <Link to="/Intro/estp" className="button btnFade btnOrange">
                    ESTP
                  </Link>
                </li>
                <li>
                  <Link to="/Intro/esfp" className="button btnFade btnOrange">
                    ESFP
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* 로그인, 회원가입 메뉴 */}
          <div className="right-menu">
              <button className="nav-btn notosanskr-medium-black-16px">
                <Link to="/login">로그인</Link>
              </button>
              <button className="nav-btn notosanskr-medium-black-16px">
              <Link to="/register">회원가입</Link>
              </button>
            </div>
        </nav>

        <div className="line"></div>

        {/* 메인콘텐츠 영역1 - 이미지 배너 및 텍스트 */}
        <div className="content-container">
          {/* 메인 배너 */}
          <div className="main-content">
            <div className="content-wrapper">
              <div className="text-content">
                <h1>ENTP</h1>
                <p>
                  지적 도전을 즐기는 영리하고 호기심이 <br />
                  많은 사색가입니다.
                </p>
                <ul>
                  <li>같은 유형인지 궁금하다면?</li>
                </ul>

                {/* 검사페이지 링크 버튼 */}
                <Link to="/Test/step1">
                  <button className="cta-button">
                    유형 검사하러 가기 &rarr;
                  </button>
                </Link>
              </div>

              {/* 이미지 배너 */}
              <div className="image-content">
                <img src={bannerimage} alt="ENTP personality banner" />
              </div>
            </div>
            <p className="chart-subtitle">ENTP의</p>
            <div className="chart-title">성격 유형 요약</div>

            {/* 성향 요약 차트 */}
            <div className="chart-container">
              {/* E/I */}
              <div className="chart">
                <svg viewBox="0 0 200 200" width="280px" height="280px">
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#ebebeb"
                    strokeWidth="15"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#5669ff"
                    strokeWidth="15"
                    strokeDasharray={2 * Math.PI * 90 * 0.5}
                    strokeDashoffset={-2 * Math.PI * 90 * 0.25}
                  />
                  <text
                    x="60"
                    y="105"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="45"
                    fill="black"
                    fontFamily="Azeret Mono"
                  >
                    E
                  </text>
                  <text
                    x="140"
                    y="105"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="45"
                    fill="black"
                    fontFamily="Azeret Mono"
                  >
                    I
                  </text>
                </svg>
                <div className="chart-label">외향적</div>
              </div>

              <div className="chart">
                {/* S/N */}
                <svg viewBox="0 0 200 200" width="280px" height="280px">
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#ebebeb"
                    strokeWidth="15"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#5669ff"
                    strokeWidth="15"
                    strokeDasharray={2 * Math.PI * 90 * 0.5}
                    strokeDashoffset={2 * Math.PI * 90 * 0.25}
                  />
                  <text
                    x="60"
                    y="105"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="45"
                    fill="black"
                    fontFamily="Azeret Mono"
                  >
                    S
                  </text>
                  <text
                    x="140"
                    y="105"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="45"
                    fill="black"
                    fontFamily="Azeret Mono"
                  >
                    N
                  </text>
                </svg>
                <div className="chart-label">직관적</div>
              </div>

              <div className="chart">
                {/* F/T */}
                <svg viewBox="0 0 200 200" width="280px" height="280px">
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#ebebeb"
                    strokeWidth="15"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#5669ff"
                    strokeWidth="15"
                    strokeDasharray={2 * Math.PI * 90 * 0.5}
                    strokeDashoffset={2 * Math.PI * 90 * 0.25}
                  />
                  <text
                    x="60"
                    y="105"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="45"
                    fill="black"
                    fontFamily="Azeret Mono"
                  >
                    F
                  </text>
                  <text
                    x="140"
                    y="105"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="45"
                    fill="black"
                    fontFamily="Azeret Mono"
                  >
                    T
                  </text>
                </svg>
                <div className="chart-label">사고적</div>
              </div>

              <div className="chart">
                {/* P/J */}
                <svg viewBox="0 0 200 200" width="280px" height="280px">
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#ebebeb"
                    strokeWidth="15"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#5669ff"
                    strokeWidth="15"
                    strokeDasharray={2 * Math.PI * 90 * 0.5}
                    strokeDashoffset={-2 * Math.PI * 90 * 0.25}
                  />
                  <text
                    x="60"
                    y="105"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="45"
                    fill="black"
                    fontFamily="Azeret Mono"
                  >
                    P
                  </text>
                  <text
                    x="140"
                    y="105"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="45"
                    fill="black"
                    fontFamily="Azeret Mono"
                  >
                    J
                  </text>
                </svg>
                <div className="chart-label">인식적</div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="line"></div>

        {/* 메인콘텐츠 영역2 - 소개글 */}
        <div className="main-content-section">
          <div className="content-wrapper-section">
            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">소개</div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ENTP는 두뇌 회전이 빠르고 대담하며, 상황에 이의를 제기하는
                  것을 주저하지 않습니다. 이들은 논란이 되는 주제에 대해
                  격렬하게 논쟁하는 것을 즐기지만, 그저 반론을 제기하는 데만
                  관심이 있는 것은 아닙니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ENTP는 지식이 풍부하고 호기심이 많으며 유머 감각도 뛰어나, 다른
                사람들을 즐겁게 할 수 있는 성격입니다. 다만, 논쟁 자체에서
                즐거움을 느끼며, 흥미로운 토론을 위해 일부러 반론을 펼치는
                경향이 있습니다. <br />
                <br />
                이들은 지식이 풍부하고 호기심이 넘치며 활기찬 유머 감각으로 다른
                사람을 즐겁게 할 수 있는 성격입니다. 다만 대부분의 성격과 달리
                논쟁에서 즐거움을 찾는 성향이 있을 뿐입니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                규칙 파괴자
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ENTP는 반항적 성향을 지니며, 모든 신념과 규칙에 의문을
                  제기하고 철저히 검토합니다. 불필요한 규칙은 따를 필요가 없다고
                  생각하며, 자신의 의견에 스스로 반론을 제기하기도 합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ENTP는 사회 규범에 순응하는 사람과 달리 널리 퍼진 생각에 의문을
                제기하며 새로운 아이디어를 제시하는 것을 즐깁니다. 그러나 많은
                아이디어를 실현하는 데는 어려움을 느끼며, 우선순위를 정하고
                실천하지 않으면 잠재력을 충분히 발휘하기 어렵습니다. <br />
                <br />
                이들의 입장에서는 많은 사람이 그저 시키는 일만 하고 사회 규범과
                압력과 기준에 쉽게 순응하는 것처럼 보입니다. 변론가는 널리 퍼진
                생각에 의문을 제기함으로써 정신을 단련하는 일을 즐기며, 사회에서
                소외된 사람과 평범하지 않은 사람들의 가치를 발견하는 일에서
                만족감을 느낍니다. 또한 모든 사람들이 당연하게 받아들이는 사실을
                다시 생각하고 새로운 아이디어를 제시하곤 합니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                갈등을 불러일으키는 성향
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ENTP는 논쟁에 능하지만, 이로 인해 직장과 인간관계에서 갈등이
                  발생할 수 있습니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ENTP는 풍부한 지식과 유머 감각을 가진 성격 유형이지만, 모든
                상황에서 반론을 제기하는 일이 항상 도움이 되는 것은 아니며,
                대부분의 사람은 자신의 신념을 반박하고 감정을 해치는 사람을
                좋아하지 않습니다. 이 때문에 논쟁의 즐거움만을 추구하게 되면
                인간관계를 망치게 될 위험이 있습니다. <br />
                <br />
                이들은 비전과 자신감, 풍부한 지식과 날카로운 유머 감각을 지니고
                있다는 장점이 있습니다. 그러나 다른 사람의 기분을 살피는 능력을
                기르지 못한다면 깊은 인간관계를 맺거나 직업적 성공을 거두는 데
                어려움을 겪을 수 있습니다. ENTP가 자신의 논리적 능력을 포기할
                필요는 없지만, 협력과 배려도 성공과 깊은 관계 형성에 중요한
                요소임을 이해해야 합니다.
              </p>

              {/* footer 영역 */}
              <footer className="footer">
                <div className="footer-content">
                  <h2 className="footer-title">취미 탐색 추천</h2>
                  <p className="footer-description">
                    Explore HOBBY 는 성격유형 검사를 통해 보다 더 자신을
                    이해하는 것을 돕고 <br />
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
        </div>
      </div>
    </div>
  );
};

export default ENTPPage;
export const ENFPTitle1 = ""
export const ENFPTitle2 = ""
export const ENFPIntro1 = "ENTP는 두뇌 회전이 빠르고 대담하며, 상황에 이의를 제기하는 것을 주저하지 않습니다. 이들은 논란이 되는 주제에 대해 격렬하게 논쟁하는 것을 즐기지만, 그저 반론을 제기하는 데만 관심이 있는 것은 아닙니다."
export const ENFPSubText1 = "ENTP는 지식이 풍부하고 호기심이 많으며 유머 감각도 뛰어나, 다른 사람들을 즐겁게 할 수 있는 성격입니다. 다만, 논쟁 자체에서 즐거움을 느끼며, 흥미로운 토론을 위해 일부러 반론을 펼치는 경향이 있습니다. <br /> <br /> 이들은 지식이 풍부하고 호기심이 넘치며 활기찬 유머 감각으로 다른 사람을 즐겁게 할 수 있는 성격입니다. 다만 대부분의 성격과 달리 논쟁에서 즐거움을 찾는 성향이 있을 뿐입니다."
export const ENFPIntro2 = ""
export const ENFPSubText2 = ""
export const ENFPIntro3 = ""
export const ENFPSubText3 = ""
export const ENFPrecommendhobby = ""