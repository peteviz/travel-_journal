// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import data from './data';
import TravelCard from './components/travelCards';

function App() {
  const card = data.map(item => {
    return (
      <TravelCard
        key = {item.id}
        {...item}

      />
    )


  })
  return (
    <div className="App">
      <Header />
      <div className="cards--container">
        {card}
      </div>
    </div>
  );
}

export default App;
