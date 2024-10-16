import React from "react";
import { Link } from "react-router-dom";
import "./MBTI-Intro.css";
import "./MBTI-Intro-styleguide.css";
import "./MBTI-Intro-global.css";

// 이미지 파일 import
import bannerimage from "../../assets/Intro/자산 2.svg";

const ISTJPage = () => {

  return (
    <div className="container-center-horizontal">
      <div className="ISTJPage Blue screenmbti">
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
                <h1>ISTJ</h1>
                <p>
                  ISTJ는 현실적이고 사실을 중시하는 믿음직한 성격 유형입니다.
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
                <img src={bannerimage} alt="ISTJ personality banner" />
              </div>
            </div>
            <p className="chart-subtitle">ISTJ의</p>
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
                  ISTJ는 헌신과 책임감, 정직함을 중요시하며, 솔직하게 행동하는
                  데 자부심을 느낍니다. 이들은 화려함보다 안정된 사회에 기여하는
                  것을 중시하며, 현실적이고 논리적인 태도로 신뢰받는 사람으로
                  평가받습니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ISTJ는 진실성과 헌신을 삶의 중요한 가치로 삼는 사람들로, 그들의
                행동과 결정에서 이러한 특성이 두드러집니다. 이들은 책임감과
                성실함을 바탕으로 주어진 과제를 끝까지 완수하며, 자신이 헌신한
                일에는 언제나 최선을 다합니다. ISTJ는 인구의 상당한 비율을
                차지하며, 이들의 주된 관심사는 화려함이나 주목받는 것이 아니라,
                안정적인 사회에 기여하는 것입니다. <br />
                <br />
                이들은 실용적이고 논리적인 태도로 상황을 처리하는 능력이
                탁월하여, 스트레스가 심한 상황에서도 흔들리지 않고 현실적인
                해결책을 제시하는 것으로 평가받습니다. 가족과 친구들로부터는
                믿을 수 있는 사람이라는 평가를 자주 받으며, 이러한 신뢰를
                바탕으로 사회적 관계를 유지합니다. 그들의 헌신적인 태도는 단순한
                말로 끝나는 것이 아니라, 실제 행동으로 이어지는 것이 특징입니다.
                <br />
                <br /> 세상에서 많은 사람들이 책임을 회피하고 듣기 좋은 말만 할
                때, 현실주의자들은 자신의 원칙을 지키며 책임과 정직함을 중요한
                가치로 여깁니다. 이들은 감정보다는 사실에 기반한 판단을
                선호하며, 체계적이고 조직적인 방식으로 문제를 해결하는 데 뛰어난
                능력을 발휘합니다. 이들은 스스로의 진솔함에 자부심을 느끼며,
                이를 통해 신뢰를 얻는 것을 중요하게 생각합니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                진솔한 삶
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ISTJ는 진솔하게 행동하는 것에서 자존감을 느끼며, 체계와 전통을
                  중시하는 성격입니다. 이들은 상황에 맞는 행동을 중요시하며,
                  책임을 지는 것을 두려워하지 않고 정직함을 최우선으로
                  생각합니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ISTJ의 자존감은 주로 자신의 진솔한 행동에서 비롯됩니다. 이들은
                상황마다 적절한 행동이 있다고 믿으며, 규칙을 어기거나 체계를
                따르지 않는 사람들은 자신의 이익을 위해 규칙을 무시한다고
                생각하는 경향이 있습니다. 이러한 이유로 ISTJ는 규칙과 질서가 잘
                유지되는 환경을 선호하며, 특히 위계질서가 명확하고 기대치가
                분명한 직장이나 교육 환경에서 가장 편안함을 느낍니다. 이들에게
                자유롭고 체계가 없는 환경은 창의적인 공간이 아니라 혼돈으로
                여겨지며, 책임을 회피하는 태도로 보일 수 있습니다. <br />
                <br />
                이들은 자신의 행동과 결정에 대해 책임을 지는 것을 두려워하지
                않으며, 실수할 경우 이를 빠르게 인정하고 바로잡으려는 성향이
                있습니다. 이들에게는 다른 사람에게 잘 보이는 것보다도 자신의
                정직함을 유지하는 것이 훨씬 중요하며, 양심에 어긋나는 일을
                피하려 합니다. ISTJ는 자신의 의무를 최우선으로 생각하며, 이
                때문에 자신만큼 책임감이 없거나 자제력이 부족한 사람들을
                이해하기 어려워할 수 있습니다. <br />
                <br />
                이들은 말로 표현하지 않더라도 타인에 대한 판단이 행동에 드러나기
                때문에 때로는 엄격하거나 공감 능력이 부족한 사람이라는 평가를
                받기도 합니다. 특히 책임을 다하지 않는 사람들을 만나게 되면
                실망하거나 당황하는 경우가 많습니다. 결과적으로, 이들는 자신의
                원칙과 헌신을 기반으로 한 삶을 살아가며, 타인에게 보이는
                모습보다는 자신의 내면적 가치와 정직함을 중시하는 성향이 강하게
                드러납니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                책임감이 강한 성격
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ISTJ는 헌신적이고 높은 업무 윤리를 지닌 성격으로, 많은 성취를
                  이루는 데 큰 도움이 됩니다. 그러나 타인의 책임까지 떠안는
                  경우가 많아, 이러한 헌신이 과도해지면 피로감이나 절망감을 느낄
                  수 있습니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ISTJ는 뛰어난 헌신적인 성향을 지니고 있으며, 이는 다양한 목표를
                성취하는 데 중요한 역할을 합니다. 이들은 강한 책임감과 높은 업무
                윤리 의식을 가지고 있어 맡은 일에 대해 최선을 다하며, 주변
                사람들에게도 신뢰받는 인물로 자리 잡습니다. <br />
                <br />
                그러나 ISTJ의 이러한 헌신적인 성향은 때로 약점이 되기도 합니다.
                특히, 자신이 감당해야 할 책임 외에 다른 사람의 책임까지 떠맡게
                되는 경우가 종종 발생합니다. 이들은 자신의 감정을 즉시 드러내지
                않기 때문에 불만이나 피로감을 표현하지 않고 계속해서 책임을
                짊어지게 됩니다. 이런 상황이 장기적으로 지속된다면, ISTJ는
                자신이 감당할 수 있는 한계를 넘어서게 되어 점차 피로감과
                절망감을 느낄 수 있습니다. 특히, 헌신을 받는 사람들로부터 정당한
                인정을 받지 못할 때 이러한 감정이 더욱 커질 수 있습니다.
                <br />
                <br />
                ISTJ는 내성적인 성향으로 인해 즉각적으로 감정을 표출하지 않는
                편이지만, 과도한 책임감이 주어졌을 때 억울함을 느끼지 않는다는
                의미는 아닙니다. 따라서 이들은 자신의 책임과 타인의 책임
                사이에서 명확한 경계를 설정하고, 필요할 때는 거부하는 방법을
                익히는 것이 중요합니다. 균형 잡힌 관계를 유지하지 않으면
                스스로를 희생하게 될 가능성이 큽니다. 그러나 책임의 한계를
                인지하고 이를 실천한다면, ISTJ는 자신의 헌신적이고 충실한 태도로
                개인적인 성취뿐만 아니라 사회에 크게 기여하는 사람이 될 수
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

export default ISTJPage;
export const ENFPTitle1 = ""
export const ENFPTitle2 = ""
export const ENFPIntro1 = ""
export const ENFPSubText1 = ""
export const ENFPIntro2 = ""
export const ENFPSubText2 = ""
export const ENFPIntro3 = ""
export const ENFPSubText3 = ""
export const ENFPrecommendhobby = ""