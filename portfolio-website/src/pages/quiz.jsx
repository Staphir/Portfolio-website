import { useEffect, useState } from 'react';
import '../styles/quiz.scss'
import getAllData from '../database/tools';
import CollapseAudio from '../components/collapseAudio';

function Quiz() {
    const [musicQuizData, setMusicQuizData] = useState([]);
    // const [cinemaQuizData, setCinemaQuizData] = useState([]);

    useEffect(() => {
        getAllData('data/quiz.json').then((response) => {
            setMusicQuizData(response.music);
            // setCinemaQuizData(response.cinema);
        })
    }, []);

    return (
        <main className="quiz-page">
            <section className="music-quiz">
                <h2>Musique</h2>
                <div className='music-quiz-collapses'>
                    {musicQuizData.map((musicQuiz) => {
                        return <CollapseAudio key={musicQuiz.name} title={musicQuiz.name} description={musicQuiz.description} content={musicQuiz.content}></CollapseAudio>
                    })}
                </div>
            </section>
            <section className="cinema-quiz">
                <h2>Cinema</h2>
            </section>
        </main>
    )
}

export default Quiz;