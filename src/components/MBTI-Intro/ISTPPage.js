import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MBTI-Intro.css";
import "./MBTI-Intro-styleguide.css";
import "./MBTI-Intro-global.css";

// 이미지 파일 import
import bannerimage from "../../assets/Intro/ISTP.svg";

const ISTPPage = () => {
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
      <div className="ISTPPage Orange screenmbti">
        <nav className="navbar">
          <div className="left-menu">
            <div className="explore-hobby notosanskr-black-black-30px">
            <Link to="/mainHome">Explore HOBBY</Link>
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
                <h1>ISTP</h1>
                <p>
                  ISTP는 대담하면서도 현실적인 성격으로, 모든 종류의
                  <br />
                  도구를 자유자재로 다루는 성격 유형입니다.
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
                <img src={bannerimage} alt="ISTP Image" />
              </div>
            </div>
            <p className="chart-subtitle">ISTP의</p>
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
                  ISTP은 이성과 호기심으로 세상을 탐구하며, 손으로 직접 물건을
                  제작하고 문제를 해결하는 것을 즐깁니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ISTP은 이성적이고 호기심이 많은 성격으로, 세상을 관찰하고 직접
                체험하는 것을 통해 이해하려는 경향이 있습니다. 이들은 자신의
                손으로 무언가를 만드는 능력이 뛰어나며, 종종 기술자나
                엔지니어로서 물리적인 작업을 하거나 문제를 해결하는 역할을
                맡습니다. <br />
                <br />
                ISTP은 물건을 분해하고 조립하며, 이를 통해 문제를 해결하고
                새로운 아이디어를 탐구하는 과정을 즐깁니다. 이들은 실용적이고
                현실적인 성향을 지니고 있어, 구체적인 결과물을 만들어 내는 것에
                큰 성취감을 느낍니다. 또한 이들은 실험적이고, 시행착오를 겪는
                과정을 통해 배워나가는 것을 선호하며, 자신만의 방식으로 문제를
                해결하는 데 능숙합니다. 동시에 자유와 독립을 중시하는 성향
                때문에, 다른 사람들이 자신의 일에 간섭하거나 통제하려 할 때
                불편함을 느낍니다. 하지만 누군가가 그들의 프로젝트나 작업에
                관심을 보이면 기꺼이 그 과정을 공유하고 돕는 등 개방적인 태도를
                보이기도 합니다. <br />
                <br />
                특히 이들은 경험을 통해 지식을 쌓는 것을 중요하게 여깁니다.
                결과적으로 ISTP는 창의성과 문제 해결 능력을 활용해 다양한 도전
                과제를 즐기며, 이를 통해 세상에 자신만의 독창적인 방식으로
                기여합니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                색다름 추구
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ISTP은 겉보기엔 단순해 보일 수 있지만, 사실 매우 복잡하고
                  수수께끼 같은 성격입니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ISTP은 외적으로는 단순해 보이지만, 실제로는 매우 복잡하고
                불가사의한 성격을 지니고 있습니다. 이들은 친절하면서도
                내향적이고, 차분하면서도 즉흥적이며, 호기심이 넘치지만 전통적인
                교육 시스템에서는 집중력을 유지하지 못하는 경향이 있습니다.
                <br />
                <br /> 이로 인해 이들의 친구나 연인조차도 장인을 완전히 이해하지
                못할 때가 많습니다. 이들은 매우 충실하고 꾸준한 사람으로
                보이지만, 때로는 갑자기 넘치는 에너지를 발산하며 새로운 관심사에
                빠지기도 합니다. 또한 이들은 결정을 내리기 전에 여러 가능성을
                탐색하는 성향을 지니고 있으며, 명확한 비전을 추구하기보다는
                실용적이고 현실적인 판단을 중시합니다. ISTP는 ‘남을 대접받고
                싶은 대로 대접한다’는 공정성을 중요시하며, 남에게 피해를 주지
                않기보다는 상대방이 자신에게 피해를 줄 때는 앙갚음을 하는 태도를
                보이기도 합니다.
                <br />
                <br />
                ISTP의 단점 중 하나는 성급하게 행동할 가능성이 크다는 것입니다.
                이들은 종종 상대방도 자신처럼 관대할 것이라고 착각하고, 상처를
                줄 수 있는 농담을 하거나, 남의 일에 지나치게 관여하거나, 더
                흥미로운 계획이 생기면 기존 계획을 갑자기 변경하는 등의 행동을
                할 수 있습니다. 이러한 성향은 때로 주변 사람들에게 오해를
                불러일으킬 수 있습니다. 이들은 자유롭고 탐구적인 성격이지만,
                이러한 자유로운 태도가 주변 사람들에게 미칠 영향을 고려하지
                않으면 때로는 예기치 않은 문제를 초래할 수 있습니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                규칙에 얽매이지 않는 성격
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ISTP은 종종 다른 사람의 반응을 예상하는 데 어려움을 겪으며,
                  감정보다 행동을 중시하는 성향이 갈등을 초래할 수 있습니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ISTP은 자신의 자유로운 성향과 주변 환경을 탐구하는 것을
                즐기지만, 다른 사람들은 종종 선을 넘는 농담이나 규칙을 무시하는
                행동을 불쾌하게 받아들일 수 있습니다. 특히 감정적으로 격양된
                상황에서는, 장인이 무심코 한 말이나 행동이 극심한 갈등을
                불러일으킬 수 있다는 점에 주의해야 합니다. <br />
                <br />
                ISTP는 자신의 감정이나 의도를 기준으로 말과 행동의 적절성을
                판단하는 성향이 강하지만, 다른 사람들은 자신과 다른 감정적
                경계를 지닌 경우가 많습니다. 이들은 인간관계에서 공감 능력보다는
                실질적인 행동을 중시하기 때문에, 상대방의 정서적 요구나 규칙을
                지키는 데 어려움을 겪을 수 있습니다. 이는 예측할 수 없는
                행동으로 이어질 수 있고, 때로는 인간관계에서 긴장감을 조성할
                가능성이 큽니다.
                <br />
                <br />
                이러한 상황에서 ISTP는 상대방의 반응을 이해하고 선을 넘지 않도록
                신경 써야 할 필요가 있습니다. 하지만 이들이 자신의 창의성과 유머
                감각, 그리고 문제 해결 능력을 존중하는 환경을 찾는다면, 장인은
                주변 사람들에게 긍정적인 영향을 미치고 존경을 받을 수 있을
                것입니다. 이러한 환경에서는 그들이 자신의 독특한 재능을 발휘하며
                즐겁게 일하고 다른 사람들과의 관계에서도 성공적인 상호작용을 할
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

export default ISTPPage;
