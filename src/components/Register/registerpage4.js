import React from "react";
import { useNavigate } from 'react-router-dom';
import "../../components/Register/registerpage4.css";

const TermsPage = () => {
  const navigate = useNavigate();

  const handleConfirmClick = () => {
    navigate('/register/step3');
  };

  // 페이지를 나가는 함수
  const handleClose = () => {
    window.location.href = "/"; // 페이지 나가기 버튼을 클릭 시 페이지이동
  };

  return (
    <div className="ConsentForm">
      {/* 텍스트 상단 제목 */}
      <h1 className="form-title">개인정보 수집 동의</h1>

      {/* 스크롤 가능한 콘텐츠 박스 */}
      <div className="scroll-box">
        <p className="form-content-1">
          하비 및 제휴 서비스의 이벤트・혜택 등의 정보 발송을 위해 하비
          아이디(아이디 식별값 포함)와 이메일 주소를 수집합니다. <br />
          하비 아이디(아이디 식별값 포함)와 이메일 주소는 하비 서비스 제공을
          위한 필수 수집 항목으로서 하비 회원 가입 기간 동안 보관하나, 이벤트
          혜택 정보 수신 동의를 철회하시면 본 목적으로의 개인정보 처리는
          중지됩니다. 정보 주체는 개인정보 수집 및 이용 동의를 거부하실 수
          있으며, 미 동의 시에도 서비스 이용은 가능합니다.
          <br />
          <br />
          <span>
            ※ 일부 서비스(별개의 회원 체계 운영, 하비 가입 후 추가 가입하는
            서비스 등)의 경우, 수신에 대해 별도로 안내 드리며, 동의를 구합니다.
          </span>
          <br />
          <br />
          <strong>1. 개인정보의 수집 및 이용 목적</strong>
          <br />
          서비스 제공: 고객님의 문의사항 처리
          <br />
          회원 관리: 회원 가입 및 본인 확인
          <br />
          마케팅: 서비스 정보 제공 및 이벤트 안내
          <br />
          서비스 개선: 고객 의견 반영
          <br />
          <br />
          <strong>2. 개인정보의 보유 및 이용 기간</strong>
          <br />
          하비는 서비스 제공 기간 동안 개인정보를 보유하며, 회원 탈퇴 시 즉시
          파기합니다. 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안
          보유합니다.
          <br />
          <br />
          <strong>3. 개인정보의 제3자 제공</strong>
          <br />
          하비는 고객님의 개인정보를 사전 동의 없이 제3자에게 제공하지 않습니다.
          법률 요청이 있을 경우 예외로 합니다.
          <br />
          <br />
          <strong>4. 개인정보의 안정성 확보</strong>
          <br />
          하비는 고객님의 개인정보 보호를 위해 기술적, 관리적 조치를 취하고
          있습니다.
          <br />
          <br />
          <strong>5. 이용자의 권리</strong>
          <br />
          고객님은 개인정보에 대한 열람, 수정, 삭제를 요청할 수 있습니다.
          <br />
          <br />
          <strong>6. 동의 철회</strong>
          <br />
          개인정보 수집 및 이용에 대한 동의를 원치 않으실 경우, 고객센터를 통해
          동의를 철회하실 수 있습니다.
        </p>
        <p className="form-content-1"></p>
      </div>

      {/* 버튼 */}
      <div className="button-group">
        <button className="gray-button" onClick={handleClose}>닫기</button>
        <button className="black-button" onClick={handleConfirmClick}>동의</button>
      </div>
    </div>
  );
};

export default TermsPage;
