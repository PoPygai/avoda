import "./Footer.css";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <h3 className="watermark">© 2025  «Avoda»</h3>
                <nav className="footer-menu">
                    <ul className="footer-menu-list">
                        <li className="footer-menu-list-item">
                            <a href="" className="footer-menu-list-item__link">Help</a>
                        </li>
                        <li className="footer-menu-list-item">
                            <a href="" className="footer-menu-list-item__link">Advertising</a>
                        </li>
                        <li className="footer-menu-list-item">
                            <a href="" className="footer-menu-list-item__link">About US</a>
                        </li>
                    </ul>
                    <ul className="footer-icons-menu">
                        <li className="icons-menu-item">
                            <a href="" className="icons-menu-item__link">
                                <img src="public/icons/instagram.png" alt="url to account in instagram" className="icons-menu-item__img" loading="lazy"/>
                            </a>
                        </li>
                        <li className="icons-menu-item">
                            <a href="" className="icons-menu-item__link">
                                <img src="public/icons/facebook.png" alt="url to account in facebook" className="icons-menu-item__img"  loading="lazy"/>
                            </a>
                        </li>
                        <li className="icons-menu-item">
                            <a href="" className="icons-menu-item__link">
                                <img src="public/icons/telegram.png" alt="url to account in telegram" className="icons-menu-item__img"  loading="lazy"/>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/*todo href*/}
            </div>

        </footer>
    );
};

export default Footer;
