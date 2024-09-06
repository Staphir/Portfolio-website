import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.scss";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useState } from "react";

function Slideshow({pictures}) {
    const srcPath = process.env.PUBLIC_URL + '/assets';
    const [pictureIndex, setPictureIndex] = useState(0);
    const nbPictures = pictures.length;
    
    const nextPicture = function() {
        setPictureIndex(pictureIndex + 1 === nbPictures ? 0 : pictureIndex + 1);
    }
    const previousPicture = function() {
        setPictureIndex(pictureIndex === 0 ? nbPictures - 1 : pictureIndex - 1);
    }

    return (
        <div className="slideshow">
            <div className="slideshow-content" style={{transform: `translateX(${-pictureIndex * 100}%)`}}>
                {pictures.map((picture, index) => {
                    return <img key={index} src={srcPath+picture.src} alt={picture.alt}></img>
                })}
            </div>

            {nbPictures > 1 &&
            <Fragment>
                <FontAwesomeIcon icon={faChevronLeft} size="xl" className="controller-arrow left-arrow" onClick={previousPicture}></FontAwesomeIcon>
                <FontAwesomeIcon icon={faChevronRight} size="xl" className="controller-arrow right-arrow" onClick={nextPicture}></FontAwesomeIcon>
                {/* <p className="picture-index">{pictureIndex+1 + "/" + nbPictures}</p> */}
            </Fragment>}
        </div>
    )
}

export default Slideshow;