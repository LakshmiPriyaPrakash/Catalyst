import './Footer.css'

function Footer() {
    return (
        <div id="footer-container">
                <p id="name">Lakshmi Priya Prakash</p>
                <div id="links">
                    <div id="github">
                        <img className="links-logo" src="https://res.cloudinary.com/lpriya/image/upload/v1634337384/Catalyst/github-logo_jbearb.png" />
                        <a href='https://github.com/LakshmiPriyaPrakash' />
                    </div>
                    <div id="linkedin">
                        <img className="links-logo" src="https://res.cloudinary.com/lpriya/image/upload/v1634337384/Catalyst/linkedin-logo_f6zqhq.png" />
                        <a href='https://www.linkedin.com/in/lakshmi-priya-prakash/' />
                    </div>
                </div>
        </div>
    );
}

export default Footer;
