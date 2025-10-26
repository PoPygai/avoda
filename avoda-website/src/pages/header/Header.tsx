
const Header = () => {
    return (
        <header>
            <img src="" alt="logo"/>
            <nav className="header-menu">
                <a className="header-menu__button" href="#">Create Resume</a>
                <ul className="menu-list">
                    <li className="menu-list-item">
                        <a href="" className="menu-list__link">
                            <img src="../../assets/icons/search.png" alt="search" className="menu-list__img"/>
                        </a>
                    </li>
                    <li className="menu-list-item">
                        <a href="" className="menu-list__link">
                            <img src="../../assets/icons/coment.png" alt="move to chats" className="menu-list__img"/>
                        </a>
                    </li>
                    <li className="menu-list-item">
                        <a href="" className="menu-list__link">
                            <img src="../../assets/icons/bell.png" alt="see message from companies" className="menu-list__img"/>
                        </a>
                    </li>
                    <li className="menu-list-item">
                        <a href="" className="menu-list__link">
                            <img src="../../assets/icons/user.png" alt="move to acoount setting" className="menu-list__img"/>
                        </a>
                    </li>
                {/*    burger menu*/}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
