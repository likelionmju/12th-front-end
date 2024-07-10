import "./Visit.css";
import styled from "styled-components";
import React from "react";

const VisitP = styled.p`
  font-size: 30px;
  color: darkorchid;
  padding-top: 20px;
`;
const VisitT = styled.textarea`
  width: 1000px;
  height: 300px;
  border: 1px solid rgb(174, 141, 204);
  padding: 20px 10px 10px 10px;
  margin-left: 40px;
  color: rgb(134, 53, 134);
  border-radius: 30px;
  margin-left: 150px;
  font-weight: bold;
`;
const Check = styled.button`
  padding: 10px 25px 10px 25px;
  border-radius: 30px;
  background-color: rgb(174, 141, 204);
  border: 1px solid rgb(174, 141, 204);
  margin-left: 60px;
`;

const Visit = () => {
  return (
    <div className="Visit">
      <VisitP>🫧🅥🅘🅢🅘🅣 🅜🅔🅢🅢🅐🅖🅔🫧</VisitP>
      <textarea placeholder=" 방문시 방명록 작성은 필수입니다! 최서현의 자기소개 페이지 감상평을 남겨주세요."></textarea>
      <Check>𝕔𝕙𝕖𝕔𝕜</Check>
    </div>
  );
};

export default Visit;
