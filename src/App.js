import './App.css';
import JoinScreen from './components/JoinScreen';
import Navbar from './components/Navbar';
import QuizScreen from './components/QuizScreen';

function App() {
  return (
    <>
      <Navbar />
      <div className="quiz-container">
        <JoinScreen />
        <QuizScreen />
      </div>
    </>
  );
}

export default App;
