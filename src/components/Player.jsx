function Player({ player }) {
  return (
    <div
      className={` mb-16 text-2xl text-center ${
        player === 1 ? "text-red-600" : "text-sky-600"
      } `}
    >
      Player {player === 1 ? "1" : "2"}
    </div>
  );
}

export default Player;
