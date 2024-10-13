import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./resultstyle.css";
// 이미지 파일 import
import lockicon from "../../assets/result/vector.png";
import bannerimg from "../../assets/result/ENFJ.svg";

const ResultPage = () => {
  const [isModalVisible, setModalVisible] = useState(false);
// persent 와 score 설정
//   const [percentages, setPercentages] = useState({});
//   const [scores, setScores] = useState({});

  const handleMouseEnter = () => {
    setModalVisible(true);
  };

  const handleMouseLeave = () => {
    setModalVisible(false);
  };

  //django 데이터 받아오는 함수 설정(임시)
//   useEffect(() => {
//     fetch('/api/enter to django link/')  // Django API 엔드포인트
//       .then(response => response.json())
//       .then(data => {
//         setPercentages(data.percentages);
//         setScores(data.scores);
//       });
//   }, []);

  // 각 지표별로 외향/내향 등 텍스트 설정 함수
//   const getDominantTrait = (score1, score2, trait1, trait2) => {
//     return score1 > score2 ? trait1 : trait2;
//   };

  return (
    <div className="result container-center-horizontal">
      <div className="screenmbti">
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
          <div className="overlap-group">
            <div className="banner-subtitle">성격 유형:</div>
            <div className="banner-title">ENFJ</div>
          </div>
          <div class="element-c-fa-bc">
            <img className="banner-img" alt="banner-img" src={bannerimg} />
          </div>
        </div>

        <div className="result-category">
          {/* 화살표 이미지 및 마우스 이벤트 처리 */}
          <img
            className="vector"
            alt="Vector"
            src={lockicon}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => (window.location.href = "/login")} // 클릭 시 로그인 페이지로 이동
          />
          {isModalVisible && (
            <div className="modal">
              <p>로그인 시 확인이 가능합니다.</p>
            </div>
          )}
          <div className="category-title">성향</div>
          <div className="loginpage-link-button">
            <div className="loginpage-link-button-text">심층 분석 확인하기</div>
          </div>
        </div>

        {/* 메인 콘텐츠 영역2 - ENFJ 소개 및 분석 */}
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

            <div className="info-title notosanskr-bold-black-50px">성향</div>
            <div className="result-chart-container">
              <div className="chart-group">
                <svg viewBox="0 0 200 200" width="280px" height="280px">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#ebebeb" strokeWidth="12" />
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#4257FF"
                    strokeWidth="12"
                    strokeDasharray={2 * Math.PI * 90 * 0.5}    //백분율 적용 데이터 값 퍼센트 표시
                    strokeDashoffset={-2 * Math.PI * 90 * 0.25}
                  />
                  <text x="60" y="105" textAnchor="middle" dominantBaseline="middle" fontSize="45" fill="black" fontFamily="Azeret Mono" >E</text>
                  <text x="140" y="105" textAnchor="middle" dominantBaseline="middle" fontSize="45" fill="black" fontFamily="Azeret Mono" >I</text>
                </svg>

                {/* 데이터로부터 받아오는 점수값 중 E/I 비교하여 높은 점수 쪽에 매칭되는 텍스트 설정 */}
                <div className="chart-label-container">
                  <div className="chart-label-1">
                    {/* {getDominantTrait(scores['E'], scores['I'], "외향적", "내향적")} */}
                  </div>
                {/* 퍼센테이지 설정 */}
                  <div className="chart-label" style={{ color: "#4257FF" }}>
                  {/* {percentages['E_I']}% */}
                  </div>
                </div>
              </div>

              <div className="chart-group">
                {/* S/N */}
                <svg viewBox="0 0 200 200" width="280px" height="280px">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#ebebeb" strokeWidth="12" />
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#317287"
                    strokeWidth="12"
                    strokeDasharray={2 * Math.PI * 90 * 0.5}    //백분율 적용 데이터 값 퍼센트 표시
                    strokeDashoffset={2 * Math.PI * 90 * 0.25}
                  />
                  <text x="60" y="105" textAnchor="middle" dominantBaseline="middle" fontSize="45" fill="black" fontFamily="Azeret Mono" >S</text>
                  <text x="140" y="105" textAnchor="middle" dominantBaseline="middle" fontSize="45" fill="black" fontFamily="Azeret Mono" >N</text>
                </svg>

                {/* 데이터로부터 받아오는 점수값 중 S/N 비교하여 높은 점수 쪽에 매칭되는 텍스트 설정 */}
                <div className="chart-label-container">
                  <div className="chart-label-1">
                    {/* {getDominantTrait(scores['S'], scores['N'], "감각적", "직관적")} */}
                  </div>
                  {/* 퍼센테이지 설정 */}
                  <div className="chart-label" style={{ color: "#317287" }}>
                    {/* {percentages['S_N']}% */}
                  </div>
                </div>
              </div>

              <div className="chart-group">
                {/* F/T */}
                <svg viewBox="0 0 200 200" width="280px" height="280px">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#ebebeb" strokeWidth="12" />
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#0F4A42"
                    strokeWidth="12"
                    strokeDasharray={2 * Math.PI * 90 * 0.5}    //백분율 적용 데이터 값 퍼센트 표시
                    strokeDashoffset={-2 * Math.PI * 90 * 0.25}
                  />
                 <text x="60" y="105" textAnchor="middle" dominantBaseline="middle" fontSize="45" fill="black" fontFamily="Azeret Mono" >F</text>
                 <text x="140" y="105" textAnchor="middle" dominantBaseline="middle" fontSize="45" fill="black" fontFamily="Azeret Mono" >T</text>
                </svg>

                {/* 데이터로부터 받아오는 점수값 중 T/F 비교하여 높은 점수 쪽에 매칭되는 텍스트 설정 */}
                <div className="chart-label-container">
                  <div className="chart-label-1">
                    {/* {getDominantTrait(scores['T'], scores['F'], "사고형", "감정형")} */}
                  </div>
                  {/* 퍼센테이지 설정 */}
                  <div className="chart-label" style={{ color: "#4257FF" }}>
                  {/* {percentages['T_F']}% */}
                  </div>
                </div>
              </div>

              <div className="chart-group">
                {/* P/J */}
                <svg viewBox="0 0 200 200" width="280px" height="280px">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="#ebebeb" strokeWidth="12" />
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#E4AF3A"
                    strokeWidth="12"
                    strokeDasharray={2 * Math.PI * 90 * 0.5}    //백분율 적용 데이터 값 퍼센트 표시
                    strokeDashoffset={2 * Math.PI * 90 * 0.25}
                  />
                  <text x="60" y="105" textAnchor="middle" dominantBaseline="middle" fontSize="45" fill="black" fontFamily="Azeret Mono" >P</text>
                  <text x="140" y="105" textAnchor="middle" dominantBaseline="middle" fontSize="45" fill="black" fontFamily="Azeret Mono" >J</text>
                </svg>

                {/* 데이터로부터 받아오는 점수값 중 P/J 비교하여 높은 점수 쪽에 매칭되는 텍스트 설정 */}
                <div className="chart-label-container">
                  <div className="chart-label-1">
                    {/* {getDominantTrait(scores['P'], scores['J'], "인식형", "판단형")} */}
                  </div>
                  {/* 퍼센테이지 설정 */}
                  <div className="chart-label" style={{ color: "#E4AF3A" }}>
                    {/* {percentages['J_P']}% */}
                  </div>
                </div>
              </div>
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
            </div>
            <div className="hobby-recommend-section">
              <div className="info-box">
                <div className="info-title notosanskr-bold-black-50px">
                  취미 분석
                </div>
                <p className="info-subtext notosanskr-medium-black-20px">
                  ENFJ 성격 유형에 어울리는 취미는 그들의 사회적 성향, 이타심,
                  창의성을 살릴 수 있는 활동이 적합합니다. ENFJ는 사람들과의
                  상호작용에서 큰 만족감을 느끼고, 다른 사람을 돕고 이끌며
                  성취감을 느끼는 성격이므로, 취미에서도 이러한 요소를 반영하는
                  것이 좋습니다.
                </p>
              </div>
            </div>

            {/* 광고 영역 */}
            <div className="ad-section">
              <div className="hobbymodal">
                <img
                  className="ad-banner-img"
                  alt="ad-banner-bg-img"
                  src={bannerimg}
                />
                <div className="ad-textgroup">
                  <h2>추가적인 정보를 확인하고 싶다면</h2>
                  <p>
                    현재 이 유형의 자세한 성격 유형의 심층정보와 자세한 취미
                    추천 서비스를 확인해보세요. <br />
                  </p>
                  <span>₩5, 000</span>
                  <button type="button">지금 확인하기</button>
                </div>
              </div>
            </div>

            {/* footer 영역 */}
            <footer className="footer">
              <div className="footer-content">
                <h2 className="footer-title">취미 탐색 추천</h2>
                <p className="footer-description">
                  Explore HOBBY 는 성격유형 검사를 통해 보다 더 자신을 이해하는
                  것을 돕고 <br />
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
  );
};

export default ResultPage;
