import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trendings from "./Trendings";
//import Movies from "./Movies";
import db from "../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

function Home() {
  const dispatch = useDispatch();

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    //kigyűjtjük a moviekat az adatbázisból, onSnapshot készít egy másolatot (felvételt) a pillanatnyi adatbázisról
    db.collection("movies").onSnapshot((snapshot) => {
      //végig megyünk minden snapshot.docs-on (snapshotban van egy docs attributum (tömb) amiben a szükséges adatok vannak), és kinyerjük belőle

      snapshot.docs.map((doc) => {
        //console.log(doc.data());
        //doc.data() kinyeri az adatokat és külön az id-t, és egy új obj-ba tároljuk
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }

        // return { id: doc.id, ...doc.data() };
      });
      //console.log(tempMovies);

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      ); //eltároljuk az adatokat a storeban
    });
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trendings />
      {/*<Movies />*/}
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
