import "./style.scss";
import Slideshow from "../slideshow";
import Button from "../button";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Card({srcPictures, cardTitle, link = null, projectDatas = null}) {

    const chevron = <FontAwesomeIcon icon={faChevronRight} size="xl" />

    return (
        <article className="card">
            {link && (
                <div className="card-text">
                    <h3 className="project-title">{cardTitle}</h3>
                    <Button className='more-project-button' content={chevron} link={link} state={projectDatas}></Button>
                </div>
            )}
                <Slideshow className="project-slideshow" pictures={srcPictures}></Slideshow>
        </article>
    )
}

export default Card;