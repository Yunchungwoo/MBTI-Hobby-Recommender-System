import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MBTI-Intro.css";
import "./MBTI-Intro-styleguide.css";
import "./MBTI-Intro-global.css";

// 이미지 파일 import
import bannerimage from "../../assets/Intro/ENTJ.svg";

const ENTJPage = () => {
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
      <div className="ENTJPage Purple screenmbti">
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
                <h1>ENTJ</h1>
                <p>
                  ENTJ는 항상 문제 해결 방법을 찾아내는 성격으로,
                  <br />
                  대담하고 상상력이 풍부한 성격 유형입니다.
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
                <img src={bannerimage} alt="ENTJ Image" />
              </div>
            </div>
            <p className="chart-subtitle">ENTJ의</p>
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
                  ENTJ는 타고난 리더로, 카리스마와 자신감을 바탕으로 사람들을
                  목표 달성을 위해 이끕니다. 냉철한 이성과 열정, 결단력, 지적
                  능력을 활용해 자신이 원하는 것을 성취하며, 비즈니스와 단체에서
                  강한 존재감으로 리더 역할을 자주 맡습니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                타고난 리더들은 강한 카리스마와 자신감을 바탕으로 사람들을
                이끄는 능력을 갖추고 있습니다. 이들은 단순히 권력을 행사하는
                것에 그치지 않고, 사람들을 공통된 목표로 이끌어 함께 노력하게
                만듭니다. 이러한 성향은 그들의 냉철한 이성과 결합되어, 문제
                해결이나 목표 달성을 위해 열정과 결단력, 그리고 뛰어난 지적
                능력을 활용합니다. <br />
                <br />
                이들은 종종 비즈니스나 단체를 이끄는 중요한 역할을 맡게 되는데,
                그 이유는 그들의 존재감이 매우 강렬하며 다른 성격 유형보다 더
                많은 영향력을 발휘하기 때문입니다. 이 때문에 그들이 있는
                곳에서는 대부분의 사람들을 압도하는 리더십을 보입니다. 이러한
                특성 덕분에 이들은 조직 내에서 중요한 결정을 내리고, 그룹이
                나아가야 할 방향을 설정하는 데 탁월한 역할을 합니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                목표 달성을 위한 노력
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ENTJ는 도전을 즐기며 충분한 자원과 시간이 주어지면 어떤 목표도
                  달성할 수 있다고 믿습니다. 전략적 사고와 결단력으로 비즈니스
                  리더로서 성공할 가능성이 높고, 강한 의지로 어려운 상황에서도
                  목표를 포기하지 않습니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ENTJ는 도전적인 상황에서 큰 성과를 내는 성격 유형으로, 충분한
                시간과 자원이 주어진다면 어떤 목표든 달성할 수 있다고 믿습니다.
                그들의 강력한 의지와 전략적 사고 능력은 복잡한 문제 해결에
                탁월하며, 이를 통해 비즈니스에서 성공적인 리더가 될 가능성이
                높습니다.
                <br />
                <br /> 특히 장기적 목표를 설정하고 이를 달성하기 위해 결단력
                있게 계획을 실행하는 능력은 비즈니스 리더로서의 자질을 돋보이게
                만듭니다. 이들은 외향적 성향(E)을 바탕으로 다른 사람들과의
                협력을 이끌어내는 데 능숙하며, 포기하지 않는 성격 덕분에 어려운
                상황에서도 끝까지 목표를 추구합니다. 또한, 협상이나 논쟁에서
                우위를 점하고, 상대방을 논리적으로 압도하는 데 자신이 있습니다.
                그러나 이들이 냉정하거나 악한 의도를 가진 것은 아니며, 단순히
                지적 대결과 도전을 즐기기 때문에 재치 있게 논쟁을 이끄는 것을
                좋아할 뿐입니다. ENTJ는 효율성을 중시하며, 목표 달성 과정에서
                감정에 큰 비중을 두지 않습니다. 그들은 일을 명확하고 정확하게
                처리하는 사람을 존경하며, 자신의 팀에서 능력 있는 인재를
                파악하는 능력을 가지고 있습니다. <br />
                <br />
                이런 능력은 그들이 조직을 성공적으로 이끌고 팀의 성과를
                극대화하는 데 중요한 역할을 합니다. 다만, 다른 사람의 실패를
                노골적으로 지적하는 성향으로 인해 갈등이 발생할 수 있어, 이
                부분에서 주의가 필요합니다. 결론적으로, ENTJ는 강한 리더십과
                결단력으로 목표를 이루고자 하는 성향을 지닌 사람으로, 비즈니스나
                조직에서 중요한 역할을 수행할 가능성이 큽니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
              감정 표현의 필요성
              </div>
              <div className="info-content-box">
              <p className="info-content-text notosanskr-medium-bold-20px">
                  ENTJ는 감정을 드러내는 것을 약점으로 여겨 무관심한 인상을
                  주지만, 이는 친밀한 관계 형성에 방해가 됩니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                모든 분석가형 성격, 특히 ENTJ는 자신의 감정을 표현하는 데
                익숙하지 않습니다. 이들은 종종 감정을 드러내는 것을 약점으로
                생각하며, 이는 특히 직장 내에서 두드러집니다. 이들은 효율성에
                매우 중점을 두기 때문에, 비효율적이거나 무능력한 사람에 대해
                거침없이 비판적인 태도를 보일 수 있습니다. 이는 감정적으로
                무관심한 사람이라는 인상을 줄 수 있으며, 다른 사람과의 관계
                형성에 어려움을 초래할 수 있습니다. 하지만 이들이 자신의 감정적
                표현을 억누르는 것은 장기적으로 친밀한 관계를 형성하는 데 방해가
                될 수 있습니다. <br />
                <br />
                직장에서 목표를 달성하는 것만큼 팀원의 기여와 피드백을 인정하는
                것도 중요하다는 사실을 깨닫는 것이 필요합니다. 이러한 인정을
                통해 팀원들이 더 나은 성과를 내고, 그들 자신도 리더로서의 위치를
                더욱 강화할 수 있습니다. ENTJ는 대개 에너지와 자신감이 넘치며,
                다른 사람에게도 큰 영감을 주는 인물로 비춰집니다. 그러나 자신의
                성공이 주변 사람들의 도움 덕분이라는 사실을 잊지 말아야 하며,
                다른 사람의 감정과 욕구에 주의를 기울이는 것이 중요합니다.{" "}
                <br />
                <br />
                처음에는 다른 사람의 감정을 고려하는 것이 불편하게 느껴질 수
                있지만, 공감 능력을 키우기 위한 노력이 중요합니다. 공감이
                강화되면, 이들은 강력한 리더십을 유지하면서도 의미 있는
                인간관계를 구축하고 더 큰 성공을 달성할 수 있습니다. 궁극적으로,
                감정적 인식을 높이면 더욱 균형 잡힌 리더가 되어 팀과 함께 더 큰
                목표를 달성할 수 있을 것입니다.
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

export default ENTJPage;
