import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import css from "./style.scss";
import { useState } from "react";
import { useRef } from "react";
import { AudioPlayer } from 'react-audio-play';
import { Link } from "react-router-dom";


function CollapseAudio({title, description, content}) {
    const srcPath = process.env.PUBLIC_URL + '/assets';

    const displayTitleList = {};
    content.forEach(object => {
        displayTitleList[object.name] = false;
    });
    const [displayTitle, setDisplayTitle] = useState(displayTitleList)

    const [isOpen, setIsOpen] = useState(false);
    const [chevronPosition, setChevronPosition] = useState("down");
    
    const collapseContentRef = useRef();
        


    const invertDisplayingTitle = (e) => {
        setDisplayTitle({
            ...displayTitle,
            [e.target.id]: !displayTitle[e.target.id]
        })
    }

    const toggleDropdown = () => {
        if(isOpen) {
            setIsOpen(false);
            setChevronPosition("down");
        } else {
            setIsOpen(true);
            setChevronPosition("up");
        }
    }

    return (
        <div className="collapse">
            <button className="top-bar" onClick={toggleDropdown}>
                {title}
                <FontAwesomeIcon icon={faChevronDown} className={"chevron " + chevronPosition} onClick={toggleDropdown}></FontAwesomeIcon>
            </button>
            <div ref={collapseContentRef} className="collapse-content" style={isOpen ? {height : collapseContentRef.current.scrollHeight + "px"} : {height: "0px"}}>
                <div className="collapse-text">
                    <p className='quiz-description'>{description}</p>
                    {content.map((object, index) => {
                        return <div key={index} className='audio-line'> 
                                    <p id={object.name} className='audio-name' style={object.color !== "default" ? {color: css.redText} : {color: css.text}} onClick={invertDisplayingTitle}>{displayTitle[object.name] ? object.name : "Afficher le titre"}</p>
                                    <AudioPlayer className='audio-player' src={srcPath + object.audio}/>
                                    <div className='audio-links'>
                                        <Link to={srcPath + object.audio} download={object.name + "_audio"} target="_blank" rel='noopener noreferrer' className='link-mp3'>mp3</Link>
                                        <Link to={srcPath + object.text} download={object.name + "_texte"} target="_blank" rel='noopener noreferrer' className='link-text'>paroles</Link>
                                    </div>
                                </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default CollapseAudio;