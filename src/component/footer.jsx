import './footer.css'
function Footer(){
    return(
        <div id='contact'>
            <div className="contact-container">
                <div className="icons">
                    <a href="https://www.instagram.com/telenotslow/" target="_blank">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/@Eeasy-code" target="_blank">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                    <a href="https://github.com/Testerzopa" target="_blank">
                    <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.facebook.com/teekawin.jryoba.a/" target="_blank">
                    <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#"><i className="fa-solid fa-envelope"></i></a>
                </div>
                <div className="footer">
                    <p>Copyright© {new Date().getFullYear()} Teekawin | Built with React</p>
                </div>
            </div>
        </div>
    )
}

export default Footer