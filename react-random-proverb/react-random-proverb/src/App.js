import logo from './logo.svg';
import './App.css';

function App() {

  const proverb = ["좌절감으로 배움을 늦추지 마라",
    "Stay hungry, Stay foolish",
    "Memento Mori",
    "Carpe diem",
    "배움에는 끝이 없다",
    "삶이 있는 한 희망은 있다 -키케로",
    "산다는것 그것은 치열한 전투이다. -로망로랑",
    "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다. -사무엘존슨",
    "언제나 현재에 집중할수 있다면 행복할것이다. -파울로 코엘료",
    "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해 -찰리 채플린",
    "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다 -엘버트 허버드",
    "신은 용기있는자를 결코 버리지 않는다 -켄러",
    "행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가",
    "리를 향해 열린 문을 보지 못하게 된다 -헬렌켈러",
    "피할수 없으면 즐겨라 -로버트 엘리엇"]

  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> 파일을 고치고 저장하면 새로운 명언을 볼 수 있습니다.
        </p>
        {proverb[getRandomIndex(proverb.length)]}
      </header>
    </div>
  );
}

export default App;
