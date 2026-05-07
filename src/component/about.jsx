import './about.css'
import logo from './img/logo.jpg'
import promptlearn from './img/promptlearn.png'
function About(){
    return(
        <div id="about">
            <div className="about-container">
                    <img className='img-me' src={logo} alt="" style={{width:250, height:300}}/>
                <div className="about-detail">
                    <h1>Teekawin (New)</h1>
                    <p>Location: Bangkok, Thailand</p>
                    <p>Career Goal: Full-Stack Developer</p>
                    <p>Status: University Student</p>
                    <p>Focused on React and Responsive Web Development</p>
                </div>
            </div>

            <div className="project-section">
                <div className="project-section-container">
                    <h1>What project can I do</h1>
                
                

                    <div className='project-result'>
                        <div className="project-container">
                            <div className="project-promptlearnchi">
                                <img className='img-promptlearnchi' src={promptlearn} alt="" style={{width:410, height:200}}/>
                                <h3>PromtLearnChi</h3>
                                <p>UI/UX Responsive</p>
                            </div>

                            <div className="project-resumeai">
                                <img src="" alt="" />
                                <h3>ResumeAI</h3>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}


export default About