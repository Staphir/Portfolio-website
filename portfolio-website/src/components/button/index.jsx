import { Link } from 'react-router-dom';
import './style.scss';


function Button({ content, link, state = null }) {

    return (
        <Link to={link} state={state}>
            <button className='button' type='button'>{content}</button>
        </Link>
    )
}

export default Button