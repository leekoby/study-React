import './App.css';

function App() {
  const name = '이름';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  }
  return (
    <>
      <div className="react">{name}</div>
      <div style={style}>{name}</div>
      <h1 style={{
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16,
      }}>
        {"리액트"}
      </h1 >

    </>);
}


export default App;