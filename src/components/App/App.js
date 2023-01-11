import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Greeting from '../ItemListContainer/Greeting';
import ItemList from '../ItemListContainer/ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemDetail from '../ItemDetailContainer/ItemDetail/ItemDetail';

function App() {
  return (
    <div className="App">
      < BrowserRouter >
       < Header />
        < Routes >
           < Route path='/' 
            element= {
            <ItemListContainer >
             < Greeting />
            </ItemListContainer>
             } 
          />
          < Route path='/category' 
            element= {
            <ItemListContainer >
             < ItemList />
            </ItemListContainer>
             } 
          />
          < Route path='/item' 
            element= {
            <ItemDetailContainer >
             < ItemDetail />
            </ItemDetailContainer>
             } 
          />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
