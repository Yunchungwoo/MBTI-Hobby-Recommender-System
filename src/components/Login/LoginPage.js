import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // axios 임포트
// import { GoogleLogin } from 'react-google-login';
import './globals.css';
import './password.css';
import './styleguide.css';
import './username.css';
import './LoginPage.css';

import closeButton from '../../assets/Logimg/CloseButton.png';
import line from '../../assets/Logimg/line.svg';
import pngwing from '../../assets/Logimg/pngwing.png';
import google from '../../assets/Logimg/google.png';

function LoginPage() {
  const navigate = useNavigate(); // useNavigate 훅 선언

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init('26c608b9a3868f264d29f02f869f45be'); // 여기에 카카오 JavaScript 키 입력
      console.log('Kakao SDK initialized');
    }
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');

    // 네이버 로그인 콜백 처리
    if (code && state) {
      const apiUrl = `https://localhost:8000/api/naver/callback/?code=${code}&state=${state}`;

      // 쿠키 포함 요청
      fetch(apiUrl, {
        credentials: 'include', // 쿠키를 포함
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('API 응답 데이터:', data);
          if (data.success) {
            // 서버에서 쿠키로 토큰을 처리하므로, 쿠키가 자동으로 저장됨
            window.location.href = '/mainHome'; // 성공 시 홈으로 리디렉션
          } else {
            console.error('로그인 실패:', data.error);
          }
        })
        .catch((error) => {
          console.error('API 요청 실패:', error); // 네트워크 또는 서버 오류 로그
        });
    }
  }, [navigate]);

  const handleLoginSuccess = async (response) => {
    const clientId = '520338496307-a9g751p7b0f7in8h1d9qv2c8l7t3ck9d.apps.googleusercontent.com';
    const redirectUri = 'https://localhost:8000/api/google/callback/';
    const scope = 'openid email profile';
    const state = 'random_state_value'; // CSRF 방지용으로 사용할 임의의 값

    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}&access_type=offline&prompt=consent`;

    // 구글 로그인 페이지로 리디렉션
    window.location.href = googleAuthUrl;
  };

  // 나머지 컴포넌트 코드
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPasswordVisible] = useState(false);
  const [capsLockOn, setCapsLockOn] = useState(false);

  const API_URL = 'https://localhost:8000/api/token/'; // Django API 엔드포인트 (HTTPS)

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (!username || !password) {
      setErrorMessage('아이디와 비밀번호를 모두 입력해 주세요.');
      return;
    }

    try {
      const response = await axios.post(API_URL, { username, password }); // HTTPS로 로그인 요청
      console.log('로그인 성공:', response.data);
      window.location.href = 'mainHome'; // 원하는 경로로 리다이렉트
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('아이디 또는 비밀번호가 잘못되었습니다.');
      } else {
        setErrorMessage('서버에 연결할 수 없습니다.');
      }
    }
  };

  const loginWithKakao = () => {
    window.Kakao.Auth.login({
      success: function (authObj) {
        console.log('카카오 로그인 성공:', authObj);

        fetch('https://localhost:8000/api/kakao/callback/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token: authObj.access_token }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              window.location.href = '/mainHome'; // 성공 시 리다이렉트
            } else {
              console.error('로그인 실패:', data);
            }
          })
          .catch((error) => {
            console.error('카카오 로그인 실패:', error);
          });
      },
      fail: function (err) {
        console.error('카카오 로그인 실패:', err);
      },
    });
  };

  const loginWithNaver = () => {
    const clientId = 'lV3FkVyO72bdyc5Nzh3l'; // 네이버 개발자 센터에서 발급받은 Client ID
    const redirectUri = 'https://localhost:8000/api/naver/callback/'; // 백엔드에서 처리할 콜백 URL
    const state = 'random_state_value'; // CSRF 방지용 state 값 (임의의 값)

    const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&state=${state}`;

    window.location.href = naverAuthUrl;
  };

  const handleCapsLock = (event) => {
    setCapsLockOn(event.getModifierState('CapsLock'));
  };

  const clearPassword = () => {
    setPassword(''); // 비밀번호 필드를 초기화
  };

  const handleSignupClick = () => {
    navigate('/register'); // 회원가입 페이지 경로
  };

  const handleFindIdClick = () => {
    navigate('/Find'); // 아이디 찾기 페이지 경로
  };

  const handleFindPassClick = () => {
    navigate('/Find'); // 비밀번호 찾기 페이지 경로
  };

  return (
    <div className="login-page">
      <div className="container-center-horizontal">
        <div className="loginpage-u40u4361u4462u4364u4453u4540u41 screen">
          <Link to="/">
            <div className="logo_-titlle">
              Explore<br />HOBBY
            </div>
          </Link>
          <form id="Login-form" onSubmit={handleLogin}>
            <div className="overlap-group7">
              <div className="rectangle-2"></div>
              <div className="group-3">
                <div className="overlap-group-container">
                  <div className="overlap-group1">
                    <input
                      type={isPasswordVisible ? 'text' : 'password'}
                      id="password"
                      name="userpassword"
                      placeholder="**********"
                      className="text-1"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={handleCapsLock}
                    />
                    {password && (
                      <div className="ex-icondelete" onClick={clearPassword}>
                        <img src={closeButton} alt="Delete Icon" />
                      </div>
                    )}
                  </div>
                  <div className="overlap-group2">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="아이디"
                      className="johndoeexamplecom"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                {capsLockOn && (
                  <div className="login_error_wrap">
                    <div className="error_message">
                      <strong>CapsLock</strong>이 켜져 있습니다.
                    </div>
                  </div>
                )}
                {errorMessage && (
                  <div className="login_error_wrap">
                    <div className="error_message">{errorMessage}</div>
                  </div>
                )}
                <button type="submit" className="overlap-group4">
                  <div className="proceed">로그인</div>
                </button>
              </div>
              <div className="terms-1 terms-4 zenkakugothicantique-normal-storm-dust-11px" onClick={handleFindPassClick}>비밀번호 찾기</div>
              <div className="terms-2 terms-4 zenkakugothicantique-normal-storm-dust-11px" onClick={handleFindIdClick}>아이디 찾기</div>
              <div className="terms-3 terms-4 zenkakugothicantique-normal-storm-dust-11px" onClick={handleSignupClick}>회원가입</div>
              <h1 className="log-in-to-qpay">Explore HOBBY</h1>
              <div className="or-use">또는</div>
              <img className="line-1 line" src={line} alt="Line 1" />
              <img className="line-2 line" src={line} alt="Line 2" />
              <div className="overlap-group6">
                <div className="btnicongroup">
                  <div className="overlap-group-1" onClick={handleLoginSuccess} style={{ cursor: 'pointer' }}>
                    <img className="icons8-google" src={google} alt="Google" />
                  </div>
                  <div className="rectangle-3"></div>
                  <div className="overlap-group1-1">
                    <div className="icons8-facebook" onClick={loginWithKakao} style={{ cursor: 'pointer' }}></div>
                  </div>
                </div>
                <img className="pngwingcom-1" src={pngwing} onClick={loginWithNaver} style={{ cursor: 'pointer' }} alt="pngwing.com 1" id="naverIdLogin" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
