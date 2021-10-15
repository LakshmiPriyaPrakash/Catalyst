import './Footer.css'

function Footer() {
    return (
        <div id="footer-container">
                <p id="name">Lakshmi Priya Prakash</p>
                <div id="links">
                    <div id="github">
                        <a className="gl-links" href='https://github.com/LakshmiPriyaPrakash'>
                            <img className="links-logo" src="https://res.cloudinary.com/lpriya/image/upload/v1634337384/Catalyst/github-logo_jbearb.png" alt="Github logo"/>
                        </a>
                    </div>
                    <div id="linkedin">
                        <a className="gl-links" href='https://www.linkedin.com/in/lakshmi-priya-prakash/'>
                            <img className="links-logo" src="https://res.cloudinary.com/lpriya/image/upload/v1634337384/Catalyst/linkedin-logo_f6zqhq.png" alt="LinkedIn logo"/>
                        </a>
                    </div>
                </div>
        </div>
    );
}

export default Footer;
