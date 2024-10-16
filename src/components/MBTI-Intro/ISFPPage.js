import React from "react";
import { Link } from "react-router-dom";
import "./MBTI-Intro.css";
import "./MBTI-Intro-styleguide.css";
import "./MBTI-Intro-global.css";

// 이미지 파일 import
import bannerimage from "../../assets/Intro/ISTP_1.svg";

const ISFPPage = () => {

  return (
    <div className="container-center-horizontal">
      <div className="ISFPPage Orange screenmbti">
        <nav className="navbar">
          <div className="left-menu">
            <div className="explore-hobby notosanskr-black-black-30px">
              <Link to="/">Explore HOBBY</Link>
            </div>
            <button className="nav-btn">MBTI 검사</button>
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
                <h1>ISFP</h1>
                <p>
                  항상 새로운 경험을 추구하는 유연하고 매력 넘치는 <br />
                  예술가 성격 유형입니다.
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
                <img src={bannerimage} alt="ISFP personality banner" />
              </div>
            </div>
            <p className="chart-subtitle">ISFP의</p>
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
                    stroke="#E4AF3A"
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
                    stroke="#E4AF3A"
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
                    stroke="#E4AF3A"
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
                    stroke="#E4AF3A"
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
                  ISFP는 삶을 통해 자신을 표현하는 예술가적 성향을 지닌
                  성격으로, 다양한 분야에 호기심과 열정을 보입니다. 이들은
                  독특한 개성을 자연스럽게 드러내지만, 자만하지 않고 자신이 하고
                  싶은 일을 할 뿐이라고 겸손하게 생각합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ISFP는 예술적이고 자유로운 영혼을 지닌 성격으로, 자신의 개성을
                일상 속에서 자연스럽게 표현하는 사람들입니다. 이들은 삶 자체를
                하나의 캔버스로 여기며, 옷차림이나 여가 활동 등 여러 측면에서
                창의적이고 독특한 면모를 드러냅니다. 또한, 이들은 매우 호기심이
                많고 새로운 경험을 추구하는 성격입니다.
                <br />
                <br /> 다양한 분야에 관심을 가지고 탐구하는 경향이 있으며, 이를
                통해 삶의 즐거움을 발견합니다. 이러한 모험가적인 성향에도
                불구하고, 이들은 자신의 독특함을 자랑하는 대신, 단지 자신이 하고
                싶은 일을 할 뿐이라고 겸손하게 생각하는 경향이 있습니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                개방적인 태도의 아름다움
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ISFP는 유연하고 즉흥적인 성향으로, 엄격한 계획보다는
                  하루하루를 자유롭게 살아가는 것을 선호합니다. 이들은 다양한
                  사람들과의 관계를 소중히 여기며, 개방적이고 관용적인 태도로
                  서로 다른 생각이나 라이프스타일을 존중합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ISFP는 즉흥적이고 유연한 성격으로, 엄격한 계획보다는 하루하루의
                상황에 따라 결정하며 현재를 즐깁니다. 여행이나 새로운 도전 같은
                활동을 통해 다양한 경험을 쌓는 것을 선호하며, 자유로운 삶을
                지향합니다. 이들은 다른 사람들과 함께 살아가는 것을 사랑하고,
                다양한 생각과 라이프스타일을 존중하며 수용하는 태도를 지닙니다.
                <br />
                <br />
                이들은 변화에 열려 있고, 자신의 의견이나 생각을 바꾸는 것을
                두려워하지 않으며, 타인도 변화할 수 있다고 믿습니다. 이들은 모든
                사람이 자신만의 방식으로 살아갈 수 있는 세상을 원하며, 편견 없는
                사회를 꿈꿉니다. <br />
                <br />
                그러나 장기적인 계획을 세우고 이를 유지하는 데 어려움을 겪을 수
                있으며, 이로 인해 목표를 성취하는 능력에 대한 자신감을 잃기도
                합니다. 체계적으로 접근하는 방법을 배운다면 독립성을
                유지하면서도 장기적인 성취를 이룰 수 있을 것입니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                조화로운 삶
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ISFP는 따뜻하고 배려심 넘치는 성격이며 친구나 사랑하는 사람과
                  함께할 때 행복을 느끼지만, 내향적인 성향으로 혼자만의 시간이
                  필요합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ISFP는 따뜻하고 배려심 넘치는 성격으로, 다른 사람과 깊은
                유대감을 느낄 때 가장 행복합니다. 하지만 내향적 성향(I)도 있어
                사람들과 시간을 보낸 후에는 자신만의 시간을 통해 에너지를
                회복하고 자신의 정체성을 성찰하는 시간이 필요합니다. 혼자만의
                시간이 없으면 내면의 혼란을 겪을 수 있습니다. <br />
                <br />
                이들은 창의적이고 자유로운 성향을 지닌 영혼으로, 자신만의 리듬에
                따라 살아가며 다른 사람의 의견에 쉽게 휘둘리지 않습니다. 하지만,
                타인의 생각이나 감정을 잘 파악하는 능력을 갖추고 있으며, 자신이
                남들에게 어떻게 보이는지에 민감합니다. <br />
                <br />
                그래서 비판을 받으면 쉽게 불안해하거나 때때로 크게 화를 내기도
                합니다. 이들은 과거의 실수나 상처에 매몰되지 않고 현재에
                집중하는 긍정적인 삶의 태도를 가지고 있으며, 이는 이들의 큰 매력
                중 하나입니다.
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

export default ISFPPage;
export const ENFPTitle1 = ""
export const ENFPTitle2 = ""
export const ENFPIntro1 = ""
export const ENFPSubText1 = ""
export const ENFPIntro2 = ""
export const ENFPSubText2 = ""
export const ENFPIntro3 = ""
export const ENFPSubText3 = ""
export const ENFPrecommendhobby = ""