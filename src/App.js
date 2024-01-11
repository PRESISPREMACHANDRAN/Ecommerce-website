
import { Route, Routes } from 'react-router';
import './App.css';
import AddProduct from './Components/AddProduct';
import NotFound from './Components/NotFound';
import SearchProduct from './Components/SearchProduct';
import ViewAll from './Components/ViewAll';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<AddProduct />} />
        <Route path="*" exact element={<NotFound />} />
        <Route path="/search" exact element={<SearchProduct />} />
        <Route path="/viewAll" exact element={<ViewAll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
