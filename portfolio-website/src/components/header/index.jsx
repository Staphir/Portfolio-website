import "./style.scss";
import { NavLink, Link } from "react-router-dom";
import iconCV from '../../assets/icon_cv_2.png';
import iconLinkedin from '../../assets/linkedIn_logo.png';
import iconGithub from '../../assets/github-collab.png';
import iconItchIo from '../../assets/itch-io-logo-clipart-2.png';
import cvPdf from '../../assets/cv_maxime_dulieu.pdf';

function Header() {
    const menuPages = {"Accueil": "", "Portfolio": "portfolio", "À propos": "about", "Contact": "contact", "Quiz": "quiz"};

    return (
        <header>
            <nav className="menu">
                {Object.keys(menuPages).map((page) => <NavLink key={page} to={menuPages[page]}>{page.toUpperCase()}</NavLink>)}
            </nav>
            <div className="logos-links">
                <Link to={cvPdf} download="cv_maxime_dulieu" target="_blank" rel='noopener noreferrer'>
                    <img className="logo-cv" src={iconCV} alt='Télécharger CV'></img>
                </Link>
                <Link to="https://linkedin.com/in/maxime-dulieu-830a2b137" target="_blank" rel='noopener noreferrer'>
                    <img className="logo-linkedin" src={iconLinkedin} alt='Linkedin'></img>
                </Link>
                <Link to="https://github.com/staphir" target="_blank" rel='noopener noreferrer'>
                    <img className="logo-github" src={iconGithub} alt='Github'></img>
                </Link>
                <Link to="https://staphir.itch.io/" target="_blank" rel='noopener noreferrer'>
                    <img className="logo-itch" src={iconItchIo} alt='Itch.io'></img>
                </Link>
            </div>
        </header>
    )
}

export default Header;