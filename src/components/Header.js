import React, { useEffect } from "react";
import styled from "styled-components";
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { auth, provider } from "../firebase"
import { useHistory } from "react-router-dom"

function Header() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const history = useHistory();
  const dispatch = useDispatch();

  //hogy bejelentkezés utáni frissítéskor ne jelentkezzen ki
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
        history.push("/");
      }
    })
  }, [])

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        //console.log(result);
        let user = result.user;
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
        history.push("/");
      })
  };

  const signOut = () => {
    auth.signOut()
      .then(() => {
        dispatch(setSignOut());
        history.push("/login");
      })
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" />

      {!userName ?
        <LoginContainer><Login onClick={signIn}>Login</Login></LoginContainer>
        :
        <>
          <NavMenu>
            <a href="/">
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
          <UserImage src={userPhoto} onClick={signOut} />
        </>
      }

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
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;

const Login = styled.div`
  border-radius: 4px;
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background: rgba(0,0,0,0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;
  

  &:hover{
    background: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const LoginContainer = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end; //jobbra igazítja
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
    text-decoration: none;
    color: white;

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
        bottom: -6px; //lejjebb viszi
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
