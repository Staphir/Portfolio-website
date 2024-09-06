import '../styles/about.scss';
import Collapse from '../components/collapse';
import { useEffect, useState } from 'react';
import getAllData from '../database/tools';

function About() {

    const [myselfData, setMyselfData] = useState([]);

    useEffect(() => {
        getAllData('data/datas.json').then((response) => {
            setMyselfData(response.myself);
        });
    }, []);

    const collapsesContent = {
        "Qui suis-je ?": [
            myselfData.description
        ],
        "Formations": [
            "2015 | Bac S option sciences de l'ingénieur | Vienne (France)",
            "2017 | DUT Informatique | Université Lyon 1 (site de Bourg-en-Bresse)",
            "2019 | Licence Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales option sciences cognitives | Bordeaux",
            "2021 | Master Informatique, Synthèse d'Images et Conception Graphique | Limoges",
            "2024 | Formation Développeur d'application - JavaScript React | OpenClassrooms (à distance)"
        ],
        "Expériences professionnelles": [
            "Mars - Mai 2017 | Amélioration et mise en ligne du site web DATAC | Laboratoire de recherche IMS à Bordeaux",
            "Janvier - Octobre 2021 | Infographiste développeur dans un studio d'animation | Cube Creative Computer Company"
        ],
        "Passions": [
            "En plus de mon appétence pour le développement web et l'informatique graphique j'ai d'autres centres d'intérêt culturels et sportifs.",
            "Mes univers préférés sont la fantaisie, la science-fiction et le Japon. Je les retrouve dans mes lectures de romans, mangas et bandes dessinées mais aussi dans les jeux vidéo auquels je joue.",
            "J'aime également le cinéma tant que ce n'est pas des films d'horreur... c'est pourquoi je confectionne régulièrement des quiz sur le cinéma mais je peux aussi créer des quiz musicaux. C'est avec ça et ma grande collection de jeux de société que je passe mon temps avec mes groupes d'amis et ma famille.",
            "Pour finir, mes sports préférés sont le badminton et l'ultimate (un jeu de frisbee opposant deux équipes de 5 ou 7 joueurs)."
        ]
    }

    return( 
        <main className='about-page'>
            <section className="about-collapses">
                {Object.keys(collapsesContent).map((collapseContent) => <Collapse key={collapseContent} title={collapseContent} content={collapsesContent[collapseContent]}></Collapse>)}
            </section>
        </main>
    )
}

export default About;