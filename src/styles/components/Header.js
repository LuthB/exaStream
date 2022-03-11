import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul> 
                <NavLink to={"/"} className={(nav) => (nav.isActive )}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to={"/"} className={(nav) => (nav.isActive )}>
                <li>Coup de coeur</li>
                </NavLink>
                </ul>
            </nav>
            <h1>ExaStream</h1>
        </div>
    );
};

export default Header;