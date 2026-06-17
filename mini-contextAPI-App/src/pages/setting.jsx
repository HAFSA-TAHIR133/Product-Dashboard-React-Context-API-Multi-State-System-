import {useThemeContext} from '../contexts/themeContext'
import '../App.css'

function Setting(){
    const {theme,setTheme}=useThemeContext();

    return(
        <>
       
        <div className={`setting-page theme-setting ${theme}`}>
            <button onClick={()=>{setTheme(theme ==="light"?"dark":"light")}}>Toggle Theme</button>

        </div>
         </>
    );
};


export default Setting;