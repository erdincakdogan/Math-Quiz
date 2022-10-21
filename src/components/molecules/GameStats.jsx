const GameStats = ({gameStats}) => {
  return (
    <div className="game-stats">
      <span>Puan: {gameStats.Points}</span>
      <span>Tur: {gameStats.Tour}</span>
      <span>Soru: {gameStats.Question}</span>
    </div>
  );
};

export default GameStats;