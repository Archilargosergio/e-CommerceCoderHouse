import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Greeting from '../ItemListContainer/Greeting';
import ItemList from '../ItemListContainer/ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemDetail from '../ItemDetailContainer/ItemDetail/ItemDetail';
import CartContext from '../Context/CartContext';

function App() {
  return (
    <div className="App">
      < CartContext >
       < BrowserRouter >
        < Header />
         < Routes >s
           < Route path='/greeting' 
            element= {
              <ItemListContainer >
               < Greeting />
             </ItemListContainer>
             } 
             />
           < Route path='/' element={
             < ItemListContainer>
               < ItemList />
             </ItemListContainer>
             }
          />
           < Route path='/category/:categoryName' 
            element= {
              <ItemListContainer >
                < ItemList />
             </ItemListContainer>
              } 
             />
              < Route path='/item/:id' 
            element= {
              < ItemDetailContainer>
               < ItemDetail />
              </ItemDetailContainer>
             } 
             />
         </Routes>
       </BrowserRouter>
      </CartContext>
    </div>
  );
}

export default App;
