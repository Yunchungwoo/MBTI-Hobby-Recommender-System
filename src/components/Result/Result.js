import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { calculateMbtiScores } from "./mbtiCalculation";
import "./resultstyle.css";
// 이미지 파일 import
import lockicon from "../../assets/result/vector.png";
import { ENFJTitle1, ENFJTitle2, ENFJIntro1, ENFJIntro2, ENFJIntro3, ENFJSubText1, ENFJSubText2, ENFJSubText3, ENFJrecommendhobby } from "../MBTI-Intro/ENFJPage"
import { ENTJTitle1, ENTJTitle2, ENTJIntro1, ENTJIntro2, ENTJIntro3, ENTJSubText1, ENTJSubText2, ENTJSubText3, ENTJrecommendhobby } from "../MBTI-Intro/ENTJPage"
import { ENFPTitle1, ENFPTitle2, ENFPIntro1, ENFPIntro2, ENFPIntro3, ENFPSubText1, ENFPSubText2, ENFPSubText3, ENFPrecommendhobby } from "../MBTI-Intro/ENFPPage"
import { ESTJTitle1, ESTJTitle2, ESTJIntro1, ESTJIntro2, ESTJIntro3, ESTJSubText1, ESTJSubText2, ESTJSubText3, ESTJrecommendhobby } from '../MBTI-Intro/ESTJPage';
import INFPPage from "../MBTI-Intro/INFPPage"

const ResultPage = ({ allAnswers }) => {
  const [mbtiType, setMbtiType] = useState('');
  const [recommendhobby, setRecommendHobby] = useState('');
  const [titleText1, setTitleText1] = useState('');
  const [titleText2, setTitleText2] = useState('');
  const [introText1, setIntroText1] = useState('');
  const [subText1, setSubText1] = useState('');
  const [introText2, setIntroText2] = useState('');
  const [subText2, setSubText2] = useState('');
  const [introText3, setIntroText3] = useState('');
  const [subText3, setSubText3] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [percentages, setPercentages] = useState({});

  useEffect(() => {
    if (allAnswers && Object.keys(allAnswers).length > 0) {
      // MBTI 성향 계산
      const { percentages, mbtiType } = calculateMbtiScores(allAnswers);
      console.log("Calculated MBTI Type:", mbtiType);
      setMbtiType(mbtiType);
      setPercentages(percentages);

      switch (mbtiType) {
        case 'ENTJ':
          setRecommendHobby(ENTJrecommendhobby);
          setTitleText1(ENTJTitle1);
          setTitleText2(ENTJTitle2);
          setIntroText1(ENTJIntro1);
          setSubText1(ENTJSubText1);
          setIntroText2(ENTJIntro2);
          setSubText2(ENTJSubText2);
          setIntroText3(ENTJIntro3);
          setSubText3(ENTJSubText3);
          break;
        case 'ENFJ':
          setRecommendHobby(ENFJrecommendhobby);
          setTitleText1(ENFJTitle1);
          setTitleText2(ENFJTitle2);
          setIntroText1(ENFJIntro1);
          setSubText1(ENFJSubText1);
          setIntroText2(ENFJIntro2);
          setSubText2(ENFJSubText2);
          setIntroText3(ENFJIntro3);
          setSubText3(ENFJSubText3);
          break;
        case 'ESTJ':
          setRecommendHobby(ESTJrecommendhobby);
          setTitleText1(ESTJTitle1);
          setTitleText2(ESTJTitle2);
          setIntroText1(ESTJIntro1);
          setSubText1(ESTJSubText1);
          setIntroText2(ESTJIntro2);
          setSubText2(ESTJSubText2);
          setIntroText3(ESTJIntro3);
          setSubText3(ESTJSubText3);
          break;
        case 'ENFP':
          setRecommendHobby(ENFPrecommendhobby);
          setTitleText1(ENFPTitle1);
          setTitleText2(ENFPTitle2);
          setIntroText1(ENFPIntro1);
          setSubText1(ENFPSubText1);
          setIntroText2(ENFPIntro2);
          setSubText2(ENFPSubText2);
          setIntroText3(ENFPIntro3);
          setSubText3(ENFPSubText3);
          break;
        case 'INFP':
          return <INFPPage />;
        default:
          return <div>MBTI type not found</div>;
      }
    }
  }, [allAnswers]);

  const bannerimg = (`/assets/result/${mbtiType}.svg`);

  const getTraitText = (trait, type1, type2) => {
    return trait === type1 ? `${type1}형` : `${type2}형`;
  };


  const handleMouseEnter = () => {
    setModalVisible(true);
  };

  const handleMouseLeave = () => {
    setModalVisible(false);
  };


  return (
    <div className="result container-center-horizontal">
      <div className="screenmbti">
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
          <div className="overlap-group">
            <div className="banner-subtitle">성격 유형:</div>
            <div className="banner-title">{mbtiType}</div>
          </div>
          <div class="element-c-fa-bc">
            <img className="banner-img" alt="banner-img" src={bannerimg} />
          </div>
        </div>

        <div className="result-category">
      {/* 왼쪽 그룹: 제목과 자물쇠 이미지 */}
      <div className="result-category-left">
        <img
          className="vector"
          alt="Vector"
          src={lockicon}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => (window.location.href = "/login")}
        />
        <div className="category-title">성향</div>
      </div>

      {/* 오른쪽 그룹: 로그인 버튼 */}
      <div className="loginpage-link-button">
        <div className="loginpage-link-button-text">심층 분석 확인하기</div>
      </div>

      {/* 모달 */}
      {isModalVisible && (
        <div className="modal">
          <p>로그인 시 확인이 가능합니다.</p>
        </div>
      )}
    </div>

        {/* 메인 콘텐츠 영역2 - ENFJ 소개 및 분석 */}
        <div className="main-content-section">
          <div className="content-wrapper-section">
            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">소개</div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  {introText1}
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                {subText1}
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
                    strokeDasharray={2 * Math.PI * 90}  // 원의 둘레
                    strokeDashoffset={(1 - percentages['E/I'] / 100) * 2 * Math.PI * 90 + (2 * Math.PI * 90 * 0.25)}  // 12시 방향으로 시작점 이동
                    transform="rotate(-90 100 100)"  // 12시 방향으로 시작점 이동
                  />
                  <text x="60" y="105" textAnchor="middle" dominantBaseline="middle" fontSize="45" fill="black" fontFamily="Azeret Mono" >E</text>
                  <text x="140" y="105" textAnchor="middle" dominantBaseline="middle" fontSize="45" fill="black" fontFamily="Azeret Mono" >I</text>
                </svg>

                {/* 데이터로부터 받아오는 점수값 중 E/I 비교하여 높은 점수 쪽에 매칭되는 텍스트 설정 */}
                <div className="chart-label-container">
                  <div className="chart-label-1">
                  {getTraitText(mbtiType[0], "외향", "내향")}
                  </div>
                {/* 퍼센테이지 설정 */}
                  <div className="chart-label" style={{ color: "#4257FF" }}>
                  {percentages['E/I']}%
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
                    strokeDasharray={2 * Math.PI * 90}  // 원의 둘레
                    strokeDashoffset={(1 - percentages['S/N'] / 100) * 2 * Math.PI * 90 + (2 * Math.PI * 90 * 0.25)}  // 12시 방향으로 시작점 이동
                    transform="rotate(-90 100 100)"  // 12시 방향으로 시작점 이동
                  />
                  <text x="60" y="105" textAnchor="middle" dominantBaseline="middle" fontSize="45" fill="black" fontFamily="Azeret Mono" >S</text>
                  <text x="140" y="105" textAnchor="middle" dominantBaseline="middle" fontSize="45" fill="black" fontFamily="Azeret Mono" >N</text>
                </svg>

                {/* 데이터로부터 받아오는 점수값 중 S/N 비교하여 높은 점수 쪽에 매칭되는 텍스트 설정 */}
                <div className="chart-label-container">
                  <div className="chart-label-1">
                  {getTraitText(mbtiType[1], "감각", "직관")}
                  </div>
                  {/* 퍼센테이지 설정 */}
                  <div className="chart-label" style={{ color: "#317287" }}>
                    {percentages['S/N']}%
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
                    strokeDasharray={2 * Math.PI * 90}  // 원의 둘레
                    strokeDashoffset={(1 - percentages['T/F'] / 100) * 2 * Math.PI * 90 + (2 * Math.PI * 90 * 0.25)}  // 12시 방향으로 시작점 이동
                    transform="rotate(-90 100 100)"  // 12시 방향으로 시작점 이동
                  />
                 <text x="60" y="105" textAnchor="middle" dominantBaseline="middle" fontSize="45" fill="black" fontFamily="Azeret Mono" >F</text>
                 <text x="140" y="105" textAnchor="middle" dominantBaseline="middle" fontSize="45" fill="black" fontFamily="Azeret Mono" >T</text>
                </svg>

                {/* 데이터로부터 받아오는 점수값 중 T/F 비교하여 높은 점수 쪽에 매칭되는 텍스트 설정 */}
                <div className="chart-label-container">
                  <div className="chart-label-1">
                  {getTraitText(mbtiType[2], "사고", "감정")}
                  </div>
                  {/* 퍼센테이지 설정 */}
                  <div className="chart-label" style={{ color: "#0F4A42" }}>
                  {percentages['T/F']}%
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
                    strokeDasharray={2 * Math.PI * 90}  // 원의 둘레
                    strokeDashoffset={(1 - percentages['J/P'] / 100) * 2 * Math.PI * 90 + (2 * Math.PI * 90 * 0.25)}  // 12시 방향으로 시작점 이동
                    transform="rotate(-90 100 100)"  // 12시 방향으로 시작점 이동
                  />
                  <text x="60" y="105" textAnchor="middle" dominantBaseline="middle" fontSize="45" fill="black" fontFamily="Azeret Mono" >P</text>
                  <text x="140" y="105" textAnchor="middle" dominantBaseline="middle" fontSize="45" fill="black" fontFamily="Azeret Mono" >J</text>
                </svg>

                {/* 데이터로부터 받아오는 점수값 중 P/J 비교하여 높은 점수 쪽에 매칭되는 텍스트 설정 */}
                <div className="chart-label-container">
                  <div className="chart-label-1">
                  {getTraitText(mbtiType[3], "판단", "인식")}
                  </div>
                  {/* 퍼센테이지 설정 */}
                  <div className="chart-label" style={{ color: "#E4AF3A" }}>
                    {percentages['J/P']}%
                  </div>
                </div>
              </div>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                {titleText1}
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  {introText2}
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                {subText2}
              </p>
            </div>

            <div className="info-box">
              <div className="info-title notosanskr-bold-black-50px">
                {titleText2}
              </div>
              <div className="info-content-box">
                <p className="info-content-text notosanskr-medium-bold-20px">
                  {introText3}
                </p>
              </div>
              <p className="info-subtext notosanskr-medium-black-20px">
                {subText3}
              </p>
            </div>

            <div className="hobby-recommend-section">
              <div className="info-box">
                <div className="info-title notosanskr-bold-black-50px">
                  취미 분석
                </div>
                <p className="info-subtext notosanskr-medium-black-20px">
                  {recommendhobby}
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
