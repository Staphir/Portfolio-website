import './miniCard.scss';


function MiniCard({ name, picture }) {
    const assetPath = process.env.PUBLIC_URL + '/assets';

    return (
        <div className='mini-card'>
            <img className='icon' src={assetPath+picture.src} alt={picture.alt}></img>
            <p className='name'>{name}</p>
        </div>
    )
}

export default MiniCard;