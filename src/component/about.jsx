import './about.css'
import logo from './img/logo.jpg'
function About(){
    return(
        <div id="about">
            <div className="about-container">
                    <img className='img-me' src={logo} alt="" style={{width:250, height:300}}/>
                <div className="about-detail">
                    <h1>Teekawin (New)</h1>
                    <p>Date of Birth: 24 October 2007</p>
                    <p>Location: Bangkok, Thailand</p>
                    <p>Career Goal: Full-Stack Developer</p>
                    <p>Status: University Student</p>
                    <p>Focused on React and Responsive Web Development</p>
                </div>
            </div>

            <div className="skills-section">
                <h1>My Skills</h1>
                <div class="skills-container">
                    <div class="skill-box">
                    <h2>Skills</h2>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    </div>

                    <div class="skill-box">
                    <h2>Currently Learning</h2>
                    <p>React</p>
                    <p>Github</p>
                    <p>UI Design</p>
                    </div>

                </div>
            </div>

        </div>
        
        
    )
}

export default About