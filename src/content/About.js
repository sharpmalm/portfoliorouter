import './About.css';
import './images/cyborg.jpg';

function About() {
    return ( 
        <div className="About">
            <label className='label'>I am a recently educated C# programmer looking for my first paid assignment!</label>
            <label className='label'>New skill set :</label>
            <label className='label'>React.js</label>
            <label className='label'>ASP.NET WEB</label>
            <label className='label'>MVC</label>
            <label className='label'>SQL / LINQ / Entity</label>
            {/* <p>I am a recently educated C# programmer looking for my first paid assignment!</p>
            <p className='PLeft'>...................C#</p>
            <p className='PLeft'>...................React.js</p>
            <p className='PLeft'>...................ASP.NET WEB</p>
            <p className='PLeft'>...................MVC</p>
            <p className='PLeft'>...................SQL</p>
            <p className='PLeft'>...................Entity</p> */}
        </div>
        
     );
}

export default About;