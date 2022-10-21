const Stats = ({stats}) => {
  // console.log(stats)
  return (
  
    <ul className="stats">
      <li>Puan: {stats.points}</li>
      <li>Çözülen Sayısı: {stats.answeredQuestions}</li>
      <li>Yanlış Cevap: {stats.wrongAnswers}</li>
      <li>Doğru Cevap: {stats.correctAnswers}</li>
    </ul>
  );
};

export default Stats;