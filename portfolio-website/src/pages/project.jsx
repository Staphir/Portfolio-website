import '../styles/project.scss';
import { useLocation } from 'react-router-dom';
import PlayerContainer from '../components/player';
import Slideshow from '../components/slideshow';
import Iframe from 'react-iframe';
import { useState, useEffect } from 'react';

function Project() {
    const location = useLocation();
    const projectData = location.state;
    const [displayIframe, setDisplayIframe] = useState(true);

    window.addEventListener('resize', () => {
      window.innerWidth < 1024 ? setDisplayIframe(false) : setDisplayIframe(true);
    })

    useEffect(() => {
        window.innerWidth < 1024 ? setDisplayIframe(false) : setDisplayIframe(true);
      },[]);

    return( 
        <main className='project-page'>
            <h1 className='project-page-title'>{projectData.name}</h1>
            {projectData.description.map((description) => {
                return <section key={description.title} className='project-section'>
                    <div className="project-media-container">
                        {description.link.length > 0 && displayIframe ? (
                            <Iframe className='project-iframe' url={description.link}></Iframe>
                        ) : (
                            description.videos.length > 0 ? <PlayerContainer className="project-media" video={description.videos[0]}/> : <Slideshow className="project-media" pictures={description.pictures}/>
                        )}
                    </div>
                    <div className='project-description'>
                        <h2 className='description-title'>{description.time}</h2>
                        <p className='description-content'>{description.text}</p>
                        {/* {description.link.length > 0 && description.link.map((link) => {
                            return <Link to={link.src} className='description-link'>{link.text}</Link>
                        })} */}
                    </div>
                    {/* {description.link.length > 0 && description.link.map((link) => {
                        return <iframe src={link.src}></iframe>
                    })} */}
                </section>
            })}
        </main>
        )
    }
    
    export default Project;