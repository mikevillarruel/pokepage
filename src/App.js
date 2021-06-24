import './App.css';
import PokemonProvider from './context/pokemon/PokemonProvider';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <PokemonProvider>
        <Routes />
      </PokemonProvider>
    </div>
  );
}

export default App;
