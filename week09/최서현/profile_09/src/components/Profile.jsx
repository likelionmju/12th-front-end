import "./Profile.css";
import styled from "styled-components";
import React from "react";

const ProfileP = styled.p`
  margin-left: 80px;
  margin-top: 30px;
  padding-top: 30px;
  font-size: 30px;
  color: black;
`;

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileP>🅟🅡🅞🅕🅘🅛🅔</ProfileP>
      <img class="my_image" src="../asset/내 사진.jpg" alt="내 사진" />
      <p class="name">최서현</p>
      <p class="another_name">seohyun(namnumnam)</p>
      <p class="me">
        안녕하세요. 저는 경영학과 3학년 최서현입니다!~ 먹는걸 너무 좋아해서
        냠뇸냠이라는 별명을 자주 사용해요:9 앞으로 잘 부탁드립니다!!!!૮ ºﻌºა
      </p>
      <div class="feature">😝 Habit: Travel / Baking / Music</div>
      <div class="feature">🙎🏻‍♀️ MBTI: ISFP</div>
      <div class="feature">🐨 favorite: Koala / Icecream</div>
      <hr />
      <p class="playlist">🅟🅛🅐🅨🅛🅘🅢🅣</p>
      <img class="music" src="../asset/헤드셋.png" alt="헤드셋" />
      <p>▶️ ELLEGARDEN-Pizza Man</p>
      <p>▶️ ELLEGARDEN-Cheesecake Factory</p>
      <p>▶️ GroovyRoom-Yes OR No</p>
      <p>▶️ ILLIT-Magenetic</p>
      <p>▶️ RIIZE-Talk Saxy</p>
      <p>▶️ Fujita Kenya-All Mine</p>
      <p>▶️ Tabber-Chi-Ka</p>
      <p>▶️ Keshi-Besides you</p>
      <p>▶️ Yerin Beak-I'm in Love</p>
      <div class="share">
        <a href="https://youtube.com/playlist?list=PLDPTmN1dgEf-_7I_Ol93Mab4ZbFUBFofm&si=T39cV9csqIdcV4c8">
          🎵SHARE🎵
        </a>
      </div>
      <hr />
      <p class="study">🅢🅣🅤🅓🅨 🅟🅛🅐🅝</p>
      <img
        class="notebook"
        src="../asset/urbanbrush-20181113135553078925-removebg-preview.png"
        alt="notebook"
      />
      <p class="word_1">java script / html / css</p>
      <p class="word_2">! 완전 익히기 !</p>
    </div>
  );
};

export default Profile;
