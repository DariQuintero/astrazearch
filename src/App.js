import logo from './logo.svg';
import './App.css';
import { SearchBar } from './Components/SearchBar';
import { MainText } from './Components/MainText';

function App() {
  return (
    <div>
      <img src="./Imgs/logo.png" />
      <SearchBar />
      <MainText />
      <FilterIcon />
      <FilterMenu />
      <FilterButton />
      <MapButton />
      <Map />
    </div>

  );
}

export default App;
