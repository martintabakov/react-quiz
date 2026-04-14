import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
//import Results from './components/Results.jsx';
import questions from './assets/questions.js'; 
//import { useContext } from 'react';

function AppContent() {
  const { currentQuestion } = useContext(QuizContext);

  return (
    <>
      <Header />
      {currentQuestion < questions.length - 1 && <Body /> }
      {currentQuestion === questions.length - 1 && <Results /> }
    </>
  )
}

function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  )
}

export default App;
