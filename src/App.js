import './App.css';
import JoinScreen from './components/JoinScreen';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="quiz-container">
        <JoinScreen />
      </div>
    </>
  );
}

export default App;
