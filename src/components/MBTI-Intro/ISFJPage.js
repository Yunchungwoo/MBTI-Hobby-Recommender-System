import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MBTI-Intro.css";
import "./MBTI-Intro-styleguide.css";
import "./MBTI-Intro-global.css";

// 이미지 파일 import
import bannerimage from "../../assets/Intro/ISFJ.svg";

const ISFJPage = () => {
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
      <div className="ISFJPage Blue screenmbti">
        <nav className="navbar">
          <div className="left-menu">
            <div className="explore-hobby notosanskr-black-black-30px">
              <Link to="/mainHome">Explore HOBBY</Link>
            </div>
            <button className="nav-btn">
              <Link to="/Test/step1">MBTI 검사</Link>
            </button>
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
                <h1>ISFJ</h1>
                <p>
                  주변 사람을 보호할 준비가 되어 있는
                  <br />
                  헌신적이고 따뜻한 성격 유형입니다.
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
                <img src={bannerimage} alt="ISFJ Image" />
              </div>
            </div>
            <p className="chart-subtitle">ISFJ의</p>
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
                  ISFJ는 근면하고 헌신적인 성격으로, 주변 사람들에게 깊은
                  책임감을 느끼며 묵묵히 도움을 제공합니다. 감사를 요구하지 않고
                  겸손하게 행동하며, 세심하고 배려심 넘치는 동시에 분석력과 대인
                  관계 능력도 뛰어납니다. 이타적인 성향으로 다른 사람의 친절에
                  더 큰 친절로 보답하며, 일상 속에서 다양한 장점을 발휘합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ISFJ는 겸손하면서도 헌신적으로 주변을 돌보는 성격입니다. 이들은
                매우 근면하며, 사람들에게 큰 책임감을 느끼고 기한을 철저히
                지키는 성향을 가지고 있습니다. 특히 동료나 친구의 기념일을
                기억하고 세심한 배려를 잊지 않는다는 점에서 신뢰받는 성격입니다.
                그럼에도 불구하고 자신이 헌신한 일에 대한 보상을 기대하지 않고,
                뒤에서 묵묵히 책임을 다하는 태도를 보입니다.
                <br />
                <br />
                분석 능력이 뛰어나며, 세부 사항에 주의를 기울입니다. 이들은
                차분하면서도 사람들과의 관계를 잘 형성하는 능력이 있으며, 이러한
                특징이 일상 속에서 그들의 역할을 더욱 빛나게 만듭니다. 또한
                이타주의적 성향이 강해, 누군가에게 받은 친절을 더 큰 친절로
                돌려주며 겸손하고 열정적인 자세로 임무와 인간관계를 대합니다.
                ISFJ는 이타적인 성향을 바탕으로 다른 사람을 돕고 공동체를
                지탱하는 중요한 역할을 합니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                충실한 성격
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ISFJ는 친구나 연인, 가족을 위해 최선을 다하며, 타인을 도울 때
                  보람을 느낍니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ISFJ는 친구나 연인과의 관계에서 매우 충실한 성격을 가지고
                있습니다. 이들은 가까운 사람들과 친밀한 관계를 유지하기 위해
                많은 에너지를 쏟으며, 사랑하는 이들이 어려움을 겪을 때는
                주저하지 않고 도움의 손길을 내밉니다. 다른 사람을 돕는 일이
                이들에게 큰 보람과 에너지를 제공합니다. 또한 이들은 자신의
                가족뿐만 아니라 회사나 집단에도 충성스럽게 임하며, 전통을
                존중하고 가족의 가치관을 소중히 여깁니다.
                <br />
                <br /> 하지만 이러한 배려심과 충성심이 지나치게 발휘될 때, 다른
                사람들이 이를 악용할 가능성도 있습니다. 이로 인해 이들은
                스트레스와 번아웃을 겪기도 하며, 변화를 받아들이는 데 어려움을
                느낄 수 있습니다. 특히 자신이 익숙한 방식에서 벗어나거나 관계를
                끝내야 할 때는 죄책감을 느끼거나 스트레스를 받는 경향이
                있습니다. 때문에 ISFJ는 관계와 책임감에 매우 충실한 성격이지만,
                자신의 한계를 인지하고 스스로를 돌보는 것도 중요합니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                높은 기대치
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ISFJ는 완벽주의적 성향을 지니고 있어 책임을 매우 진지하게
                  받아들이며, 항상 다른 사람의 기대를 뛰어넘으려 최선을
                  다합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ISFJ는 완벽주의적 성향을 가지고 있어, "이 정도면 충분해"라는
                말은 그들에게 쉽게 통하지 않습니다. 이들은 자신의 책임을 매우
                진지하게 받아들이며, 맡은 일에서 다른 사람의 기대를 훨씬
                넘어서기 위해 최선을 다합니다. 이들은 매우 겸손하며, 자신의
                성과에 대해 자만하거나 다른 사람의 인정을 요구하는 경우는 거의
                없습니다. <br />
                <br />
                그러나 그렇다고 해서 다른 사람들이 자신의 노력을 알아보지 못하는
                것을 신경 쓰지 않는 것은 아닙니다. 자신이 열심히 한 만큼 인정을
                받지 못하거나 노력을 당연하게 여겨지는 상황에서 좌절감이나
                분노를 느낄 수 있습니다. 이에 따라, 자신의 노력이 정당하게
                인정받지 못하면 활력을 잃거나, 심지어는 분노를 느끼기도 합니다.
                <br />
                <br /> 따라서 이들은 자신의 기여를 적절히 인정받는 방법을 배우는
                것이 중요하며, 이로 인해 자신의 열정과 활력을 지속적으로 유지할
                수 있을 것입니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                다른 사람과의 소통 추구
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ISFJ는 내향적이지만 소통을 중요시하며, 세심한 기억력으로
                  인간관계를 잘 유지합니다. 이들은 다른 사람을 돕는 데서
                  만족감을 느끼며, 사려 깊고 세심한 성격으로 주변 사람의 행복을
                  챙깁니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ISFJ는 내향적 성향을 지니면서도 사람들과의 관계를 중시하는
                성격입니다. 이들은 다른 사람에 대해 세세한 것들을 잘 기억하는
                능력이 있어, 친구나 연인의 선호를 잘 파악하고 적절한 선물을
                선택할 수 있는 능력을 가지고 있습니다. <br />
                <br />
                또한, 이들은 다른 사람의 행복과 안전을 우선시하며, 그들이 안정된
                삶을 살 수 있도록 돕는 데서 만족감을 얻습니다. 이들은 배려심
                많고 세심한 성격으로, 다른 사람의 필요를 채워주는 것을 통해 깊은
                보람을 느낍니다.
                <br />
                <br />
                그러나 남을 돌보는 데 너무 집중한 나머지 자신을 챙기지 못할 때가
                많습니다. 자신의 필요도 돌본다면 더욱더 넘치는 에너지와 활력으로
                이타적인 행동을 이어나갈 수 있을 것입니다.
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

export default ISFJPage;
