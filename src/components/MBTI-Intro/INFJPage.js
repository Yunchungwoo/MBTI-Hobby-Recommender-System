import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MBTI-Intro.css";
import "./MBTI-Intro-styleguide.css";
import "./MBTI-Intro-global.css";

// 이미지 파일 import
import bannerimage from "../../assets/Intro/INFJ.svg";

const INFJPage = () => {
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
      <div className="INFJPage Green screenmbti">
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
                <h1>INFJ</h1>
                <p>
                  차분하고 신비한 분위기를 풍기는 성격으로, 다른사람에게 <br />
                  의욕을 불어넣는 성격 유형입니다.
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
                <img src={bannerimage} alt="INFJ Image" />
              </div>
            </div>
            <p className="chart-subtitle">INFJ의</p>
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
                    stroke="#0F4A42"
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
                    stroke="#0F4A42"
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
                    stroke="#0F4A42"
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
                    stroke="#0F4A42"
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
                  INFJ는 이상주의와 원칙을 중시합니다. 이들은 자아 실현과
                  세상에서 선을 실천하는 것을 성공으로 여기며, 변화를 추구하는
                  성격입니다. 몽상가가 아닌 실천가로, 자신의 가치관에 따라
                  양심적으로 살아가며, 사회의 기준보다 자신의 직관과 지혜를 통해
                  중요한 가치를 찾는 데 집중합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                INFJ는 이상주의적이면서도 원칙을 지키는 성격으로, 단순히 현실에
                순응하기보다는 변화를 추구하는 경향이 있습니다. 이들에게 성공은
                돈이나 명예가 아니라, 자신이 추구하는 가치에 따라 자아를
                실현하고 타인을 도우며, 세상에서 선한 일을 하는 것입니다. 이들이
                원대한 목표와 야망을 가지고 있긴 하지만, 그 성향은 단순한
                몽상가와는 다릅니다. <br />
                <br />
                이들은 원칙과 완벽함을 중요하게 생각하며, 자신이 옳다고 믿는
                일을 끝까지 해내기 위해 헌신합니다. 또한 양심적이고 확고한
                가치관에 따라 삶을 살아가며, 사회적 기대보다는 자신의 직관과
                지혜를 통해 진정으로 중요한 가치를 찾으려고 노력합니다.
                <br />
                <br /> INFJ는 깊은 원칙과 이상을 가지고 삶을 살아가며, 그
                과정에서 세상에 긍정적인 변화를 만들기 위해 끊임없이 노력하는
                성격입니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                목적 중시
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  INFJ는 내면의 깊이 집중하며 인생의 목표를 찾으려는 강한 욕구를
                  지니고 있습니다. 그로인해 이들은 주변과 다르게 느낄 때가
                  있지만, 깊은 관계를 맺는 데 능합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                INFJ는 매우 희귀한 성격 유형으로, 종종 다른 사람들과는 다른
                분위기를 풍깁니다. 이들은 자신의 내면에 깊이 집중하며 인생의
                목적을 찾으려는 강한 열망을 가지고 있어 때로는 주변 사람들과
                소외감을 느끼기도 합니다. <br />
                <br />
                하지만 이들이 타인과 깊은 관계를 맺지 못한다는 뜻은 아닙니다.
                다만 자신이 세상에서 이해받지 못한다고 느끼거나, 자신의 의견과
                세상의 의견이 다를 때 어려움을 겪을 수 있습니다. 이들은 불평등을
                싫어하며, 자신의 이익보다 타인을 돕는 일에 더욱 집중하는 경향이
                있습니다.
                <br />
                <br /> 이들은 자신의 창의력, 상상력, 세심함 같은 강점을 사람들을
                돕는 데 사용하는 사명감을 느끼며, 이러한 활동에서 큰 만족감을
                얻습니다. 특히 사회적 불평등을 해소하고 정의를 추구하는 일에
                열정을 쏟습니다. 그러나 INFJ는 이상을 추구하는 과정에서 자신을
                돌보지 못해 스트레스나 번아웃을 경험할 때가 있습니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                타인과 소통 추구
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  INFJ는 내향적이지만 진실하고 깊이 있는 관계를 맺고자 하며,
                  의미 있는 대화를 통해 행복을 느낍니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                INFJ는 내향적인 성향을 가지고 있으며, 다른 사람과 진심으로 깊이
                있는 관계를 맺고 싶어 합니다. 이들에게 중요한 것은 단순한
                일상적인 대화가 아니라 의미 있는 주제로 서로를 진솔하게 알아가는
                것입니다. 진지한 대화를 통해 관계를 쌓는 일에서 큰 행복감을
                느끼며, 따뜻하고 세심하게 소통하려고 노력합니다. 이러한 소통
                방식은 주변 사람들에게 깊은 인상을 남기곤 합니다. <br />
                <br />
                이들은 소수의 친밀한 관계를 소중히 여기며, 그 관계에서 진정한
                만족감을 찾습니다. 이들은 상대방의 감정과 상황을 이해하려는 사려
                깊고 공감 능력이 뛰어난 성격을 가지고 있어, 인간관계에 많은
                에너지를 쏟습니다. 그러나 이러한 노력에도 불구하고, 모든 사람이
                그들의 선의와 진심을 알아차리는 것은 아니기 때문에 때로는 좌절을
                겪기도 합니다.
                <br />
                <br /> 또한, 비판을 받을 때 그것을 지나치게 개인적인 문제로
                받아들여 마음의 상처를 받을 수 있습니다. 이들의 섬세함과
                진정성은 강점이지만, 때로는 그로 인해 감정적으로 소진되거나
                상처받기 쉬운 면이 있다는 점을 기억하는 것이 중요합니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                개인적 사명감
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  INFJ는 자신의 삶에 특별한 사명이 있다고 믿으며, 이를 성취하는
                  데 열정을 다합니다. 불평등에 맞서 직관과 열정으로 해결책을
                  찾으려 하며, 이성과 열정을 균형 있게 활용합니다. 그러나 타인을
                  돌보는 것만큼 자신을 돌보는 것도 중요하다는 점을 기억해야
                  합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                INFJ는 자신의 삶에 특별한 목적이나 사명이 있다고 믿고, 이를
                발견하고 실현하는 일에서 큰 보람을 느낍니다. 이러한 사명을
                찾으면, 이들은 열정을 다해 그 목표를 성취하려고 합니다. 이들은
                세상의 불평등이나 부정의한 상황에 직면했을 때, 현실에
                안주하기보다는 자신의 직관과 열정을 바탕으로 해결책을 찾아
                나섭니다. <br />
                <br />
                INFJ는 이성과 감정의 균형을 잘 맞추는 능력을 가지고 있으며, 사회
                문제를 해결하고 더 나은 세상을 만들기 위해 힘쓰는 성격입니다.
                그러나 다른 사람을 돌보고 세상을 변화시키려는 노력이 중요하지만,
                때때로 자신의 필요를 챙기는 시간도 갖는 것이 중요하다는 사실을
                잊지 말아야 합니다. 그렇지 않으면 감정적으로 지치거나 번아웃에
                빠질 수 있기 때문입니다.
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

export default INFJPage;
