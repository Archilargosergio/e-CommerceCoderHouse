import './App.css';
import Header from '../Header/Header';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Greeting from '../ItemListContainer/Greeting';

function App() {
  return (
    <div className="App">
      < Header />
      <ItemListContainer >
        < Greeting />
      </ItemListContainer>
    </div>
  );
}

export default App;
