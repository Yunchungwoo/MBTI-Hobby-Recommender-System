import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MBTI-Intro.css";
import "./MBTI-Intro-styleguide.css";
import "./MBTI-Intro-global.css";

// 이미지 파일 import
import bannerimage from "../../assets/Intro/ESTJ.svg";

const ESTJPage = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // 탭메뉴 함수, 탭 전환 시 애니메이션 활성화
  const showTab = (tabIndex) => {
    setCurrentTab(tabIndex);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    });
  };

  // 페이지 로드 시 탭 메뉴 상태 설정
  useEffect(() => {
    showTab(1);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="container-center-horizontal">
      <div className="ESTJPage Blue screenmbti">
        <nav className="navbar">
          <div className="left-menu">
            <div className="explore-hobby notosanskr-black-black-30px">
              <Link to="/mainHome">Explore HOBBY</Link>
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
              <Link to="/">로그인</Link>
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
                <h1>ESTJ</h1>
                <p>
                  사물과 사람을 관리하는 데 뛰어난 능력을
                  <br />
                  지닌 성격 유형입니다.
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
                <img src={bannerimage} alt="ESTJ Image" />
              </div>
            </div>
            <p className="chart-subtitle">ESTJ의</p>
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
                    stroke="#317287"
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
                  ESTJ는 전통과 질서를 중시하며, 정직과 헌신을 바탕으로 가족과
                  공동체의 화합을 위해 노력합니다. 이들은 명확한 조언과 지도로
                  사람들을 이끌고, 전통적인 가치관을 지키며 화합을 이끄는 일에서
                  자부심을 느낍니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ESTJ 성격 유형을 가진 사람들은 전통과 질서를 매우 중요하게
                여기는 성향을 가지고 있습니다. 이들은 옳고 그름에 대한 확고한
                기준을 가지고 있으며, 가족과 공동체가 조화를 이루도록
                노력합니다. ESTJ는 정직함, 헌신, 그리고 존엄성을 우선시하며,
                어려운 상황에서도 자신이 옳다고 믿는 길을 앞장서서 개척하고자
                합니다. <br />
                <br />
                이들은 명확하고 실질적인 조언을 제공하는 능력이 뛰어나며, 다른
                사람들을 이끌고 올바른 방향으로 나아갈 수 있도록 돕는 역할을
                맡습니다. 또한, 공동체가 한데 모여 화합할 수 있도록 행사나
                활동을 주도하는 데 자부심을 느끼고, 전통적인 가치관을 지키기
                위해 노력하는 모습을 자주 보입니다. <br />
                <br />
                예를 들어, 지역 축제를 준비하거나 가족 간의 전통을 이어가는 일을
                통해 공동체의 발전에 기여하는 것입니다. 이를 통해 ESTJ는 사람들
                사이의 협력과 조화를 이끌어내며, 공동체에 질서와 안정감을
                제공하는 중요한 역할을 합니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                모범을 보이는 지도자
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ESTJ는 법치와 권위를 중시하며, 정직과 성실함으로 모범을 보이는
                  지도자입니다. 이들은 명확한 사실과 원칙에 따라 행동하며, 직접
                  헌신하고 어려운 작업을 처리하는 능력을 지닙니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ESTJ는 매우 중요한 지도력을 가진 성격으로, 이들은 법과 질서를
                중시하며, 권위를 얻기 위해서는 올바른 노력이 필요하다고
                믿습니다. 경영자는 자신의 헌신과 정직함을 바탕으로 모범을 보이는
                지도자입니다. 이들은 나태함이나 부정행위와 같은 비윤리적인
                행동을 절대 용납하지 않습니다. 경영자는 사실을 중요하게
                생각하고, 자신의 지식과 경험에 대해 강한 신념을 가지고 있습니다.{" "}
                <br />
                <br />
                그들은 원칙을 고수하고, 저항이 있더라도 자신의 비전을 실현하려고
                노력합니다. 어려운 프로젝트에서도 주도적으로 행동하고, 계획을
                구체화하며 문제를 해결하는 데 탁월한 능력을 보입니다. 또한,
                이들은 혼자 일하기보다는 팀워크를 중시하며, 다른 사람들에게도
                높은 수준의 업무 윤리와 성실함을 기대합니다. <br />
                <br />
                부정직하거나 무능력한 사람들에 대해 엄격하게 대처하는 경향이
                있으며, 이러한 성향으로 인해 때때로 융통성이 없다는 평가를
                받기도 합니다. 그러나 ESTJ는 자신이 고집이 센 것이 아니라,
                성실함과 정직함이 사회의 필수적인 가치라고 믿는 것입니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                높은 책임감
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ESTJ는 모범 시민으로서 이웃을 돕고 법을 준수하며, 집단에
                  기여하도록 노력합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ESTJ는 전형적인 모범 시민으로, 이웃을 돕고 법을 준수하며 집단과
                조직에 기여하려고 항상 노력하는 성격입니다. 이들은 사회적 질서와
                법을 중요시하며, 자신뿐만 아니라 주변 사람들도 사회에 긍정적인
                영향을 미칠 수 있도록 도우려는 강한 책임감을 느낍니다. 하지만
                경영자는 모든 사람이 자신과 같은 방식으로 기여하거나 같은 길을
                가야 한다고 생각하는 경향이 있어, 이를 이해하는 데 어려움을 겪을
                수 있습니다. <br />
                <br /> 그들이 자신의 강점인 리더십을 발휘하면서도 개별적 차이를
                인정한다면, 더 나은 결과를 가져오고 더 많은 사람에게 영향을 미칠
                수 있을 것입니다.
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

export default ESTJPage;
