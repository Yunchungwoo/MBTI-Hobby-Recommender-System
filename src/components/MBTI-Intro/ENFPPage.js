import React from "react";
import { Link } from "react-router-dom";
import "./MBTI-Intro.css";
import "./MBTI-Intro-styleguide.css";
import "./MBTI-Intro-global.css";

// 이미지 파일 import
import bannerimage from "../../assets/Intro/ENFP.svg";

const ENFPPage = () => {

  return (
    <div className="container-center-horizontal">
      <div className="ENFPPage Green screenmbti">
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
                <h1>ENFP</h1>
                <p>
                  열정적이고 창의적인 성격으로, 긍정적으로 삶을 바라보는 성격
                  유형입니다.
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
                <img src={bannerimage} alt="ENFP personality banner" />
              </div>
            </div>
            <p className="chart-subtitle">ENFP의</p>
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
                  ENFP는 외향적이고 개방적인 자유로운 영혼으로, 활기차고
                  낙관적인 태도를 지니고 있습니다. 이들은 다른 사람들 속에서
                  돋보이는 성격이지만, 단순히 즐거움을 추구하는 것이 아니라,
                  감정적으로 깊고 의미 있는 관계를 맺는 데 큰 가치를 둡니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ENFP는 외향적이고 개방적인 성격으로 자유로운 영혼을 지닌
                사람입니다. 이들은 활기찬 에너지와 낙관적인 태도로 사람들
                사이에서 주목을 받으며, 자유로운 삶을 살아가려는 경향이
                강합니다. <br />
                <br />
                그러나 단순히 즐거움만을 추구하는 것이 아니라, 깊이 있고 진정성
                있는 인간관계를 맺고자 노력합니다. 이들은 감정적으로 풍부하며,
                다른 사람과의 교감에서 의미를 찾고자 하는 사람들입니다. 즉,
                이들은 외적인 흥미로움과 더불어 감정적 연결을 중시하며, 다른
                사람들과 함께 성장하고 의미 있는 관계를 쌓는 것을 목표로
                삼습니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                일상생활에서 찾는 의미
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  활동가(ENFP)는 사교적이고 친절한 성격을 지니고 있지만, 그
                  겉모습 뒤에는 깊은 내면과 풍부한 상상력이 있습니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ENFP는 친절하고 사교적인 성격으로 다른 사람과의 관계를 맺는 일과
                사교 활동을 즐깁니다. 하지만 사교적이고 느긋해 보이는 겉모습과
                달리 깊은 내면을 지니고 있으며 상상력과 창의력이 풍부하고
                호기심이 많은 성격입니다. 이들은 자기 성찰적인 모습을 보일 때가
                있으며, 다른 일에 주의를 기울여야 할 때도 인생의 근본적인 의미와
                중요성에 대해 생각하곤 합니다. <br />
                <br />
                또한 모든 사물과 사람이 연결되어 있다고 믿으며 이러한 관계에
                대한 통찰을 추구합니다. 이들은 독립적이고 창의적인 성격으로
                일상생활에서 의미를 찾고자 합니다. 자신의 상상력을 자극하는 일에
                강한 열정을 보이며 이러한 열정은 다른 사람에게도 전달됩니다.
                <br />
                <br />
                또한 긍정적인 에너지로 다른 사람들을 끌어들이고 지도자 역할을
                맡게 될 때가 많습니다. 그러나 처음의 열망이 사그라들고 나면
                일관성과 자제력을 유지하는 데 어려움을 겪거나 이전에 중요하게
                생각했던 일을 더는 신경쓰지 않게 될 수도 있습니다.
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                즐거움 추구
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  ENFP는 인생에서 즐거움과 깊은 의미를 동시에 추구하는
                  이상주의자이자 자유로운 영혼입니다.
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                ENFP는 인생에서 즐거움과 깊은 의미를 동시에 추구하는 성격입니다.
                이들은 이상주의자이면서도 자유로운 영혼을 가지고 있어, 다른
                사람의 시선에 구애받지 않고 자신만의 방식으로 인생을 즐깁니다.
                이들은 뛰어난 사고력과 감정 지능을 통해 자신뿐만 아니라 주변
                사람들과도 깊이 있는 감정 교류를 원하며, 진솔하고 따뜻한 대화를
                통해 인간관계를 중시합니다. <br />
                <br />
                그러나 직관이 발달해 있기 때문에 상대방의 의도를 지레짐작할
                위험도 있습니다. 이 때문에 상대방의 생각을 직접 확인함으로써
                오해를 방지하는 것이 중요합니다. 이들은 진로를 정할 때에도
                다양한 사람들과 관계를 맺고, 여러 감정과 아이디어를 충분히
                고려하는 과정을 거칩니다. 이러한 성격 덕분에 활동가는 자신과
                주변 사람 모두를 즐겁게 할 수 있는 능력을 갖추고 있습니다.
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

export default ENFPPage;
export const ENFPTitle1 = "일상생활에서 찾는 의미"
export const ENFPTitle2 = "즐거움 추구"
export const ENFPIntro1 = "ENFP는 외향적이고 개방적인 자유로운 영혼으로, 활기차고 낙관적인 태도를 지니고 있습니다. 이들은 다른 사람들 속에서 돋보이는 성격이지만, 단순히 즐거움을 추구하는 것이 아니라, 감정적으로 깊고 의미 있는 관계를 맺는 데 큰 가치를 둡니다."
export const ENFPSubText1 = "ENFP는 외향적이고 개방적인 성격으로 자유로운 영혼을 지닌 사람입니다. 이들은 활기찬 에너지와 낙관적인 태도로 사람들 사이에서 주목을 받으며, 자유로운 삶을 살아가려는 경향이 강합니다. 그러나 단순히 즐거움만을 추구하는 것이 아니라, 깊이 있고 진정성 있는 인간관계를 맺고자 노력합니다. 이들은 감정적으로 풍부하며, 다른 사람과의 교감에서 의미를 찾고자 하는 사람들입니다. 즉, 이들은 외적인 흥미로움과 더불어 감정적 연결을 중시하며, 다른 사람들과 함께 성장하고 의미 있는 관계를 쌓는 것을 목표로 삼습니다."
export const ENFPIntro2 = "활동가(ENFP)는 사교적이고 친절한 성격을 지니고 있지만, 그 겉모습 뒤에는 깊은 내면과 풍부한 상상력이 있습니다."
export const ENFPSubText2 = "ENFP는 친절하고 사교적인 성격으로 다른 사람과의 관계를 맺는 일과 사교 활동을 즐깁니다. 하지만 사교적이고 느긋해 보이는 겉모습과 달리 깊은 내면을 지니고 있으며 상상력과 창의력이 풍부하고 호기심이 많은 성격입니다. 이들은 자기 성찰적인 모습을 보일 때가 있으며, 다른 일에 주의를 기울여야 할 때도 인생의 근본적인 의미와 중요성에 대해 생각하곤 합니다. 또한 모든 사물과 사람이 연결되어 있다고 믿으며 이러한 관계에 대한 통찰을 추구합니다. 이들은 독립적이고 창의적인 성격으로 일상생활에서 의미를 찾고자 합니다. 자신의 상상력을 자극하는 일에 강한 열정을 보이며 이러한 열정은 다른 사람에게도 전달됩니다. 또한 긍정적인 에너지로 다른 사람들을 끌어들이고 지도자 역할을 맡게 될 때가 많습니다. 그러나 처음의 열망이 사그라들고 나면 일관성과 자제력을 유지하는 데 어려움을 겪거나 이전에 중요하게 생각했던 일을 더는 신경쓰지 않게 될 수도 있습니다."
export const ENFPIntro3 = "ENFP는 인생에서 즐거움과 깊은 의미를 동시에 추구하는 이상주의자이자 자유로운 영혼입니다."
export const ENFPSubText3 = "ENFP는 인생에서 즐거움과 깊은 의미를 동시에 추구하는 성격입니다. 이들은 이상주의자이면서도 자유로운 영혼을 가지고 있어, 다른사람의 시선에 구애받지 않고 자신만의 방식으로 인생을 즐깁니다. 이들은 뛰어난 사고력과 감정 지능을 통해 자신뿐만 아니라 주변 사람들과도 깊이 있는 감정 교류를 원하며, 진솔하고 따뜻한 대화를 통해 인간관계를 중시합니다. 그러나 직관이 발달해 있기 때문에 상대방의 의도를 지레짐작할 위험도 있습니다. 이 때문에 상대방의 생각을 직접 확인함으로써 오해를 방지하는 것이 중요합니다. 이들은 진로를 정할 때에도 다양한 사람들과 관계를 맺고, 여러 감정과 아이디어를 충분히 고려하는 과정을 거칩니다. 이러한 성격 덕분에 활동가는 자신과 주변 사람 모두를 즐겁게 할 수 있는 능력을 갖추고 있습니다."
export const ENFPrecommendhobby = "ENFP 성향의 사람들은 대체로 활발하고 창의적이며 다른 사람과의 교류를 좋아하는 성격을 가지고 있습니다. 이러한 특성을 바탕으로 ENFP에게 어울리는 취미를 추천드리자면: ENFP는 새로운 경험을 즐기고 개방적인 성격이므로 다양한 활동을 통해 자신의 창의성과 사회적 욕구를 충족시킬 수 있는 취미가 잘 맞습니다. 예를 들어, 여행, 외국 문화 탐방, 혹은 예술과 관련된 취미가 어울립니다. 공연 예술(연극, 즉흥극, 스탠드업 코미디)도 ENFP의 사교적이고 창의적인 면을 발휘할 수 있는 활동입니다. 이들은 사람들과 함께하는 활동에서 큰 만족감을 얻기 때문에 다양한 모임에 참여하거나 워크숍을 통해 자신의 재능을 공유하는 것을 좋아합니다. 또한, 새로운 아이디어를 발굴하고 이를 표현하는 취미인 글쓰기, 사진 촬영, 또는 창작 활동(그림 그리기, 디자인 등)도 ENFP에게 잘 맞는 취미입니다. 이들은 감정적으로 풍부하고 표현력이 강한 편이므로 예술을 통해 자신을 표현하는 데 큰 즐거움을 느낍니다. 다양한 소셜 활동이나 팀 스포츠도 ENFP의 활기를 북돋아 줄 수 있습니다. 그룹 스포츠나 새로운 사람을 만날 수 있는 동호회 활동은 ENFP가 에너지를 발산하고 즐길 수 있는 좋은 기회입니다. 이 외에도 자선 활동이나 봉사활동처럼 사람들과 교류하고 긍정적인 변화를 만드는 활동도 ENFP의 가치관에 부합하는 취미가 될 수 있습니다."