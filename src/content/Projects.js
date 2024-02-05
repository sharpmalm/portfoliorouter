import './Projects.css'
function Projects() {
    return ( 
        <div className="Project">
            <label className='plabel'>Here is a list of my most recently completed projects from</label>
            <label className='plabel'>school with brief descriptions and links to the GitHub repos</label>
            <label className="plabel2">
                <a href="https://github.com/sharpmalm/Cakes" target="_blank" rel="noreferrer">
                    CAKES
                </a>
            </label>
            <label className="plabel2">
                <a href="https://github.com/sharpmalm/Asset Tracking" target="_blank" rel="noreferrer">
                    ASSET TRACKING
                </a>
            </label>
            {/* <h1>Here is a list of my most recently completed projects from school with brief descriptions and links to the GitHub repositories.</h1> */}
        </div>
        
     );
}

export default Projects;