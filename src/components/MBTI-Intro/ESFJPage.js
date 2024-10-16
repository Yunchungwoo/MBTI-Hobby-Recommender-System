import React from "react";
import { Link } from "react-router-dom";
import "./MBTI-Intro.css";
import "./MBTI-Intro-styleguide.css";
import "./MBTI-Intro-global.css";

// 이미지 파일 import
import bannerimage from "../../assets/Intro/ESFJ.svg";

const ESFJPage = () => {

  return (
    <div className="container-center-horizontal">
      <div className="ESFJPage Blue screenmbti">
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
                <h1>ESFJ</h1>
                <p>
                  배려심이 넘치고 항상 다른 사람을 도울 준비가 되어 있는 성격
                  유형입니다.
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
                <img src={bannerimage} alt="ESFJ personality banner" />
              </div>
            </div>
            <p className="chart-subtitle">ESFJ의</p>
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
                    stroke="#317287"
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
                    stroke="#317287"
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
                <div className="chart-label">감각적</div>
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
                    stroke="#317287"
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
                <div className="chart-label">감정적</div>
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
                    stroke="#317287"
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
                <div className="chart-label">판단적</div>
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
                  ESFJ은 다른 사람과 함께할 때 인생의 기쁨을 느끼며, 책임감과
                  신뢰를 바탕으로 가족과 공동체를 하나로 모으려 노력합니다.
                  이들은 친절하고 배려심이 깊어, 주변 사람들을 보호하고 보살피는
                  능력이 뛰어납니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ESFJ은 인생을 다른 사람들과 함께할 때 가장 행복하다고 느끼는
                성격 유형입니다. 이들은 주로 공동체와 가족의 중심에서 중요한
                역할을 하며, 사람들에게 깊은 책임감을 느낍니다. 비록 모든 사람을
                좋아하는 것은 아니지만, 친절하고 예의 바른 태도가 긍정적인
                영향을 미친다고 믿으며, 종종 주변 사람들에게 헌신적입니다.{" "}
                <br />
                <br />
                이들은 다른 사람을 돌보고 보호하려는 강한 능력을 가지고 있으며,
                이를 통해 가족과 공동체를 하나로 묶는 역할을 자주 맡습니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                책임감 있는 삶의 아름다움
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ESFJ은 이타적인 성격으로, 다른 사람을 돕고 옳은 일을 해야
                  한다는 강한 책임감을 느낍니다. 이들은 대부분의 상황에서 옳고
                  그름을 명확히 구분할 수 있다고 믿으며, 자신의 도덕적 기준을
                  고수합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ESFJ은 이타주의적인 성격으로, 다른 사람을 돕고 그들에게 보답해야
                한다는 강한 책임감을 느낍니다. 이들은 대부분의 상황에서 옳은
                일이 무엇인지 명확하게 인식하고 있다고 믿습니다. 다른 성격
                유형들처럼 남과 자신에게 관대하지 않고, 종종 잘못된 길을 가는
                사람을 자신의 도덕적 기준에 맞추어 판단하는 경향이 있습니다.
                <br />
                <br />
                이들은 옳고 그름에 대한 확고한 신념을 가지고 있으며, 다른 사람의
                의견이 자신의 기준과 다르면 이를 받아들이기 어려워할 때가
                있습니다. 또한, 이들은 전통과 관습을 존중하는 성향이 있어 자신의
                의견도 이와 맞물려 형성되는 경우가 많습니다. 이들은 법과 규율을
                준수하는 것이 다른 사람을 배려하고 책임감 있게 행동하는 데
                중요한 역할을 한다고 믿습니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                장기적 관계를 위한 노력
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ESFJ은 배려심 많고 외향적인 성격으로, 관계를 중시하며 장기적인
                  유대감을 형성하는 데 헌신합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ESFJ은 배려심 많고 외향적인 성격을 지니고 있으며, 주로 사람들과
                함께 시간을 보내고 그들을 돕는 데 큰 만족감을 느낍니다. 이들은
                파티나 모임에서 모든 사람이 즐거운 시간을 보내는지 신경 쓰며,
                다른 사람에게 도움을 주는 것에 많은 에너지를 쏟습니다. 하지만
                이런 관계를 가볍게 여기지 않고, 깊은 신뢰와 헌신을 바탕으로
                장기적인 인간관계를 중시합니다. <br />
                <br />
                ESFJ은 매우 세심한 성격으로, 생일이나 기념일과 같은 중요한
                날짜들을 절대 잊지 않고, 규칙과 질서를 중시하며 사전에 계획된
                일정을 선호합니다. 이러한 책임감을 통해 모든 일을 원활하게
                진행시키려고 하며, 상대방이 자신을 특별하고 존중받는다고 느끼게
                만드는 데 능숙합니다. <br />
                <br />
                그러나 이러한 노력이 인정받지 못한다고 느낄 때 상처를 받기 쉬운
                면도 있습니다. 이들에게 있어 가장 큰 도전 중 하나는, 아무리
                가까운 사람이라도 그들의 행동이나 생각을 통제할 수 없다는 사실을
                받아들이는 것입니다. 하지만 이들은 자신의 강점인 배려심과
                책임감을 통해 사람들을 하나로 모으고, 이를 통해 평안함을 찾으려
                노력합니다.
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

export default ESFJPage;
export const ENFPTitle1 = ""
export const ENFPTitle2 = ""
export const ENFPIntro1 = ""
export const ENFPSubText1 = ""
export const ENFPIntro2 = ""
export const ENFPSubText2 = ""
export const ENFPIntro3 = ""
export const ENFPSubText3 = ""
export const ENFPrecommendhobby = ""