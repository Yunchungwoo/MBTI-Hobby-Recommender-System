import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MBTI-Intro.css";
import "./MBTI-Intro-styleguide.css";
import "./MBTI-Intro-global.css";

// 이미지 파일 import
import bannerimage from "../../assets/Intro/ENFJ.svg";

const ENFJPage = () => {
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
      <div className="ENFJPage Green screenmbti">
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
                <h1>ENFJ</h1>
                <p>
                  청중을 사로잡고 의욕을 불어넣는 카리스마 넘치는
                  <br />
                  성격 유형입니다.
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
                <img src={bannerimage} alt="ENFJ Image" />
              </div>
            </div>
            <p className="chart-subtitle">ENFJ의</p>
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
                  ENFJ는 삶에서 자신의 사명을 위해 노력하며, 다른 사람과 세상에
                  긍정적인 영향을 주기 위해 최선을 다합니다. 또한 사려 깊고
                  이상주의적 성향을 지녔습니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ENFJ 성격 유형의 사람들은 삶에서 더 큰 목적이나 사명을 위해
                헌신하고자 하는 강한 욕구를 느끼며, 다른 사람들과 세상에
                긍정적인 영향을 미치려고 노력합니다. 이들은 사려 깊고
                이상주의적인 성향을 가지고 있으며, 올바른 일을 하는 기회를
                기꺼이 받아들입니다. <br /> <br />
                ENFJ는 타고난 리더로, 정치인, 코치, 교사 등의 역할에서
                두드러지게 활약합니다. 이들의 열정과 카리스마는 직업뿐만 아니라
                인간관계에서도 강력하게 작용하여 주변 사람들에게 긍정적인 영향을
                줍니다. 특히, 친구나 사랑하는 사람이 발전할 수 있도록 돕는 데서
                큰 기쁨과 만족감을 얻습니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                정의로운 지도자
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ENFJ는 진실함과 이타주의를 바탕으로 자신의 가치관을 적극적으로
                  설파하며, 부당한 일에 대해 반대의 목소리를 냅니다. 하지만
                  성급하게 강요하기보다는 세심함과 통찰력을 활용해 다른 사람의
                  공감을 이끌어내는 방식을 선호합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ENFJ는 진실함과 이타주의를 바탕으로 자신의 가치관을 지지하고
                표현하며, 부당한 일에 대해서는 반대합니다. 이들은 다른 사람에게
                자신의 생각을 성급하게 강요하기보다는, 세심함과 통찰력을 발휘해
                상대방의 공감을 이끌어내는 방식을 선호합니다. <br /> <br />
                이들은 다른 사람의 의도와 감정을 빠르게 파악하는 뛰어난 능력이
                있으며, 이를 바탕으로 설득하거나 다른 사람에게 의욕을 불어넣는
                데 탁월합니다. 다른 사람의 생각을 바꾸는 일은 쉽지 않지만,
                그들의 진실한 의도와 선한 마음을 통해 상대방에게 영향을 미칠 수
                있습니다. <br /> <br />
                또한, ENFJ는 상대방과 생각이 다를 때에도 공통점을 찾으려고
                노력하며, 상대방에게 자신의 가치관을 세심하고 진정성 있게 전달해
                감동을 줍니다. 이들은 권력이나 조종을 목적으로 행동하지 않고,
                올바른 일을 하고자 하는 진심에서 출발하여 다른 사람을
                변화시키고자 합니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                이타주의적 성향
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ENFJ는 진솔하고 배려심이 많아, 다른 사람의 문제를 해결하고 더
                  나은 삶을 살도록 돕는 데 헌신하며 큰 행복을 느낍니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ENFJ는 자신이 아끼는 사람의 문제를 해결하기 위해 헌신적입니다.
                이들은 다른 사람을 돕고 조언하는 것을 통해 감사함을 받고, 주변
                사람들이 더 나은 삶을 살 수 있도록 돕는 데에서 큰 보람을
                느낍니다. 이들은 진솔하고 배려심이 넘치는 성격으로, 타인이 옳은
                방향으로 나아가도록 도와주는 데에서 큰 행복을 느낍니다. <br />
                <br />
                그러나 이러한 도움이 항상 긍정적인 결과로 이어지지는 않습니다.
                모든 사람들이 변화할 준비가 되어 있는 것은 아니며, 변화를
                강요하면 상대방이 불만을 느낄 수 있습니다. 또한 뛰어난 통찰력을
                가졌지만 때로는 상황을 오해하거나 잘못된 조언을 할 때도
                있습니다. ENFJ는 사람을 돕는 일에 열정적이지만, 타인의 준비
                상태나 상황을 고려하는 것이 중요합니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                타인을 이끄는 선도자
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ENFJ는 강한 신념과 리더십으로 다른 사람을 이끌며, 모범을 통해
                  영향을 미칩니다. 이들은 열정과 헌신으로 타인을 돕고, 더 나은
                  세상을 만들기 위해 일상에서 기회를 찾습니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ENFJ는 헌신적이며 이타적인 성향을 가지고 있어, 다른 사람을 돕기
                위해 어려움도 마다하지 않습니다. 그들의 강력한 신념은 타고난
                리더십 능력과 결합되어 큰 영향력을 발휘하게 합니다. 이들의 가장
                뛰어난 능력 중 하나는 모범을 보이면서 다른 사람을 이끌 수 있는
                능력입니다. <br />
                <br />
                이들은 매일 열정과 헌신, 배려의 마음을 바탕으로 주변 사람들을
                돕고, 더 나은 세상을 만들기 위한 기회를 찾습니다. 어려움을 겪는
                사람에게 조언을 제공하는 등 작은 실천을 통해 세상을 긍정적으로
                변화시키려는 성향이 돋보입니다. 결론적으로, ENFJ는 타인과
                공동체를 위한 헌신적인 리더로서, 스스로의 행동을 통해 더 나은
                세상을 만들어 나가는 데 힘쓰는 유형입니다.
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

export default ENFJPage;
export const ENFJTitle1 = "정의로운 지도자"
export const ENFJTitle2 = "이타주의적 성향"
export const ENFJIntro1 = "ENFJ는 삶에서 자신의 사명을 위해 노력하며, 다른 사람과 세상에 긍정적인 영향을 주기 위해 최선을 다합니다. 또한 사려 깊고 이상주의적 성향을 지녔습니다."
export const ENFJSubText1 = "ENFJ 성격 유형의 사람들은 삶에서 더 큰 목적이나 사명을 위해 헌신하고자 하는 강한 욕구를 느끼며, 다른 사람들과 세상에 긍정적인 영향을 미치려고 노력합니다. 이들은 사려 깊고 이상주의적인 성향을 가지고 있으며, 올바른 일을 하는 기회를 기꺼이 받아들입니다. ENFJ는 타고난 리더로, 정치인, 코치, 교사 등의 역할에서 두드러지게 활약합니다. 이들의 열정과 카리스마는 직업뿐만 아니라 인간관계에서도 강력하게 작용하여 주변 사람들에게 긍정적인 영향을 줍니다. 특히, 친구나 사랑하는 사람이 발전할 수 있도록 돕는 데서 큰 기쁨과 만족감을 얻습니다."
export const ENFJIntro2 = "ENFJ는 진실함과 이타주의를 바탕으로 자신의 가치관을 적극적으로 설파하며, 부당한 일에 대해 반대의 목소리를 냅니다. 하지만 성급하게 강요하기보다는 세심함과 통찰력을 활용해 다른 사람의 공감을 이끌어내는 방식을 선호합니다."
export const ENFJSubText2 = "ENFJ는 진실함과 이타주의를 바탕으로 자신의 가치관을 지지하고 표현하며, 부당한 일에 대해서는 반대합니다. 이들은 다른 사람에게 자신의 생각을 성급하게 강요하기보다는, 세심함과 통찰력을 발휘해 상대방의 공감을 이끌어내는 방식을 선호합니다. 이들은 다른 사람의 의도와 감정을 빠르게 파악하는 뛰어난 능력이 있으며, 이를 바탕으로 설득하거나 다른 사람에게 의욕을 불어넣는 데 탁월합니다. 다른 사람의 생각을 바꾸는 일은 쉽지 않지만, 그들의 진실한 의도와 선한 마음을 통해 상대방에게 영향을 미칠 수 있습니다. 또한, ENFJ는 상대방과 생각이 다를 때에도 공통점을 찾으려고 노력하며, 상대방에게 자신의 가치관을 세심하고 진정성 있게 전달해 감동을 줍니다. 이들은 권력이나 조종을 목적으로 행동하지 않고, 올바른 일을 하고자 하는 진심에서 출발하여 다른 사람을 변화시키고자 합니다."
export const ENFJIntro3 = "ENFJ는 진솔하고 배려심이 많아, 다른 사람의 문제를 해결하고 더 나은 삶을 살도록 돕는 데 헌신하며 큰 행복을 느낍니다."
export const ENFJSubText3 = "ENFJ는 자신이 아끼는 사람의 문제를 해결하기 위해 헌신적입니다. 이들은 다른 사람을 돕고 조언하는 것을 통해 감사함을 받고, 주변 사람들이 더 나은 삶을 살 수 있도록 돕는 데에서 큰 보람을 느낍니다. 이들은 진솔하고 배려심이 넘치는 성격으로, 타인이 옳은 방향으로 나아가도록 도와주는 데에서 큰 행복을 느낍니다. 그러나 이러한 도움이 항상 긍정적인 결과로 이어지지는 않습니다. 모든 사람들이 변화할 준비가 되어 있는 것은 아니며, 변화를 강요하면 상대방이 불만을 느낄 수 있습니다. 또한 뛰어난 통찰력을 가졌지만 때로는 상황을 오해하거나 잘못된 조언을 할 때도 있습니다. ENFJ는 사람을 돕는 일에 열정적이지만, 타인의 준비 상태나 상황을 고려하는 것이 중요합니다."
export const ENFJrecommendhobby = "ENFJ 성격 유형에게 어울리는 취미로는 사람들과의 상호작용을 중요시하는 활동과 창의력을 자극하는 활동들이 있습니다. ENFJ는 본래 타인에게 도움을 주고 협력하는 것을 즐기며, 그 과정에서 보람을 느끼는 성격이기 때문에 자원봉사 활동이 이들에게 매우 적합한 취미로 꼽힙니다. 자원봉사는 ENFJ가 주변 사람들에게 긍정적인 영향을 끼치고, 자신이 속한 사회에 기여하는 기회를 제공합니다. 또한, ENFJ는 사람들과 의견을 교환하고 서로의 생각을 나누는 것을 좋아하는 성향이 강하므로 독서 클럽이나 토론 모임과 같은 활동도 적합합니다. 이들은 사람들과 깊은 대화를 나누고 서로의 아이디어를 공유하는 과정을 통해 많은 만족감을 얻습니다. 감정 표현에 능숙한 ENFJ는 연극이나 연기와 같은 예술적 활동에서도 자신을 잘 표현할 수 있습니다. 감정적인 연결과 공감 능력이 뛰어나기 때문에 연기를 통해 다양한 역할을 수행하면서도 깊은 만족을 느낄 수 있습니다. 이러한 공연 예술 활동은 이들의 창의성을 자극하는 동시에 감정을 풀어낼 수 있는 좋은 방법입니다. 바쁜 일상 속에서 마음의 평정을 찾고 스트레스를 완화하기 위해 요가나 명상과 같은 활동도 ENFJ에게 유익할 수 있습니다. 이들은 내면의 평화와 균형을 유지하는 것을 중요시하기 때문에, 이러한 활동을 통해 정서적인 안정감을 얻을 수 있습니다. 리더십이 뛰어난 ENFJ는 팀을 이끌고, 그룹에서 리더로서의 역할을 수행하는 데도 적합합니다. 동아리나 프로젝트에서 리더로 활동하며 타인과 협력하는 것은 이들에게 큰 성취감을 가져다줄 것입니다. 더불어, 이들은 글쓰기를 통해 자신이 경험한 감정과 생각을 다른 사람들과 공유하는 것도 즐길 수 있습니다."