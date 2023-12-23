import {Routes, Route} from 'react-router-dom';
import LoginRegister from './Components/LoginRegister';
import ProductsPage from './Components/ProductsPage';
import SingleProduct from './Components/SingleProduct';
import Todo from './Components/Todo';
import Register from './Components/Register';
import ProductListing from './Components/ProductListing';
import IndividualProduct from './Components/IndividualProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LoginRegister />}/>
        <Route exact path='/products' element={<ProductsPage />} />
        <Route exact path='/products/:id' element={<SingleProduct />} />
        <Route exact path='/todooo' element={<Todo />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/productlisting' element={<ProductListing />} />
        <Route exact path='/productlisting/:id' element={<IndividualProduct />} />
      </Routes>
    </div>
  );
}

export default App;
