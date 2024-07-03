import "./Header.css";
import styled from "styled-components";
import React from "react";

const HeaderUl = styled.ul`
  list-style: none;
`;
const HeaderNav = styled.div`
  display: flex;
`;
const HeaderP = styled.p`
  margin-right: 500px;
  font-size: 30px;
  margin-top: 55px;
  color: rgb(240, 86, 240);
`;

const Header = () => {
  return (
    <HeaderUl>
      <img
        class="icecream"
        src="../asset/icecream-removebg-preview.png"
        alt="아이스크림"
      />
      <HeaderNav>
        <HeaderP>𝔸𝔹𝕆𝕌𝕋 𝕊𝔼𝕆ℍ𝕐𝕌ℕ</HeaderP>
        <li>
          <a href="https://blog.naver.com/cch5680">🍀블로그</a>
        </li>
        <img
          class="insta"
          src="../asset/pngwing.com (32).png"
          alt="instagram"
        />
        <li>
          <a href="https://www.instagram.com/seo_chuui?igsh=bGF6bm04d3J4Y21q&utm_source=qr">
            인스타그램
          </a>
        </li>
        <img class="git" src="../asset/social_10096227.png" alt="깃허브" />
        <li>
          <a href="https://github.com/seohyunaam/git-practice">깃허브</a>
        </li>
      </HeaderNav>
    </HeaderUl>
  );
};

export default Header;
