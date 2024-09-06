import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import { useState } from "react";
import { useRef } from "react";


function Collapse({title, content}) {
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
                    {content.map((contentLine, index) => {
                        return <p key={index}>{contentLine}</p>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Collapse;