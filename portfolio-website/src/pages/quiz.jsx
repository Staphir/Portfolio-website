import { useEffect, useState } from 'react';
import '../styles/quiz.scss'
import getAllData from '../database/tools';
import CollapseAudio from '../components/collapseAudio';
import CollapseFile from '../components/collapseFile';

function Quiz() {
    const [musicQuizData, setMusicQuizData] = useState([]);
    const [textualQuizData, setTextualQuizData] = useState([]);

    useEffect(() => {
        getAllData('data/quiz.json').then((response) => {
            setMusicQuizData(response.music);
            setTextualQuizData(response.textual);
        })
    }, []);

    return (
        <main className="quiz-page">
            <section className="music-quiz">
                <h2>Audio</h2>
                <div className='quiz-collapses'>
                    {musicQuizData.map((musicQuiz) => {
                        return <CollapseAudio key={musicQuiz.name} title={musicQuiz.name} description={musicQuiz.description} content={musicQuiz.content}></CollapseAudio>
                    })}
                </div>
            </section>
            <section className="textual-quiz">
                <h2>Textuel</h2>
                <div className='quiz-collapses'>
                    {textualQuizData.map((textualQuiz) => {
                        return <CollapseFile key={textualQuiz.name} title={textualQuiz.name} description={textualQuiz.description} content={textualQuiz.content}></CollapseFile>
                    })}
                </div>
            </section>
            {/* <section className="visual-quiz">
                <h2>Visuel</h2>
            </section> */}
        </main>
    )
}

export default Quiz;