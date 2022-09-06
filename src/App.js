import { useState } from "react";

import "./App.css";
import GrillePFC from "./components/GrillePFC";
import Player from "./components/Player";
import Header from "./components/Header";
import GrilleVide from "./datas/GrilleVide";
import ResultatsModal from "./components/ResultatsModal";

function App() {
  const [player, setPlayer] = useState(1);
  const [isFinished, setIsFinished] = useState(false);
  const [grille, setGrille] = useState(GrilleVide);
  const [aGagner, setAGagner] = useState(false);

  const verifieGrille = (x, y) => {
    if (!isFinished) {
      if (grille[x][y] === 0) {
        let newGrille = grille.map((array) => array.slice());
        newGrille[x][y] = player;
        console.log("hey");
        setGrille(newGrille);
        if (grillePlein(newGrille)) {
          setIsFinished(true);
        } else if (grilleGagnant(newGrille)) {
          setAGagner(true);
          setIsFinished(true);
        } else {
          if (player === 2) setPlayer(1);
          else setPlayer(2);
        }
      }
    }
  };

  const grillePlein = (thisGrille) => {
    if (
      thisGrille[0].indexOf(0) === -1 &&
      thisGrille[1].indexOf(0) === -1 &&
      thisGrille[2].indexOf(0) === -1
    ) {
      return true;
    }

    return false;
  };

  const grilleGagnant = (thisGrille) => {
    let res = false;

    thisGrille.forEach((ligne) => {
      if (ligne[0] === player && ligne[1] === player && ligne[2] === player) {
        console.log(ligne[0], ligne[1], ligne[2]);
        res = true;
      }
    });

    if (
      thisGrille[0][0] === player &&
      thisGrille[1][0] === player &&
      thisGrille[2][0] === player
    ) {
      res = true;
      console.log(thisGrille[0][0], thisGrille[1][0], thisGrille[2][0][2]);
    }
    if (
      thisGrille[0][1] === player &&
      thisGrille[1][1] === player &&
      thisGrille[2][1] === player
    ) {
      res = true;
    }
    if (
      thisGrille[0][2] === player &&
      thisGrille[1][2] === player &&
      thisGrille[2][2] === player
    ) {
      res = true;
    }
    if (
      thisGrille[0][0] === player &&
      thisGrille[1][1] === player &&
      thisGrille[2][2] === player
    ) {
      res = true;
    }
    if (
      thisGrille[0][2] === player &&
      thisGrille[1][1] === player &&
      thisGrille[2][0] === player
    ) {
      res = true;
    }
    return res;
  };

  const handleReset = () => {
    setGrille(GrilleVide);
    setIsFinished(false);
    setPlayer(1);
    setAGagner(false);
  };
  return (
    <div className="App bg-slate-300 min-h-screen mx-auto flex flex-col   items-center">
      <Header />
      <Player player={player} />
      <GrillePFC grille={grille} verifieGrille={verifieGrille} />
      <ResultatsModal
        handleReset={handleReset}
        aGagner={aGagner}
        player={player}
        isFinished={isFinished}
      />
    </div>
  );
}

export default App;
