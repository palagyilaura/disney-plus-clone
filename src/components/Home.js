import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    //kigyűjtjük a moviekat az adatbázisból, onSnapshot készít egy másolatot (felvételt) a pillanatnyi adatbázisról
    db.collection("movies").onSnapshot((snapshot) => {
      //végig megyünk minden snapshot.docs-on (snapshotban van egy docs attributum (tömb) amiben a szükséges adatok vannak), és kinyerjük belőle

      let tempMovies = snapshot.docs.map((doc) => {
        //console.log(doc.data());
        //doc.data() kinyeri az adatokat és külön az id-t, és egy új obj-ba tároljuk
        return { id: doc.id, ...doc.data() };
      });
      //console.log(tempMovies);

      dispatch(setMovies(tempMovies)); //eltároljuk az adatokat a storeban
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
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
