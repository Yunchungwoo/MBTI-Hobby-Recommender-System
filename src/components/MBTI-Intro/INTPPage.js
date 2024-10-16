import React from "react";
import { Link } from "react-router-dom";
import "./MBTI-Intro.css";
import "./MBTI-Intro-styleguide.css";
import "./MBTI-Intro-global.css";

// 이미지 파일 import
import bannerimage from "../../assets/Intro/INTP.svg";

const INTPPage = () => {

  return (
    <div className="container-center-horizontal">
      <div className="INTPPage Purple screenmbti">
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
                <h1>INTP</h1>
                <p>INTP는 지식을 끝없이 갈망하는 성격 유형입니다.</p>
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
                <img src={bannerimage} alt="INTP personality banner" />
              </div>
            </div>
            <p className="chart-subtitle">INTP의</p>
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
                <div className="chart-label">내향적</div>
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
                  INTP는 자신의 독측한 관점과 활기 넘치는 지성에 자부심을
                  느끼며, 우주의 미스터리에 대해 깊이 생각하곤 합니다. 뛰어난
                  창의성과 독창성으로 많은 사람 사이에서 존재감을 드러내곤
                  합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                INTP는 자신의 독특한 관점과 활기 넘치는 지성에 자부심을 느끼며,
                우주의 미스터리에 대해 깊이 생각하곤 합니다. 유명한 철학자와
                과학자 중에서 이러한 성격이 많은 것도 이 때문일 것입니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                자신만의 생각에 빠지는 경향
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  INTP는 상상력과 호기심이 넘치는 성격으로 자신의 아이디어에
                  대해 끊임없이 생각하고는 합니다. 이들은 항상 무엇을 생각하고
                  있으며 일어난 순간부터 다양한 아이디어와 질문을 떠올립니다.
                  가끔 머릿속에서 혼자 치열한 토론을 펼치기도 합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                INTP는 항상 깊은 생각과 다양한 아이디어에 몰두하는 성격으로,
                내면에서 치열한 토론을 벌이곤 합니다. 그들의 상상력과 호기심은
                끝이 없으며, 몽상에 빠진 듯 보이기도 합니다. 하지만 이러한 성향
                때문에 때로는 현실에 집중하지 못하고 내성적이라는 평가를 받을 수
                있습니다.
                <br />
                <br /> 특히, 내향적인 성향(I) 때문에 사람들과의 만남에서 피로를
                느끼며, 혼자만의 시간이 필요합니다. 그러나 이들이 불친절하거나
                예민한 것은 아닙니다. 오히려 지적 대화와 토론을 통해 에너지를
                얻으며, 자신과 비슷한 호기심이 많은 사람을 만나면 활력을
                되찾습니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                탐정과 같은 성격
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  INTP는 브레인스토밍처럼 참신한 아이디어와 다양한 가능성에 대해
                  생각하는 대화를 선호합니다. 이들은 패턴을 분석하는 일을
                  즐기고는 하고 무의식적으로 미세한 차이나 이상한 점을 발견하며
                  다른 사람의 거짓말도 잘 간파하는 편입니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                INTP는 패턴 분석과 작은 차이점 발견에 뛰어나며, 무의식적으로
                이상한 점을 감지하고 거짓말을 잘 간파합니다. 하지만 자신이 한
                말을 자주 잊거나 생각을 바꾸는 성향이 있어, 약속을 항상 지키는
                사람으로 보이지 않을 수 있습니다. <br />
                <br />
                이는 정직하지 않아서가 아니라, 다양한 아이디어와 이론에 몰두하기
                때문입니다. 이들은 브레인스토밍과 같이 창의적인 아이디어를
                나누는 대화를 선호하며, 참신한 가능성을 탐구하는 것을 즐깁니다.
                그러나 아이디어를 실현하는 것에는 큰 관심이 없고, 대신 복잡한
                문제를 해결하는 데 탁월한 창의력과 잠재력을 발휘하는 성격입니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                우주의 미스터리
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  INTP는 모든 것을 논리적으로 이해하고 분석하려는 성향을 가지고
                  있지만, 인간 감정은 그들에게 큰 도전 과제입니다. 이들은 논리와
                  이성에 집중하는 것을 편안하게 여기며, 감정적 반응이 자신과
                  다른 사람들에게 큰 영향을 미친다는 사실을 이해하는 데 어려움을
                  느낍니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                그러나 이들이 감정적으로 메마른 성격은 아니며, 친구나 연인에게
                감정적으로 힘이 되어주고 싶어도 방법을 몰라서 주저할 때가
                있습니다. 이로 인해 때로는 말이나 행동을 아예 하지 않기도
                합니다. 이러한 성향은 일상생활에도 영향을 미칩니다. <br />
                <br />
                INTP는 작은 결정에 대해서도 너무 깊이 생각하며, 이로 인해 실제로
                일을 완수하지 못하고 피로감이나 답답함을 느낄 때가 있습니다.
                하지만, 이들은 창의적이고 문제 해결 능력이 뛰어나 어려움을
                극복할 수 있는 잠재력을 가지고 있습니다. 자신의 창의성과
                개방적인 태도를 잘 활용하면, 논리술사는 다양한 분야에서 성공을
                거두고 행복한 삶을 영위할 수 있습니다.
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

export default INTPPage;
export const ENFPTitle1 = ""
export const ENFPTitle2 = ""
export const ENFPIntro1 = ""
export const ENFPSubText1 = ""
export const ENFPIntro2 = ""
export const ENFPSubText2 = ""
export const ENFPIntro3 = ""
export const ENFPSubText3 = ""
export const ENFPrecommendhobby = ""