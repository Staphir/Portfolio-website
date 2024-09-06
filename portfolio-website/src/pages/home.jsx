import '../styles/home.scss';
import getAllData from '../database/tools';
import { useEffect, useState } from 'react';
import MiniCard from '../components/miniCard/miniCard';
// import Button from '../components/button';

function calculateAge(birthday) {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function Home() {
    const [myselfDatas, setMyselfDatas] = useState(null);

    useEffect(() => {
        getAllData('data/datas.json').then((response) => {
            setMyselfDatas(response.myself);
        });
    }, []);

    const myAge = calculateAge('1997-10-20');

    return( 
        <main className='home-page'>
            <section className='myself-presentation'>
                <h1 className='my-name'>Maxime Dulieu</h1>
                {myselfDatas && (
                    <img className='portrait' src={process.env.PUBLIC_URL + '/assets' + myselfDatas.portrait.src} alt={myselfDatas.portrait.alt}></img>
                    )
                }
                <ul className='personal-infos'>
                    <li>Age : {myAge} ans</li>
                    <li>Nationalité : Français</li>
                    {/* <li>Localisation : Montpellier, Bordeaux ou Grenoble</li> */}
                    <li>Disponible : Oui</li>
                </ul>
                {myselfDatas && (
                    <section className='my-description'>
                        <p className='my-description-text'>{myselfDatas.description}</p>
                        {/* <Button content='Portfolio' link='portfolio'></Button> */}
                    </section>
                    )
                }
            </section>
            <section className='skills'>
                <h2>Mes compétences</h2>
                <div className='skills-list'>
                    {myselfDatas &&
                        (myselfDatas.competences.map((competence) => {
                            return <MiniCard key={competence.name} name={competence.name} picture={competence.picture}></MiniCard>
                        }))
                    }
                </div>
            </section>
        </main>
        )
    }
    
    export default Home;