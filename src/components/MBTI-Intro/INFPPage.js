import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MBTI-Intro.css";
import "./MBTI-Intro-styleguide.css";
import "./MBTI-Intro-global.css";

// 이미지 파일 import
import bannerimage from "../../assets/Intro/INFP.svg";

const INFPPage = () => {
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
      <div className="INFPPage Green screenmbti">
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
                <h1>INFP</h1>
                <p>
                  INFP는 항상 선을 행할 준비가 되어 있는 부드럽고
                  <br />
                  이타주의적인 성격 유형입니다.
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
                <img src={bannerimage} alt="INFP Image" />
              </div>
            </div>
            <p className="chart-subtitle">INFP의</p>
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
                  INFP는 언뜻 보기에는 조용해 보이지만, 사실 이들은 내면에
                  열정과 창의성을 지니고 있으며, 상상력이 뛰어나 몽상을 즐기고
                  예술, 자연에 대한 감수성이 뛰어납니다. 또한 이들은 뛰어난
                  감수성으로 다른 사람의 감정을 빠르게 알아차립니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                INFP는 외형상 조용하고 내성적이지만, 실제로는 마음속에서 강한
                열정과 에너지를 지닌 성격 유형입니다. 이들은 감수성이 풍부하고
                창의적이며, 자신만의 상상 세계를 자주 탐구합니다. 예술, 음악,
                자연에 대한 깊은 감수성을 지니고 있으며, 이를 통해 자신의 내면의
                감정과 생각을 표현합니다. <br />
                <br />
                또한 몽상가적 기질을 지니고 있어 머릿속에서 많은 이야기를
                만들어내고, 종종 이상적인 세상에 대한 비전을 그리곤 합니다.
                이들은 다른 사람의 감정을 매우 빠르게 알아차리는 능력을 지니고
                있으며, 다른 사람에게 공감하는 데 매우 능숙합니다. 타인의 감정과
                필요에 깊이 공감하며, 의미 있는 관계를 추구하고 다른 사람을 돕는
                데서 큰 만족감을 얻습니다. 이들은 자신의 이상을 실현하기 위해
                헌신하고, 더 나은 세상을 만들기 위한 강한 사명감을 느낍니다.
                그러나 INFP는 전체 인구 중 소수에 속하는 성격 유형으로, 때로는
                세상에서 자신이 소외되거나 충분히 인정받지 못한다는 느낌을 받을
                수 있습니다. <br />
                <br />
                이들은 자신의 독특한 성향과 강점을 이해받지 못할 때 외로움을
                느끼기도 하며, 이상적인 세상을 꿈꾸지만 현실과의 괴리에서 갈등을
                느낄 때도 있습니다. INFP는 그럼에도 불구하고 자신만의 가치를
                지키며, 내면의 열정과 이상을 바탕으로 세상을 긍정적으로
                변화시키고자 노력하는 성격입니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                높은 공감 능력
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  INFP는 인간의 본성에 대한 깊은 호기심을 지니고 자기 성찰과
                  타인에 대한 깊은 이해를 추구하며, 공감 능력이 뛰어나 다른
                  사람의 이야기를 편견 없이 듣고자 합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                INFP는 인간의 본질에 대한 깊은 호기심을 지닌 성격으로, 스스로의
                생각과 감정에 대한 깊은 성찰을 하는 동시에, 타인을 이해하고자
                하는 강한 욕구도 가지고 있습니다. 이들은 뛰어난 공감 능력을 통해
                주변 사람들의 감정을 잘 이해하며, 다른 사람들의 이야기를 편견
                없이 들을 준비가 되어 있습니다. <br />
                <br />
                상대방의 감정을 진지하게 경청하고 그들에게 도움이 될 수 있다는
                사실에서 큰 만족감을 느낍니다. 그들에게 있어 이상적인 관계란
                서로의 꿈과 희망을 나누는 것뿐만 아니라, 남에게 쉽게 말하지 못한
                두려움이나 약점까지도 편안하게 공유할 수 있는 관계입니다. 이들은
                다른 사람들의 내면을 깊이 이해하며, 그들로 하여금 감정을
                자유롭게 표현하도록 돕습니다. 그러나 이러한 공감 능력은 가끔
                중재자에게도 부담이 될 수 있습니다. <br />
                <br />
                다른 사람의 부정적인 감정이나 에너지를 너무 깊이 받아들이는
                경향이 있어, 자신의 경계를 확실히 설정하지 않으면 타인의 문제에
                지나치게 몰두하게 되어 심리적인 스트레스를 받을 수 있습니다.
                따라서 INFP는 다른 사람을 도울 때도 자신을 보호할 필요가 있으며,
                너무 많은 감정적 부담을 지지 않도록 선을 긋는 것이 중요합니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                솔직함 추구
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  INFP는 솔직함을 중시하며, 창의적인 방식으로 자신을 표현하고자
                  합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                INFP는 자신을 솔직하게 표현하는 것을 중시하는 성격으로, 타인
                앞에서 가면을 쓰고 살아가는 것을 매우 불편해합니다. 이들은
                내면의 감정과 생각을 창의적인 방식으로 드러낼 기회를 찾으며,
                이러한 성향 덕분에 중재자 중에는 시인, 작가, 배우, 예술가 같은
                직업에 종사하는 사람이 많습니다. <br />
                <br />
                이들은 예술과 문학을 통해 자신의 감정을 표현하는 데 능숙하며,
                자신의 진솔한 생각이나 내면의 비밀을 작품 속에 투영하는 경향이
                있습니다. 이들은 깊이 있는 삶에 대한 질문을 던지고, 이야기를
                나누는 것을 좋아하며, 다양한 아이디어와 가능성에 대해 생각하는
                시간을 소중히 여깁니다. 이들의 상상력은 끝이 없으며, 자신을
                성찰하고 세상 속에서 자신의 자리를 찾는 데 큰 도움이 됩니다.
                그러나 이러한 상상력이 때로는 과도한 몽상으로 이어져 현실에서
                실질적인 행동을 취하는 데 방해가 될 수 있습니다. <br />
                <br />
                너무 많은 아이디어를 떠올리지만 이를 실제로 실현하지 못할 때,
                좌절감이나 무능함을 느낄 수 있습니다. 따라서 INFP는 자신이
                상상한 꿈과 아이디어를 실현하기 위해 구체적인 행동 계획을 세우는
                것이 중요합니다. 그렇게 할 때, 이들은 자신의 이상을 현실로
                바꾸며 삶에서 더 큰 만족감을 얻을 수 있습니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                사명을 찾기 위한 여정
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  INFP는 삶의 목적을 찾기 전까지 방황하지만, 보통 그 목적은 다른
                  사람을 돕고 공감하는 일과 관련됩니다. 이상주의와 창의성으로
                  세상을 더 나은 곳으로 만들며, 이들이 가는 곳마다 주변에 열정과
                  친절함을 주변에 퍼뜨리는 역할을 하고는 합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                INFP는 삶에서의 목표를 찾기 전까지는 종종 자신이 방황하는 듯한
                느낌을 받습니다. 이들에게 삶의 목적은 보통 다른 사람들을 돕고,
                그들의 감정을 이해하고 공감하는 일과 깊은 관련이 있습니다.
                중재자는 타인의 감정에 민감하게 반응하며, 그들의 어려움을
                덜어주는 것을 삶의 큰 목표로 삼곤 합니다. <br />
                <br />
                그러나 모든 사람을 돕고 싶은 열망에도 불구하고, 이들은 자신의
                에너지를 어디에 쏟을지를 신중하게 선택할 필요가 있습니다.
                지나치게 많은 사람을 도우려다 보면 에너지가 소진되어 큰
                스트레스를 받기 쉽기 때문입니다. 그들의 이상주의적 성향과 높은
                창의성은 세상을 더 나은 곳으로 만드는 데 기여할 수 있습니다.
                이들은 사회적 문제에 대해 깊이 고민하고, 창의적인 해결책을
                제안하며, 공감과 친절함을 통해 주변 사람들에게 긍정적인 영향을
                미칩니다. INFP는 어디를 가든지 사람들에게 열정, 친절, 아름다움을
                전파하는 역할을 자주 맡습니다. 이들은 타인에게 영감을 주고,
                그들의 삶에 희망을 불어넣는 존재가 될 수 있습니다. <br />
                <br />
                이들의 이러한 이상과 현실의 균형을 잘 맞춘다면, 자신만의 독특한
                방식으로 세상을 더 나은 방향으로 이끄는 중요한 역할을 할 수
                있습니다.
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

export default INFPPage;
