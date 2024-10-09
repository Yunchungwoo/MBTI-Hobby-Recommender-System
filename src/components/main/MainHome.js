import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "./MainHomestyleguide.css";

import MainBanner1 from "../../assets/Intro/Group (1).svg";
import MainBanner2 from "../../assets/Intro/Group (2).svg";
import MainBanner3 from "../../assets/Intro/Group.svg";
import buttonicon from "../../assets/Intro/mask-group-4.png";
import buttontext from "../../assets/Intro/mask-group-1.svg";

const MainHome = () => {
  return (
    <div className="main-container">
      <div className="content-wrapper">
        <div className="content-section">
          <nav className="navbar">
            <div className="left-menu">
              <div className="explore-hobby notosanskr-black-black-30px">
                <Link to="/mainHome">Explore HOBBY</Link>
              </div>
              <button className="nav-btn">
                    <Link to="/Test/step1">MBTI 검사</Link>
                </button>
              {/* 드롭다운 메뉴 */}
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
            <div className="right-menu">
              <button className="nav-btn notosanskr-medium-black-16px">
                <Link to="/">로그인</Link>
              </button>
              <button className="nav-btn notosanskr-medium-black-16px">
              <Link to="/register">회원가입</Link>
              </button>
            </div>
          </nav>

          {/* 메인 배너 영역 */}
          <div className="banner-section">
            <img className="buttonicon" alt="button-background" src={buttonicon} />
            <img className="buttontext" alt="button-text" src={buttontext} />
          </div>
          <div className="headline">Explore HOBBY</div>
          <p className="sub-heading">
            MBTI 성격유형검사를 통해 나만의 취미를 <br />
            찾아보세요
          </p>
          <img className="banner-image-1" alt="Banner 1" src={MainBanner1} />
          <img className="banner-image-2" alt="Banner 2" src={MainBanner2} />
          <img className="banner-image-3" alt="Banner 3" src={MainBanner3} />
        </div>

        {/* footer */}
        <footer className="footer">
          <div className="footer-content">
            <h2 className="footer-title">취미 탐색 추천</h2>
            <p className="footer-description">
              Explore HOBBY 는 성격유형 검사를 통해 보다 더 자신을 이해하는 것을
              돕고 <br />
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
  );
};

export default MainHome;
