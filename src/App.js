
import './App.css';
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
      
    </div>
  );
}

export default App;
