import Croix from "./Croix";
import Rond from "./Rond";
function GrillePFC({ grille, verifieGrille }) {
  const afficher = (x, y) => {
    let res = "";
    if (grille[x][y] === 1) {
      res = <Rond />;
    } else if (grille[x][y] === 2) {
      res = <Croix />;
    }
    return res;
  };

  return (
    <div className="grid grid-cols-3">
      <div
        onClick={() => verifieGrille(0, 0)}
        className="case border-b-2 border-r-2 "
      >
        {afficher(0, 0)}
      </div>
      <div
        onClick={() => verifieGrille(0, 1)}
        className="case border-b-2 border-r-2 "
      >
        {afficher(0, 1)}
      </div>
      <div onClick={() => verifieGrille(0, 2)} className="case border-b-2  ">
        {afficher(0, 2)}
      </div>
      <div
        onClick={() => verifieGrille(1, 0)}
        className="case border-b-2 border-r-2  "
      >
        {afficher(1, 0)}
      </div>
      <div
        onClick={() => verifieGrille(1, 1)}
        className="case border-b-2 border-r-2 "
      >
        {afficher(1, 1)}
      </div>
      <div onClick={() => verifieGrille(1, 2)} className="case border-b-2 ">
        {afficher(1, 2)}
      </div>
      <div onClick={() => verifieGrille(2, 0)} className="case border-r-2 ">
        {afficher(2, 0)}
      </div>
      <div onClick={() => verifieGrille(2, 1)} className="case border-r-2 ">
        {afficher(2, 1)}
      </div>
      <div onClick={() => verifieGrille(2, 2)} className="case">
        {afficher(2, 2)}
      </div>
    </div>
  );
}

export default GrillePFC;
