
import './Header.css';
import {useEffect, useRef, useState} from "react";
import * as React from "react";
import {handleDocumentClick} from "../../utils/tools.ts";

const Header = () => {
    const [arrButtonsOfBurger, setArrButtonsOfBurger] = useState<string[]>([]);

    const refListMenu = useRef<HTMLUListElement | null>(null);
    const refBurger = useRef<HTMLLIElement | null>(null);

    const handleClick = (e:React.MouseEvent<HTMLAnchorElement>)=>{
        e.preventDefault();
        refListMenu.current!.classList.toggle("hidden-menu");
    }


    useEffect(() => {
        document.addEventListener("click", (e)=> handleDocumentClick(e,refBurger,refListMenu));

        return () => {
            document.removeEventListener("click", (e)=> ()=> handleDocumentClick(e,refBurger,refListMenu));
        };
    },[])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 900) {
                const arr = ["Messages", "Notification", "Account"];
                if (window.innerWidth < 600) {
                    arr.push("Create Resume");
                }
                setArrButtonsOfBurger(arr);
            } else {
                setArrButtonsOfBurger([]);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize)
    },[])



//todo href add

    return (
        <header className='header'>
            <h2 className="header-title">
                <a className="header-title__link " href="/">avoda</a>
            </h2>

            <nav className="header-menu">
                <a className="header-menu__button btn" href="#">Create Resume</a>
                <ul className="menu-list">
                    <li className="menu-list-item">
                        <a href="" className="menu-list__link">
                            {/*todo add logic*/}
                            <img src="public/icons/search.png" alt="search" className="menu-list__img" loading="lazy"/>
                        </a>
                    </li>
                    <li className="menu-list-item">
                        <a href="" className="menu-list__link">
                            <img src="public/icons/coment.png" alt="move to chats" className="menu-list__img" loading="lazy"/>
                        </a>
                    </li>
                    <li className="menu-list-item">
                        <a href="" className="menu-list__link">
                            <img src="public/icons/bell.png" alt="see message from companies" className="menu-list__img" loading="lazy"/>
                        </a>
                    </li>
                    <li className="menu-list-item">
                        <a href="" className="menu-list__link">
                            <img src="public/icons/user.png" alt="move to acoount setting" className="menu-list__img" loading="lazy"/>
                        </a>
                    </li>
                    <li ref={refBurger} className="menu-list-item burger-wrapper" >
                        <a href="/avoda-website/public" className="menu-list__link " onClick={handleClick}>
                            <img src="public/icons/menu.png" alt="tools button" className="menu-list__img" loading="lazy"/>
                        </a>
                        <ul ref={refListMenu} className={`burger-list hidden-menu`}>
                            {
                                arrButtonsOfBurger.map((text,i)=>
                                    <li className="burger-item"  key={i}>
                                        {/*todo href*/}
                                        <a href="#" className="burger-item__link">{text}</a>
                                    </li>
                                )
                            }
                            <li className="burger-item">
                                <a href="#" className="burger-item__link exist">Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>

            </nav>
        </header>
    );
};

export default Header;
