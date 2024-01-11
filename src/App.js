
import './App.css';
import AddProduct from './Components/AddProduct';
import Header from './Components/Header';
import NotFound from './Components/NotFound';
import SearchProduct from './Components/SearchProduct';
import ViewAll from './Components/ViewAll';

function App() {
  return (
    <div >
      <Header/>
      <NotFound/>
      <ViewAll/>
      <SearchProduct/>
      <AddProduct/>
      
    </div>
  );
}

export default App;
