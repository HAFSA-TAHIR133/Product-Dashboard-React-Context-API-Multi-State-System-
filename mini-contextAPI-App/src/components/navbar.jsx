import { Link } from "react-router-dom";
import { useThemeContext } from '../contexts/themeContext'; 
import '../app.css'; 

function Navbar(){
    const { theme } = useThemeContext(); 

    return(
        <div className={`navbar theme-setting ${theme}`}>
            <div className="nav-links">
                <Link to='/'>Home</Link>
                <Link to='/setting'>Settings</Link>
                <Link to='/analytics'>Analytics</Link>
            </div>
        </div>
    );
};

export default Navbar;