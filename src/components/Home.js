import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";

function Home() {
  return (
    <Container>
      <ImgSlider />
    </Container>
  );
}

export default Home;

//main content
const Container = styled.main`
  min-height: calc(100vh - 70px); //body rész kiszámítása
  padding: 0 calc(3.5vw + 5px); //top-bottom: 0px , left-right: calc(3.5vw + 5px)
  position: relative;
  overflow-x: hidden; //így a slider nem lóg túl

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
