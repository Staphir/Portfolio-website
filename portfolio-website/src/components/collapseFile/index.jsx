import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import { useState } from "react";
import { useRef } from "react";
import { Link } from 'react-router-dom';


function CollapseFile({title, description, content}) {
    const srcPath = process.env.PUBLIC_URL + '/assets';

    const [isOpen, setIsOpen] = useState(false);
    const [chevronPosition, setChevronPosition] = useState("down");
    const collapseContentRef = useRef();
        
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
                        return <div key={index} className='file-line'>
                                    <p className='file-name'>{object.name} :</p>
                                    <Link className="file-link" to={srcPath + object.file} download={object.name} target="_blank" rel='noopener noreferrer'>Télécharger</Link>
                                </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default CollapseFile;