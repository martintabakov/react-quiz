import QuizLogo from '../assets/quiz-logo.png'

export default function Header(){
    return (
        <header>
            <img src={QuizLogo} alt="A Quiz Notepad"></img>
            <h1>REACTQUIZ</h1>
        </header>
    )
}