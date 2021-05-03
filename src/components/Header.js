import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="" srcset="" />
          <span>Home</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="" srcset="" />
          <span>Search</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="" srcset="" />
          <span>Watchlist</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" alt="" srcset="" />
          <span>Originals</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="" srcset="" />
          <span>Movies</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="" srcset="" />
          <span>Series</span>
        </a>
      </NavMenu>
      <UserImage src="https://lh3.googleusercontent.com/-RIWSU1vQ-Ro/VkOr-5TxX4I/AAAAAAAAGeo/H15djWnm4c4O10gzL34gs40K5nPwpD6jgCEwYBhgLKtQDAL1OcqyH_C_4dP6W9lKCZ3l8MOzQ2kBVvgdJxE3o0Om01CX-w2GgkupQ-fAe4zuHhP4ctvBcH1hB1lrZermzoRcAZ2a1G550iJTAiq-prUj5LscftQmKLCSzNjM7wAhzM8bCUk_yrxB-lwu-QdYoICkw5trJmMfjr3DtVOqw3Xeg5fsAi6NvA1AGNiOaQYz5EV_dYqrbb7MnohaiZj6Liu-pMUlwj-QhKwv_93r1245S5dxBsPBpQUTA4cgn96l09neXr2ux39-0Euc6NLIW4Z8YddQjZ3bxlWiJ97ReD0Q2aQUygUC9QXpEBWSHgZUUkPMdynP5SmVuCDGQSRiE_LAdW71XDQaLrfQNlNFyGdL6cOgO_RuE6Zy8t4KS6wZui1mfcraponRjmgiLQ-HOcR5dmgRHxLKuT2mqq2SP4Sc2OANYYlNG-02IDNCZgd_O1sW4zG0sCSt4X3yrnZfxShy7jFTyIdDH6o_PpjQA1hUVvvMfY0QGE2A-EYpo3LrUsANm6LfuKtyCZrFlWMzSnftrYJG-er-TQVRGi4raSMtmH58Gc02vvBU_WGPxXllJv6SKHZMt5TOxt6sLC9_H57kC5sMlsfMBPlO_O84YCE4BP1GnMPfJv4QG/w140-h140-p/BAI9zpjQ.jpg" />
    </Nav>
  );
}

export default Header;

//létrehozunk egy styled-component-et Nav néven, ami egy div megformázva ``-eközött lehet css-t írni
const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1.42px;
      position: relative;

      //aláhúzás a hovernél
      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0); //0-ra méretezzük
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
