
import './App.css';
import MainContent from './components/MainContent';
import ColorList from './components/ColorList';
import ColorCard from './components/ColorCard';

const colors = ['#9370DB','#9932CC','#4B0082' ]

function App() {
  return (
    <div className="App">
      <MainContent>
        <h1>Pantone</h1>
        <ColorList>
          <ColorCard color={colors[0]} />
          <ColorCard color={colors[1]} />
          <ColorCard color={colors[2]} />
        </ColorList>
      </MainContent>
    </div>
  );
}

export default App;
