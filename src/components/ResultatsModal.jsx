import Button from "../Button";
import Rond from "./Rond";
import Croix from "./Croix";
function ResultatsModal({ aGagner, player, handleReset, isFinished }) {
  return (
    <div
      className={`${
        isFinished && "modal-finished"
      } absolute -top-80  mt-16    duration-500`}
    >
      <div
        className={" max-w-96 h-52 p-4 px-16 bg-white rounded-2xl shadow-2xl "}
      >
        <h2 className="text-2xl text-slate-600 ">Résultats</h2>
        <div className="my-4 border-b-2 border-slate-400"></div>
        <div className="">
          <div>{aGagner ? `Le Joueur ${player} ` : "Personne n'"}a gagné</div>
          <Button handleReset={handleReset} text="Recommencer" />
        </div>
      </div>
    </div>
  );
}
// TODO : Afficher un cercle ou une croix pour le joueur gagnant
export default ResultatsModal;
