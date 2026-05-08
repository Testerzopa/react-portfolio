import './about.css'
import logo from './img/logo.jpg'
import promptlearn from './img/promptlearn.png'
import resumeai from './img/resumeai.png'
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

            <div id='project' className="project-section">
                <div className="project-section-container">
                    <h1 className='project-header-one'>What project can I do</h1>

                

                    <div className='project-result'>
                        <div className="project-container">
                            <div className="project-promptlearnchi">
                                <a href="https://testerzopa.github.io/promtlearnchi/" target="_blank"><img className='img-promptlearnchi' src={promptlearn} alt="" style={{width:406, height:200}}/></a>
                                <h3>PromtLearnChi</h3>
                                <p>UI/UX Responsive</p>
                                <div className="project-promptlearnchi-btn">
                                    <a href="https://testerzopa.github.io/promtlearnchi/" target="_blank"><button className='project-btn-demo'>View Demo</button></a>
                                    <a href="https://github.com/Testerzopa/promtlearnchi" target="_blank"><button className='project-btn-github'>View Github</button></a>
                                </div>
                            </div>

                            <div className="project-resumeai">
                                <a href="https://github.com/Testerzopa/resume-thai-ai" target="_blank"><img className='img-resumeai' src={resumeai} alt="" style={{width:406, height:200}}/></a>
                                <h3>ResumeAI</h3>
                                <p>React State</p>
                                <div className="project-resumeai-btn">
                                    <a href="https://github.com/Testerzopa/resume-thai-ai" target="_blank"><button className='project-btn-github'>View Github</button></a>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}


export default About